
import React from 'react';

const LocationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SearchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick, onLogoClick }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 border-b">
          <div className="flex items-center">
            <button onClick={onLogoClick} className="cursor-pointer">
              <h1 className="text-2xl font-bold text-green-600">
                Click & Cart
              </h1>
            </button>
            <div className="hidden md:flex items-center ml-8">
              <LocationIcon />
              <div>
                <p className="font-bold text-sm">Delivery in 10 minutes</p>
                <p className="text-xs text-gray-500">Gurugram, Haryana, India</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block flex-grow max-w-xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input 
                type="text" 
                placeholder='Search "milk"'
                className="w-full bg-gray-100 rounded-lg py-3 pl-10 pr-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <button className="hidden md:block text-gray-700 hover:text-green-600">Login</button>
            <button 
              onClick={onCartClick}
              className="relative flex items-center justify-center bg-green-600 text-white rounded-lg px-4 py-3 font-semibold hover:bg-green-700 transition-colors"
            >
              <CartIcon />
              <span className="ml-2 hidden sm:inline">My Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;