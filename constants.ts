import { Product } from './types';

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Mother Dairy Classic Curd', weight: '400 g', price: 34, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/332_13.jpg', category: 'Dairy & Bread' },
  { id: 2, name: 'Harvest Gold White Bread', weight: '400 g', price: 30, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/10522_12.jpg', category: 'Dairy & Bread' },
  { id: 3, name: 'Amul Masti Buttermilk', weight: '1 L', price: 55, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/169_9.jpg', category: 'Dairy & Bread' },
  { id: 4, name: 'Nestle Milkmaid', weight: '380 g', price: 139, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/192_6.jpg', category: 'Dairy & Bread' },
  
  { id: 5, name: 'Onion', weight: '1 kg', price: 40, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/448_13.jpg', category: 'Fruits & Vegetables' },
  { id: 6, name: 'Tomato', weight: '1 kg', price: 35, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/231_14.jpg', category: 'Fruits & Vegetables' },
  { id: 7, name: 'Potato', weight: '1 kg', price: 30, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/451_14.jpg', category: 'Fruits & Vegetables' },
  { id: 8, name: 'Banana', weight: '1 dozen', price: 60, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480_12.jpg', category: 'Fruits & Vegetables' },

  { id: 9, name: 'Lays India\'s Magic Masala', weight: '50 g', price: 20, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/1924_15.jpg', category: 'Snacks' },
  { id: 10, name: 'Bingo! Mad Angles Achaari Masti', weight: '66 g', price: 20, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/11833_10.jpg', category: 'Snacks' },
  { id: 11, name: 'Parle-G Gold Biscuits', weight: '1 kg', price: 140, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/403_8.jpg', category: 'Snacks' },
  { id: 12, name: 'Cadbury Dairy Milk Chocolate Bar', weight: '50 g', price: 45, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/17_26.jpg', category: 'Snacks' },

  { id: 13, name: 'Coca-Cola', weight: '750 ml', price: 40, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/74_13.jpg', category: 'Beverages' },
  { id: 14, name: 'Tropicana 100% Orange Juice', weight: '1 L', price: 135, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/206_12.jpg', category: 'Beverages' },
  { id: 15, name: 'Tata Tea Gold', weight: '500 g', price: 290, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/224_10.jpg', category: 'Beverages' },
  { id: 16, name: 'Nescafe Classic Coffee', weight: '100 g', price: 320, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/190_16.jpg', category: 'Beverages' },
];

export const CATEGORIES = [
    { name: 'Dairy & Bread', imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/category/cms_images/icon/14_v2.png' },
    { name: 'Fruits & Vegetables', imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/category/cms_images/icon/16_v2.png' },
    { name: 'Snacks', imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/category/cms_images/icon/13_v2.png' },
    { name: 'Beverages', imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/category/cms_images/icon/12_v2.png' },
    { name: 'Masala & Dry Fruits', imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/category/cms_images/icon/270_v2.png' },
    { name: 'Sweet Cravings', imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/category/cms_images/icon/93_v2.png' },
    { name: 'Cleaning Essentials', imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/category/cms_images/icon/23_v2.png' },
    { name: 'Home Needs', imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/category/cms_images/icon/269_v2.png' }
];