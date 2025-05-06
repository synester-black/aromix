
import React from 'react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    quote: "Perfume Puff saved me at the airport before an important business meeting. Quick, affordable luxury!",
    name: "Sarah Johnson",
    title: "Marketing Executive"
  },
  {
    quote: "As a gym owner, our Perfume Puff machine has been incredibly popular with members. Great added value!",
    name: "Michael Chen",
    title: "Fitness Center Owner"
  },
  {
    quote: "I love being able to try high-end fragrances without committing to a full bottle. So convenient!",
    name: "Alicia Rodriguez",
    title: "Regular User"
  }
];

const Testimonial = () => {
  return (
    <section className="section-padding bg-perfume-gradient">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What People Say</h2>
          <p className="text-white/80">Join thousands of satisfied users experiencing luxury on the go.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover-scale">
              <CardContent className="p-6">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-white mb-6">{item.quote}</p>
                <div>
                  <p className="font-bold text-white">{item.name}</p>
                  <p className="text-white/70 text-sm">{item.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
