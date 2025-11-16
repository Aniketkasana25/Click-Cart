
import React from 'react';

const Footer: React.FC = () => {
  const footerSections = {
    'Useful Links': ['About', 'Careers', 'Blog', 'Press', 'Lead', 'Values'],
    'Categories': ['Vegetables & Fruits', 'Dairy & Breakfast', 'Snacks', 'Electronics', 'Cold Drinks & Juices', 'Tea, Coffee & Health Drinks'],
    'Help': ['FAQs', 'Contact Us', 'Terms & Conditions', 'Privacy Policy', 'Caution Notice'],
  };

  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {footerSections['Categories'].map(link => (
                <a key={link} href="#" className="text-gray-600 hover:text-green-600">{link}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              {footerSections['Useful Links'].map(link => (
                <li key={link}><a href="#" className="text-gray-600 hover:text-green-600">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              {footerSections['Help'].map(link => (
                <li key={link}><a href="#" className="text-gray-600 hover:text-green-600">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-center text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Click & Cart Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-green-600">Facebook</a>
            <a href="#" className="hover:text-green-600">Twitter</a>
            <a href="#" className="hover:text-green-600">Instagram</a>
            <a href="#" className="hover:text-green-600">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;