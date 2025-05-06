
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 bg-gradient-to-b from-perfume-lightPurple/30 to-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-perfume-darkPurple leading-tight">
            Premium Fragrance <br />
            <span className="text-transparent bg-clip-text bg-perfume-gradient">On The Go</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-md">
            Introducing Perfume Puff: Smart automated perfume dispensing machines for public spaces. Experience luxury fragrances anywhere, anytime, at an affordable price.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-perfume-gradient hover:opacity-90 transition-opacity text-base py-6 px-8">
              Learn More
            </Button>
            <Button variant="outline" className="border-perfume-purple text-perfume-purple hover:bg-perfume-purple/5 py-6 px-8">
              Business Inquiry
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative h-[400px] md:h-[500px] w-full bg-[url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1200&auto=format')] bg-cover bg-center rounded-xl shadow-2xl animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-perfume-purple/30 to-transparent rounded-xl"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 rounded-b-xl">
              <p className="text-center text-perfume-darkPurple font-medium">Next-gen perfume dispensing technology</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 h-28 w-28 md:h-36 md:w-36 bg-perfume-peach rounded-full flex items-center justify-center shadow-lg animate-pulse-gentle">
            <div className="text-center">
              <p className="font-bold text-xl md:text-2xl text-perfume-darkPurple">$1.99</p>
              <p className="text-sm md:text-base text-perfume-purple">per puff</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
