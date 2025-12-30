import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn, usdToNgn, formatNaira } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addToCart } = useCart();

  return (
    <div
      className={cn(
        "group relative bg-card rounded-2xl overflow-hidden shadow-card hover-lift",
        className
      )}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.discount && (
          <span className="px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-bold">
            -{product.discount}%
          </span>
        )}
        {!product.inStock && (
          <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold">
            Sold Out
          </span>
        )}
        {product.featured && product.inStock && (
          <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
            Featured
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick Actions */}
        <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <Link to={`/product/${product.id}`}>
            <Button variant="secondary" size="icon" className="h-12 w-12 rounded-full">
              <Eye className="h-5 w-5" />
            </Button>
          </Link>
          {product.inStock && (
            <Button
              variant="hero"
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
          {product.brand}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Specs Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">
            {product.specs.cpu.split(' ').slice(0, 3).join(' ')}
          </span>
          <span className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">
            {product.specs.ram}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium text-foreground">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">
                {formatNaira(usdToNgn(product.price))}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatNaira(usdToNgn(product.originalPrice))}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
