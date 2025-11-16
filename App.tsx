
import React, { useState, useCallback } from 'react';
import { CartItem, Product } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CategoryCarousel from './components/CategoryCarousel';
import Footer from './components/Footer';
import CartView from './components/CartView';
import { PRODUCTS } from './constants';

type View = 'home' | 'cart';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [view, setView] = useState<View>('home');

  const addToCart = useCallback((product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
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

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={cartItemCount} onCartClick={() => setView('cart')} onLogoClick={() => setView('home')} />
      <main className="flex-grow container mx-auto px-4 py-6">
        {view === 'home' ? (
          <>
            <Hero />
            <CategoryCarousel />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-6">Bestsellers</h2>
            <ProductGrid 
              products={PRODUCTS} 
              cart={cart}
              addToCart={addToCart}
              updateQuantity={updateQuantity}
            />
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
