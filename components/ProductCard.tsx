
import React from 'react';
import { Product, CartItem } from '../types';

interface ProductCardProps {
  product: Product;
  cartItem: CartItem | undefined;
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

const AddButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-full sm:w-20 h-9 border border-green-600 text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors text-sm"
    >
        ADD
    </button>
);

const QuantityControl: React.FC<{ quantity: number; onUpdate: (newQuantity: number) => void }> = ({ quantity, onUpdate }) => (
    <div className="w-full sm:w-20 h-9 flex items-center justify-between bg-green-600 text-white font-bold rounded-lg text-sm">
        <button onClick={() => onUpdate(quantity - 1)} className="px-2 py-1 rounded-l-lg hover:bg-green-700">-</button>
        <span>{quantity}</span>
        <button onClick={() => onUpdate(quantity + 1)} className="px-2 py-1 rounded-r-lg hover:bg-green-700">+</button>
    </div>
);

const ProductCard: React.FC<ProductCardProps> = ({ product, cartItem, addToCart, updateQuantity }) => {
  return (
    <div className="bg-white border rounded-lg p-4 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div>
        <div className="bg-gray-100 rounded-lg mb-4 flex items-center justify-center h-32 sm:h-40">
            <img src={product.imageUrl} alt={product.name} className="max-h-full max-w-full object-contain p-2" />
        </div>
        <p className="text-xs text-gray-500">{product.weight}</p>
        <h3 className="font-semibold text-gray-800 mt-1 h-10">{product.name}</h3>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold">₹{product.price}</p>
        <div className="relative">
          {cartItem && cartItem.quantity > 0 ? (
            <QuantityControl 
              quantity={cartItem.quantity}
              onUpdate={(newQuantity) => updateQuantity(product.id, newQuantity)}
            />
          ) : (
            <AddButton onClick={() => addToCart(product)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
