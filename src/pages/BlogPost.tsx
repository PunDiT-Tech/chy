import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { posts } from '@/data/posts';

function simpleMarkdownToHtml(md: string): string {
  // Very light markdown: headings, bold, italics, paragraphs, lists
  let html = md
    .replace(/^###\s+(.*)$/gim, '<h3>$1</h3>')
    .replace(/^##\s+(.*)$/gim, '<h2>$1</h2>')
    .replace(/^#\s+(.*)$/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Lists
  html = html.replace(/^(?:-\s+.*(?:\n|$))+?/gim, (block) => {
    const items = block
      .trim()
      .split(/\n/)
      .map((line) => line.replace(/^-\s+/, ''))
      .map((li) => `<li>${li}</li>`) 
      .join('');
    return `<ul>${items}</ul>`;
  });

  // Paragraphs
  html = html
    .split(/\n{2,}/)
    .map((chunk) =>
      /<(h1|h2|h3|ul|li)/.test(chunk) ? chunk : `<p>${chunk.replace(/\n/g, '<br/>')}</p>`
    )
    .join('\n');

  return html;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const url = `/posts/${id}.md`;
    fetch(url)
      .then((res) => (res.ok ? res.text() : ''))
      .then((text) => setContent(text))
      .catch(() => setContent(''))
      .finally(() => setLoading(false));
  }, [id]);

  if (!post) {
    return (
      <Layout>
        <div className="container-main py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-accent hover:underline">Back to blog</Link>
        </div>
      </Layout>
    );
  }

  const html = content ? simpleMarkdownToHtml(content) : `<p>${post.excerpt}</p>`;

  return (
    <>
      <Helmet>
        <title>{post.title} - Chyworld</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <Layout>
        {/* Cover */}
        <section className="relative">
          <div className="h-60 md:h-80 w-full overflow-hidden bg-secondary">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Content */}
        <section className="py-10">
          <div className="container-main">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">{post.category}</span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3">{post.title}</h1>
                <p className="text-sm text-muted-foreground mt-2">
                  {new Date(post.date).toLocaleDateString()} · {post.author}
                </p>
              </div>
              {loading ? (
                <p className="text-muted-foreground">Loading…</p>
              ) : (
                <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
              )}
              <div className="mt-10">
                <Link to="/blog" className="text-accent hover:underline">← Back to blog</Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogPost;
