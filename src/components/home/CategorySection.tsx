import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Briefcase, GraduationCap, Laptop, ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gamepad2,
  Briefcase,
  GraduationCap,
  Laptop,
};

const CategorySection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect laptop for your specific needs. Browse our curated categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Laptop;
            return (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6 min-h-[280px] flex flex-col justify-end">
                  <div className="h-14 w-14 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-accent font-medium text-sm group-hover:text-teal-300 transition-colors">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
