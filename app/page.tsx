
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center p-16 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Call-Interactive</h1>
        <p className="text-xl mb-8">
          A Discord bot for dynamic calls with OBS integration and interactive overlays.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto p-16">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg text-center shadow-md">
            <h3 className="text-2xl font-bold mb-4">Dynamic Calls</h3>
            <p>Engage your audience with interactive call features that bring your conversations to life.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center shadow-md">
            <h3 className="text-2xl font-bold mb-4">OBS Integration</h3>
            <p>Seamlessly connect with OBS for professional, high-quality streams and recordings.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center shadow-md">
            <h3 className="text-2xl font-bold mb-4">Interactive Overlays</h3>
            <p>Display real-time emotes and interactions on-screen to keep your audience engaged.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-800 p-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Call-Interactive</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Call-Interactive is designed to bring your Discord calls to life. By integrating with OBS, 
            you can create a more engaging and interactive experience for your audience, with features 
            that make your streams stand out.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto p-16">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="name">Name</label>
            <input className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" type="text" id="name" />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" type="email" id="email" />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" id="message" rows={5}></textarea>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full transition duration-300">
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;