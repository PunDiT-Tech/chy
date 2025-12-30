import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Users, Globe, Target, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const About: React.FC = () => {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '50K+', label: 'Happy Customers' },
    { value: '500+', label: 'Products Sold' },
    { value: '99%', label: 'Satisfaction Rate' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We only stock laptops from trusted manufacturers with proven track records.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our dedicated support team is here to help you find the perfect laptop.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We ship worldwide with fast, reliable delivery and tracking.',
    },
    {
      icon: Target,
      title: 'Best Prices',
      description: 'Competitive pricing with regular deals and exclusive discounts.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Chyworld</title>
        <meta
          name="description"
          content="Learn about Chyworld, your trusted destination for premium laptops. 10+ years of experience serving 50K+ happy customers."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container-main">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                CHYWORLD ENTERPRISE
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Chyworld Enterprise — your trusted destination for premium laptops, expert support, and fast delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 -mt-12 relative z-10">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-2xl p-6 text-center shadow-card"
                >
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Chyworld was founded with a simple mission: make it easy for everyone
                    to find the perfect laptop. What started as a small online store has
                    grown into one of the most trusted names in computer retail.
                  </p>
                  <p>
                    We believe that buying a laptop should be a straightforward, enjoyable
                    experience. That's why we've curated a selection of the best laptops
                    from world-leading brands, backed by expert advice and unmatched
                    customer support.
                  </p>
                  <p>
                    Today, we serve customers across the globe, helping them find laptops
                    that perfectly match their needs—whether for gaming, business,
                    education, or creative work.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Our team"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                  <p className="text-2xl font-bold">Since 2014</p>
                  <p className="text-sm opacity-80">Serving customers worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary/30">
          <div className="container-main">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at Chyworld.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card p-8 rounded-2xl shadow-card text-center"
                >
                  <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
                  alt="Premium laptops"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Choose Chyworld?
                </h2>
                <ul className="space-y-4">
                  {[
                    'Authentic products from authorized dealers only',
                    'Expert team to help you find the perfect laptop',
                    'Competitive prices with price match guarantee',
                    'Fast shipping with real-time tracking',
                    'Comprehensive 2-year warranty coverage',
                    '30-day hassle-free return policy',
                    '24/7 customer support via chat, email, and phone',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
