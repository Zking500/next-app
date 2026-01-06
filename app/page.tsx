
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white text-center p-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to Call-Interactive</h1>
        <p className="text-xl mb-8">A Discord bot for dynamic calls with OBS integration and interactive overlays.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
          Get Started
        </button>
      </section>

      <section id="features" className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Dynamic Calls</h3>
            <p>Engage your audience with interactive call features.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">OBS Integration</h3>
            <p>Seamlessly connect with OBS for professional streams.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Interactive Overlays</h3>
            <p>Display emotes and interactions on-screen.</p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-900 p-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Call-Interactive</h2>
          <p className="text-lg">
            Call-Interactive is designed to bring your Discord calls to life. 
            By integrating with OBS, you can create a more engaging and interactive 
            experience for your audience.
          </p>
        </div>
      </section>

      <section id="contact" className="container mx-auto p-16">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 rounded bg-gray-800 border border-gray-700" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 rounded bg-gray-800 border border-gray-700" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 rounded bg-gray-800 border border-gray-700" id="message" rows="4"></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;