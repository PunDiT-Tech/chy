import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh] py-20">
          {/* Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              New Arrivals Available
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              CHYWORLD ENTERPRISE
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Chyworld Enterprise — your trusted destination for premium laptops, expert support, and fast delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/products">
                <Button variant="hero" size="xl" className="group">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="heroOutline" size="xl">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Secure</p>
                  <p className="text-xs text-primary-foreground/60">Payment</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Free</p>
                  <p className="text-xs text-primary-foreground/60">Shipping</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Headphones className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm">24/7</p>
                  <p className="text-xs text-primary-foreground/60">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
                alt="Premium Laptop"
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute top-10 -left-10 bg-card p-4 rounded-xl shadow-xl animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-lg">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">2-Year Warranty</p>
                  <p className="text-xs text-muted-foreground">Full Coverage</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -right-10 bg-card p-4 rounded-xl shadow-xl animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-lg">★</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">4.9/5 Rating</p>
                  <p className="text-xs text-muted-foreground">10,000+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
