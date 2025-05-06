
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-perfume-darkPurple text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-perfume-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <h2 className="text-xl font-display font-bold">Aromix</h2>
            </div>
            <p className="text-white/70 max-w-xs">
              Smart automated perfume dispensing machines for public spaces. Experience luxury fragrances anywhere, anytime.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#locations" className="text-white/70 hover:text-white transition-colors">Locations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-white/70">info@aromix.com</li>
              <li className="text-white/70">+1 (555) 123-4567</li>
              <li className="text-white/70">123 Innovation Drive, Tech City, CA 94107</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Aromix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
