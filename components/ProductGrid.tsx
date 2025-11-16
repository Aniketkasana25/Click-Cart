
import React from 'react';
import { Product, CartItem } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, cart, addToCart, updateQuantity }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {products.map(product => {
        const cartItem = cart.find(item => item.id === product.id);
        return (
          <ProductCard 
            key={product.id}
            product={product}
            cartItem={cartItem}
            addToCart={addToCart}
            updateQuantity={updateQuantity}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
