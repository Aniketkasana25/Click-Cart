import { Product } from './types';

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Mother Dairy Classic Curd', weight: '400 g', price: 34, imageUrl: 'https://m.media-amazon.com/images/I/51zOMI+b+QL._AC_UF1000,1000_QL80_.jpg', category: 'Dairy & Bread' },
  { id: 2, name: 'Harvest Gold White Bread', weight: '400 g', price: 30, imageUrl: 'https://harvestgold.in/image/product/small/2-White-Bread.png', category: 'Dairy & Bread' },
  { id: 3, name: 'Amul Masti Buttermilk', weight: '1 L', price: 55, category: 'Dairy & Bread' },
  { id: 4, name: 'Nestle Milkmaid', weight: '380 g', price: 139, imageUrl: 'https://www.jiomart.com/images/product/original/490000171/nestle-milkmaid-sweetened-condensed-milk-380-g-tin-product-images-o490000171-p490000171-0-202305261546.jpg', category: 'Dairy & Bread' },
  
  { id: 5, name: 'Onion', weight: '1 kg', price: 40, imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/10000148_30-fresho-onion.jpg', category: 'Fruits & Vegetables' },
  { id: 6, name: 'Tomato', weight: '1 kg', price: 35, category: 'Fruits & Vegetables' },
  { id: 7, name: 'Potato', weight: '1 kg', price: 30, imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/40048457_9-fresho-potato-new-crop.jpg', category: 'Fruits & Vegetables' },
  { id: 8, name: 'Banana', weight: '1 dozen', price: 60, imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/10000031_21-fresho-banana-robusta.jpg', category: 'Fruits & Vegetables' },

  { id: 9, name: 'Lays India\'s Magic Masala', weight: '50 g', price: 20, imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/294273_20-lays-potato-chips-indias-magic-masala.jpg', category: 'Snacks' },
  { id: 10, name: 'Bingo! Mad Angles Achaari Masti', weight: '66 g', price: 20, imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/40026362_12-bingo-mad-angles-achaari-masti.jpg', category: 'Snacks' },
  { id: 11, name: 'Parle-G Gold Biscuits', weight: '1 kg', price: 140, imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/40003061_7-parle-g-gold-biscuits.jpg', category: 'Snacks' },
  { id: 12, name: 'Cadbury Dairy Milk Chocolate Bar', weight: '50 g', price: 45, imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/40018519_15-cadbury-dairy-milk-chocolate-bar.jpg', category: 'Snacks' },

  { id: 13, name: 'Coca-Cola', weight: '750 ml', price: 40, imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/265895_12-coca-cola-soft-drink.jpg', category: 'Beverages' },
  { id: 14, name: 'Tropicana 100% Orange Juice', weight: '1 L', price: 135, imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/1204558_3-tropicana-100-juice-orange.jpg', category: 'Beverages' },
  { id: 15, name: 'Tata Tea Gold', weight: '500 g', price: 290, imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/40019245_1-tata-tea-gold-tea.jpg', category: 'Beverages' },
  { id: 16, name: 'Nescafe Classic Coffee', weight: '100 g', price: 320, imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/40005206_11-nescafe-classic-100-pure-instant-coffee.jpg', category: 'Beverages' },
];

export const CATEGORIES = [
    { name: 'Dairy & Bread', imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/10000031_21-fresho-banana-robusta.jpg' },
    { name: 'Fruits & Vegetables', imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/10000150_19-fresho-potato.jpg' },
    { name: 'Snacks', imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/294273_20-lays-potato-chips-indias-magic-masala.jpg' },
    { name: 'Beverages', imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/265895_12-coca-cola-soft-drink.jpg' },
    { name: 'Masala & Dry Fruits', imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/40026362_12-bingo-mad-angles-achaari-masti.jpg' },
    { name: 'Sweet Cravings', imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/40018519_15-cadbury-dairy-milk-chocolate-bar.jpg' },
    { name: 'Cleaning Essentials', imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/266949_7-harpic-disinfectant-toilet-cleaner-liquid-original.jpg' },
    { name: 'Home Needs', imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/10000424_12-colgate-strong-teeth-anticavity-toothpaste-with-amino-shakti.jpg' }
];