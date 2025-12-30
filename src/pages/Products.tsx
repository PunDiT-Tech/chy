import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Filter, X, ChevronDown, Grid3X3, List } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { products, categories, getBrands } from '@/data/products';
import { cn } from '@/lib/utils';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categoryFilter = searchParams.get('category') || '';
  const brandFilter = searchParams.get('brand') || '';
  const query = (searchParams.get('q') || '').toLowerCase();
  const sortBy = searchParams.get('sort') || 'featured';
  const minPrice = Number(searchParams.get('minPrice')) || 0;
  const maxPrice = Number(searchParams.get('maxPrice')) || 10000;

  const brands = getBrands();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    // Brand filter
    if (brandFilter) {
      result = result.filter((p) => p.brand === brandFilter);
    }

    // Price filter
    result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

   // Text search
   if (query) {
     const contains = (s?: string) => (s || '').toLowerCase().includes(query);
     result = result.filter((p) => contains(p.name) || contains(p.brand) || contains(p.description) || contains(p.category));
   }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [categoryFilter, brandFilter, sortBy, minPrice, maxPrice]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const activeFilterCount = [categoryFilter, brandFilter].filter(Boolean).length;

  return (
    <>
      <Helmet>
        <title>Shop Laptops - Chyworld</title>
        <meta
          name="description"
          content="Browse our complete collection of laptops. Filter by category, brand, and price. Gaming, Business, Student, and Ultrabook laptops available."
        />
      </Helmet>

      <Layout>
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container-main">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {categoryFilter
                ? `${categories.find((c) => c.id === categoryFilter)?.name} Laptops`
                : 'All Laptops'}
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl">
              Discover our complete collection of premium laptops. Use filters to find your perfect match.
            </p>
          </div>
        </div>

        <div className="container-main py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-foreground">Filters</h2>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-accent hover:underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Categories */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() =>
                          updateFilter('category', categoryFilter === category.id ? '' : category.id)
                        }
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          categoryFilter === category.id
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-secondary"
                        )}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">Brand</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <button
                        key={brand}
                        onClick={() =>
                          updateFilter('brand', brandFilter === brand ? '' : brand)
                        }
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          brandFilter === brand
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-secondary"
                        )}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">Price Range</h3>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={minPrice || ''}
                      onChange={(e) => updateFilter('minPrice', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxPrice === 10000 ? '' : maxPrice}
                      onChange={(e) => updateFilter('maxPrice', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    className="lg:hidden"
                    onClick={() => setIsFilterOpen(true)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                    {activeFilterCount > 0 && (
                      <span className="ml-2 px-2 py-0.5 bg-accent text-accent-foreground rounded-full text-xs">
                        {activeFilterCount}
                      </span>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    {filteredProducts.length} products
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => updateFilter('sort', e.target.value)}
                      className="appearance-none px-4 py-2 pr-10 rounded-lg border border-border bg-background text-sm cursor-pointer"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="newest">Newest</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-muted-foreground" />
                  </div>

                  {/* View Mode */}
                  <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={cn(
                        "p-2 transition-colors",
                        viewMode === 'grid' ? "bg-secondary" : "hover:bg-secondary/50"
                      )}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={cn(
                        "p-2 transition-colors",
                        viewMode === 'list' ? "bg-secondary" : "hover:bg-secondary/50"
                      )}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {categoryFilter && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm">
                      {categories.find((c) => c.id === categoryFilter)?.name}
                      <button onClick={() => updateFilter('category', '')}>
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  {brandFilter && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm">
                      {brandFilter}
                      <button onClick={() => updateFilter('brand', '')}>
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div
                  className={cn(
                    "grid gap-6",
                    viewMode === 'grid'
                      ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                      : "grid-cols-1"
                  )}
                >
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground mb-4">
                    No products found matching your criteria.
                  </p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </main>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-foreground/50"
              onClick={() => setIsFilterOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-background p-6 overflow-y-auto animate-slide-in-right">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-foreground">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Same filter content as sidebar */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          updateFilter('category', categoryFilter === category.id ? '' : category.id);
                        }}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          categoryFilter === category.id
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-secondary"
                        )}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">Brand</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => {
                          updateFilter('brand', brandFilter === brand ? '' : brand);
                        }}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          brandFilter === brand
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-secondary"
                        )}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <Button variant="outline" className="flex-1" onClick={clearFilters}>
                  Clear
                </Button>
                <Button className="flex-1" onClick={() => setIsFilterOpen(false)}>
                  Apply
                </Button>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Products;
