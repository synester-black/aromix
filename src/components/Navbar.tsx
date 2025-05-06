
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-perfume-gradient flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h1 className="text-xl font-display font-bold text-perfume-darkPurple">Aromix</h1>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-perfume-darkPurple hover:text-perfume-purple transition-colors">Features</a>
          <a href="#how-it-works" className="text-perfume-darkPurple hover:text-perfume-purple transition-colors">How It Works</a>
          <a href="#locations" className="text-perfume-darkPurple hover:text-perfume-purple transition-colors">Locations</a>
          <Button className="bg-perfume-gradient hover:opacity-90 transition-opacity">
            Contact Us
          </Button>
        </nav>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="py-2 text-perfume-darkPurple hover:text-perfume-purple transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="py-2 text-perfume-darkPurple hover:text-perfume-purple transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#locations" className="py-2 text-perfume-darkPurple hover:text-perfume-purple transition-colors" onClick={() => setIsMenuOpen(false)}>Locations</a>
            <Button className="bg-perfume-gradient hover:opacity-90 transition-opacity w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
