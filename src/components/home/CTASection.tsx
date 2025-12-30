import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-3xl gradient-hero">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                Limited Time Offer
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Get Up to 25% Off on Gaming Laptops
              </h2>

              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
                Don't miss out on our exclusive deals! Upgrade your gaming setup with the latest high-performance laptops at unbeatable prices. Offer ends soon.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products?category=gaming">
                  <Button variant="hero" size="xl" className="group">
                    Shop Gaming Laptops
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="heroOutline" size="xl">
                    Browse All Deals
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -top-20 -right-40 w-60 h-60 bg-teal-400/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
