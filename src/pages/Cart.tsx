import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { usdToNgn, formatNaira } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Shopping Cart - Chyworld</title>
        </Helmet>

        <Layout>
          <div className="container-main py-20">
            <div className="max-w-md mx-auto text-center">
              <div className="h-20 w-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Your cart is empty
              </h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any laptops to your cart yet.
              </p>
              <Link to="/products">
                <Button variant="hero" size="lg">
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </Layout>
      </>
    );
  }

  const FREE_SHIPPING_THRESHOLD_USD = 999;
  const SHIPPING_FEE_USD = 49;
  const TAX_RATE = 0.08;

  // Compute totals in NGN based on underlying USD prices
  const subtotalNGN = usdToNgn(totalPrice);
  const shippingNGN = totalPrice > FREE_SHIPPING_THRESHOLD_USD ? 0 : usdToNgn(SHIPPING_FEE_USD);
  const taxNGN = usdToNgn(totalPrice * TAX_RATE);
  const grandTotalNGN = subtotalNGN + shippingNGN + taxNGN;

  return (
    <>
      <Helmet>
        <title>Shopping Cart ({items.length}) - Chyworld</title>
      </Helmet>

      <Layout>
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container-main">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <p className="text-primary-foreground/70 mt-2">
              {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </div>

        <div className="container-main py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-card rounded-xl shadow-card"
                >
                  {/* Image */}
                  <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="font-semibold text-foreground hover:text-accent transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.product.brand}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.product.specs.cpu} • {item.product.specs.ram}
                    </p>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex flex-col items-end justify-between">
                    <span className="font-bold text-foreground">
                      {formatNaira(usdToNgn(item.product.price * item.quantity))}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-2 hover:bg-secondary transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-secondary transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear Cart */}
              <div className="flex justify-end">
                <Button variant="ghost" onClick={clearCart}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl shadow-card p-6 sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">{formatNaira(subtotalNGN)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {shippingNGN === 0 ? (
                        <span className="text-accent">Free</span>
                      ) : (
                        formatNaira(shippingNGN)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span className="font-medium">{formatNaira(taxNGN)}</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-lg font-bold">
                        {formatNaira(grandTotalNGN)}
                      </span>
                    </div>
                  </div>
                </div>

                {shippingNGN > 0 && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {totalPrice >= 999 ? 'You have free shipping' : `Add ${formatNaira(usdToNgn(999 - totalPrice))} more for free shipping`}
                  </p>
                )}

                <Button variant="hero" size="lg" className="w-full mb-4">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span>Secure checkout with SSL encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
