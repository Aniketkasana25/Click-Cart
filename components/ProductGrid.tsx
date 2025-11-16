import React from 'react';
import { Product, CartItem } from '../types';
import ProductCard from './ProductCard';
import Fuse from 'fuse.js';

interface ProductGridProps {
  productsWithMatches: { item: Product, matches?: readonly Fuse.FuseResultMatch[] }[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  onImageGenerated: (productId: number, imageUrl: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ productsWithMatches, cart, addToCart, updateQuantity, onImageGenerated }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {productsWithMatches.map(({ item, matches }) => {
        const cartItem = cart.find(cartItem => cartItem.id === item.id);
        return (
          <ProductCard 
            key={item.id}
            product={item}
            matches={matches}
            cartItem={cartItem}
            addToCart={addToCart}
            updateQuantity={updateQuantity}
            onImageGenerated={onImageGenerated}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;