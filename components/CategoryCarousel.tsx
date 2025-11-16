
import React from 'react';
import { CATEGORIES } from '../constants';

const CategoryCarousel: React.FC = () => {
  return (
    <div className="my-8">
      <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4">
        {CATEGORIES.map(category => (
          <div key={category.name} className="flex-shrink-0 w-24 sm:w-32 text-center">
            <a href="#" className="group">
              <img src={category.imageUrl} alt={category.name} className="w-full rounded-lg shadow-sm group-hover:shadow-md transition-shadow" />
              <p className="mt-2 text-sm font-semibold text-gray-700 group-hover:text-green-600">{category.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
