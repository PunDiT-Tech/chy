import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Check,
  X,
  Minus,
  Plus,
  ChevronRight,
  Cpu,
  HardDrive,
  Monitor,
  Battery,
  Layers,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { getProductById, products } from '@/data/products';
import { cn, usdToNgn, formatNaira } from '@/lib/utils';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container-main py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const specIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    cpu: Cpu,
    ram: Layers,
    storage: HardDrive,
    screen: Monitor,
    battery: Battery,
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - Chyworld</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <Layout>
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="container-main py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link to="/products" className="text-muted-foreground hover:text-foreground">
                Products
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Section */}
        <section className="container-main py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
                        selectedImage === index
                          ? "border-accent"
                          : "border-transparent hover:border-border"
                      )}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {product.discount && (
                  <span className="px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-sm font-bold">
                    {product.discount}% OFF
                  </span>
                )}
                {product.featured && (
                  <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <div>
                <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
                  {product.brand}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "text-border"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-4">
                <span className="text-4xl font-bold text-foreground">
                  {formatNaira(usdToNgn(product.price))}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {formatNaira(usdToNgn(product.originalPrice))}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                {product.inStock ? (
                  <>
                    <Check className="h-5 w-5 text-accent" />
                    <span className="text-accent font-medium">
                      In Stock ({product.stockQuantity} available)
                    </span>
                  </>
                ) : (
                  <>
                    <X className="h-5 w-5 text-destructive" />
                    <span className="text-destructive font-medium">Out of Stock</span>
                  </>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              {product.inStock && (
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <Button
                    variant="hero"
                    size="lg"
                    className="flex-1"
                    onClick={() => addToCart(product, quantity)}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4 pt-4 border-t border-border">
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {Object.entries(product.specs)
                  .slice(0, 4)
                  .map(([key, value]) => {
                    const Icon = specIcons[key] || Cpu;
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl"
                      >
                        <Icon className="h-5 w-5 text-accent" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase">
                            {key}
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>

        {/* Full Specifications */}
        <section className="bg-secondary/30 py-12">
          <div className="container-main">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Full Specifications
            </h2>
            <div className="bg-card rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {Object.entries(product.specs).map(([key, value], index) => (
                  <div
                    key={key}
                    className={cn(
                      "flex justify-between p-4 border-b border-border",
                      index % 2 === 0 ? "md:border-r" : ""
                    )}
                  >
                    <span className="text-muted-foreground capitalize">{key}</span>
                    <span className="font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="container-main py-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </Layout>
    </>
  );
};

export default ProductDetail;
