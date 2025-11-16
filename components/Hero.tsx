import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full my-6">
      <div className="bg-gray-200 rounded-2xl overflow-hidden">
        <img 
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" 
          alt="Promotional Banner" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;