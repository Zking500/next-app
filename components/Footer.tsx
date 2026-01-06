
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2024 Call-Interactive. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-300 hover:text-white">Discord</a>
          <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;