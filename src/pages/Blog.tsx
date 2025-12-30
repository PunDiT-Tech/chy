import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { posts } from '@/data/posts';

const categories = Array.from(new Set(posts.map(p => p.category)));

const BlogFilters: React.FC = () => {
  const [active, setActive] = React.useState<string>('All');
  const [query, setQuery] = React.useState('');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const filtered = React.useMemo(() => {
    const base = active === 'All' ? posts : posts.filter(p => p.category === active);
    if (!query.trim()) return base.sort((a,b)=> b.date.localeCompare(a.date));
    const q = query.toLowerCase();
    return base.filter(p => [p.title, p.excerpt, p.category, p.author].some(v => v.toLowerCase().includes(q)))
               .sort((a,b)=> b.date.localeCompare(a.date));
  }, [active, query]);

  // expose filtered via window for parent render (hack-free: we will re-calc in parent too)
  // but for simplicity, we return UI and let parent compute again using the same logic.

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {['All', ...categories].map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1 rounded-full text-sm ${active === cat ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground hover:bg-secondary/70'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="w-full md:w-1/2 px-3 py-2 rounded-lg border border-border bg-background"
        />
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const latest = React.useMemo(() => [...posts].sort((a, b) => b.date.localeCompare(a.date)), []);
  const [active, setActive] = React.useState<string>('All');
  const [query, setQuery] = React.useState('');
  const filtered = React.useMemo(() => {
    const base = active === 'All' ? latest : latest.filter(p => p.category === active);
    if (!query.trim()) return base;
    const q = query.toLowerCase();
    return base.filter(p => [p.title, p.excerpt, p.category, p.author].some(v => v.toLowerCase().includes(q)));
  }, [active, query, latest]);

  return (
    <>
      <Helmet>
        <title>Blog - Chyworld</title>
        <meta name="description" content="News, tips, and guides from Chyworld." />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-16">
          <div className="container-main">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CHYWORLD ENTERPRISE</h1>
            <p className="text-primary-foreground/80 max-w-2xl">
              Chyworld Enterprise — latest updates, buying guides, product tips, and company news.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container-main">
            {/* Category chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {['All', ...categories].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-3 py-1 rounded-full text-sm ${active === cat ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground hover:bg-secondary/70'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts..."
              className="w-full md:w-1/2 px-3 py-2 rounded-lg border border-border bg-background"
            />
          </div>
        </section>

        {/* Latest posts */}
        <section className="py-12">
          <div className="container-main">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, idx) => (                <article
                  key={post.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up"
                  style={{ animationDelay: `${idx * 0.06}s` }}
                >
                  <div className="aspect-[16/10] bg-secondary overflow-hidden">
                    <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">{post.category}</span>
                      <time className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</time>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="text-accent font-medium hover:underline">
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Newsletter CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container-main">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-3">Subscribe for updates</h2>
              <p className="text-muted-foreground mb-6">Get the latest posts and offers from Chyworld.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input type="email" placeholder="Your email" className="px-4 py-3 rounded-lg border border-border bg-background w-full sm:w-80" />
                <button className="px-5 py-3 rounded-lg bg-accent text-accent-foreground font-medium">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
