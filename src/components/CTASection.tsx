
import React from 'react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="section-padding bg-perfume-lightPurple">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-perfume-darkPurple">Ready to Transform the Fragrance Experience?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            Join us in revolutionizing how people access premium fragrances. Whether you're a venue owner or a brand partner, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-perfume-gradient hover:opacity-90 transition-opacity text-base py-6 px-8">
              Become a Partner
            </Button>
            <Button variant="outline" className="border-perfume-purple text-perfume-purple hover:bg-perfume-purple/5 py-6 px-8">
              Business Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
