import React, { useState } from 'react';
import { Product, CartItem } from '../types';
import { GoogleGenAI, Modality } from "@google/genai";
import Spinner from './Spinner';
import Fuse from 'fuse.js';

interface ProductCardProps {
  product: Product;
  cartItem: CartItem | undefined;
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  onImageGenerated: (productId: number, imageUrl: string) => void;
  matches?: readonly Fuse.FuseResultMatch[];
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

const HighlightedName: React.FC<{ text: string; matches?: readonly Fuse.FuseResultMatch[] }> = ({ text, matches }) => {
  if (!matches || matches.length === 0) {
    return <>{text}</>;
  }

  const nameMatch = matches.find(m => m.key === 'name');
  if (!nameMatch || !nameMatch.indices || nameMatch.indices.length === 0) {
    return <>{text}</>;
  }
  
  const parts: (string | React.ReactNode)[] = [];
  let lastIndex = 0;

  nameMatch.indices.forEach(([start, end]) => {
    if (start > lastIndex) {
      parts.push(text.substring(lastIndex, start));
    }
    parts.push(
      <mark key={start} className="bg-green-200 rounded-sm px-0.5 font-bold text-gray-800">
        {text.substring(start, end + 1)}
      </mark>
    );
    lastIndex = end + 1;
  });

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <>{parts}</>;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, cartItem, addToCart, updateQuantity, onImageGenerated, matches }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    setIsGenerating(true);
    setError(null);

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      setError("API Key not found. Cannot generate image.");
      setIsGenerating(false);
      return;
    }
    
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { text: `A professional, high-quality product photo of ${product.name} on a clean white background.` },
          ],
        },
        config: {
          responseModalities: [Modality.IMAGE],
        },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64ImageBytes: string = part.inlineData.data;
          const imageUrl = `data:image/png;base64,${base64ImageBytes}`;
          onImageGenerated(product.id, imageUrl);
          break; // Exit after finding the first image
        }
      }
    } catch (e) {
      console.error('Image generation failed:', e);
      setError('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:border-green-300">
      <div>
        <div className="bg-gray-100 rounded-lg mb-2 flex items-center justify-center h-32 sm:h-40">
          {isGenerating ? (
            <Spinner />
          ) : product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} className="max-h-full max-w-full object-contain p-2" />
          ) : (
            <button
              onClick={handleGenerateImage}
              disabled={isGenerating}
              className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm disabled:bg-gray-400"
            >
              Generate Image
            </button>
          )}
        </div>
        {error && <p className="text-red-500 text-xs text-center mb-2">{error}</p>}
        <p className="text-xs text-gray-500 mb-1">{product.weight}</p>
        <h3 className="font-semibold text-gray-800 h-10">
          <HighlightedName text={product.name} matches={matches} />
        </h3>
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