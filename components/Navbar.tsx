
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Call-Interactive
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#features" className="text-gray-300 hover:text-white">Features</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;