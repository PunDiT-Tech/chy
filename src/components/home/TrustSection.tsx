import React from 'react';
import { Shield, Truck, RotateCcw, Award, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'Your payment information is encrypted and secure with our SSL certification.',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Enjoy free shipping on all orders over ₦1,498,500. Fast delivery nationwide.',
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: 'Not satisfied? Return within 30 days for a full refund, no questions asked.',
  },
  {
    icon: Award,
    title: '2-Year Warranty',
    description: 'All laptops come with comprehensive manufacturer warranty coverage.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our expert team is available around the clock to help with any issues.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment',
    description: 'Pay your way with multiple payment options including installment plans.',
  },
];

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Chyworld?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best shopping experience with unmatched service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card p-8 rounded-2xl shadow-card hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <feature.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
