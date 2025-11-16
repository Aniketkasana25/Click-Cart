import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="mb-6">
        <div className="flex overflow-x-auto space-x-2 pb-2 -mx-4 px-4">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-200 ease-in-out ${
                        selectedCategory === category
                            ? 'bg-green-600 text-white shadow'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    </div>
  );
};

export default CategoryFilter;
