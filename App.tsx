import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { CartItem, Product } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CategoryCarousel from './components/CategoryCarousel';
import Footer from './components/Footer';
import CartView from './components/CartView';
import Spinner from './components/Spinner';
import { PRODUCTS, CATEGORIES } from './constants';
import CategoryFilter from './components/CategoryFilter';
import Fuse from 'fuse.js';

type View = 'home' | 'cart';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [view, setView] = useState<View>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [suggestions, setSuggestions] = useState<Fuse.FuseResult<Product>[]>([]);

  const fuse = useMemo(() => {
    if (products.length === 0) return null;
    return new Fuse(products, {
      keys: ['name', 'category'],
      threshold: 0.4,
      minMatchCharLength: 2,
      includeMatches: true,
    });
  }, [products]);

  useEffect(() => {
    // Simulate fetching products from an API
    setIsLoading(true);
    const timer = setTimeout(() => {
      setProducts(PRODUCTS);
      setIsLoading(false);
    }, 1500); // 1.5 second delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const addToCart = useCallback((product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1, imageUrl: product.imageUrl || '' }];
      }
    });
  }, []);

  const updateQuantity = useCallback((productId: number, newQuantity: number) => {
    setCart(prevCart => {
      if (newQuantity <= 0) {
        return prevCart.filter(item => item.id !== productId);
      }
      return prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  }, []);
  
  const handleImageGenerated = useCallback((productId: number, imageUrl: string) => {
    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === productId ? { ...p, imageUrl } : p
      )
    );
  }, []);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (fuse && query.length > 1) {
        const results = fuse.search(query, { limit: 5 });
        setSuggestions(results);
    } else {
        setSuggestions([]);
    }
  };

  const handleSuggestionClick = (product: Product) => {
    setSearchQuery(product.name);
    setSuggestions([]);
  };

  const handleLogoClick = () => {
    setView('home');
    setSearchQuery(''); 
    setSelectedCategory('All');
    setSuggestions([]);
  };

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const filteredProductsWithMatches = useMemo(() => {
    const categoryFilteredProducts = products.filter(p => selectedCategory === 'All' || p.category === selectedCategory);

    if (!searchQuery.trim() || !fuse) {
      return categoryFilteredProducts.map(p => ({ item: p, matches: [] }));
    }

    const searchResults = fuse.search(searchQuery);
    const searchResultIds = new Set(searchResults.map(r => r.item.id));
    
    // Filter the search results by the already category-filtered products
    return searchResults.filter(r => (selectedCategory === 'All' || r.item.category === selectedCategory));
  }, [searchQuery, fuse, products, selectedCategory]);
  
  const categoryNames = ['All', ...CATEGORIES.map(c => c.name)];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header 
        cartItemCount={cartItemCount} 
        onCartClick={() => setView('cart')} 
        onLogoClick={handleLogoClick}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        suggestions={suggestions.map(s => s.item)}
        onSuggestionClick={handleSuggestionClick}
      />
      <main className="flex-grow container mx-auto px-4 py-6">
        {view === 'home' ? (
          <>
            <Hero />
            <CategoryCarousel />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4">
              {searchQuery ? 'Search Results' : 'Bestsellers'}
            </h2>
            
            <CategoryFilter
              categories={categoryNames}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Spinner />
              </div>
            ) : filteredProductsWithMatches.length > 0 ? (
              <ProductGrid 
                productsWithMatches={filteredProductsWithMatches} 
                cart={cart}
                addToCart={addToCart}
                updateQuantity={updateQuantity}
                onImageGenerated={handleImageGenerated}
              />
            ) : (
               <div className="text-center py-10">
                <p className="text-lg text-gray-600">No products found matching your criteria.</p>
              </div>
            )}
          </>
        ) : (
          <CartView 
            cart={cart}
            updateQuantity={updateQuantity}
            onContinueShopping={() => setView('home')}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;