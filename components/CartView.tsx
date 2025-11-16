
import React from 'react';
import { CartItem } from '../types';

interface CartViewProps {
  cart: CartItem[];
  updateQuantity: (productId: number, newQuantity: number) => void;
  onContinueShopping: () => void;
}

const CartView: React.FC<CartViewProps> = ({ cart, updateQuantity, onContinueShopping }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">You can go to home page to view more products.</p>
        <button 
          onClick={onContinueShopping}
          className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
        >
          See products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="divide-y divide-gray-200">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-contain rounded-md mr-4" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.weight}</p>
                  <p className="font-bold">₹{item.price}</p>
                </div>
              </div>
              <div className="w-24 h-9 flex items-center justify-between border border-gray-300 text-gray-800 font-bold rounded-lg text-sm">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 rounded-l-lg hover:bg-gray-100">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 rounded-r-lg hover:bg-gray-100">+</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t">
          <h2 className="text-xl font-bold mb-4">Bill Details</h2>
          <div className="space-y-2 text-gray-600">
            <div className="flex justify-between">
              <p>Item Total</p>
              <p>₹{subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-bold text-gray-800 text-lg pt-2 border-t mt-2">
              <p>To Pay</p>
              <p>₹{total.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full bg-green-600 text-white font-bold py-4 rounded-lg text-lg hover:bg-green-700 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
