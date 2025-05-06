
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Select Your Fragrance",
    description: "Choose from our curated selection of premium perfumes via our touchscreen interface."
  },
  {
    number: "02",
    title: "Make Payment",
    description: "Use contactless payment methods including credit card, Apple Pay, Google Pay, or our app."
  },
  {
    number: "03",
    title: "Position & Dispense",
    description: "Follow the on-screen guidance for optimal positioning, then enjoy your perfect perfume puff."
  },
  {
    number: "04",
    title: "Rate Your Experience",
    description: "Provide feedback and earn loyalty points for future discounts and special offers."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-perfume-lightPurple/30">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-perfume-darkPurple">How It Works</h2>
          <p className="text-gray-600">Simple, quick, and intuitive - experience premium fragrances in just a few steps.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="glass-card rounded-xl p-6 relative overflow-hidden group hover-scale">
              <div className="absolute -right-4 -top-4 h-24 w-24 bg-perfume-peach/20 rounded-full"></div>
              <span className="text-5xl font-bold text-perfume-purple/20 group-hover:text-perfume-purple/30 transition-colors">
                {step.number}
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2 text-perfume-darkPurple">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-perfume-purple font-medium">Ready in less than 30 seconds!</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
