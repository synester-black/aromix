
import React from 'react';
import { MapPin } from 'lucide-react';

const locationCategories = [
  {
    icon: <MapPin className="h-6 w-6 text-white" />,
    title: "Fitness Centers & Gyms",
    description: "Perfect for post-workout freshening up",
    bgClass: "bg-perfume-purple"
  },
  {
    icon: <MapPin className="h-6 w-6 text-white" />,
    title: "Shopping Malls",
    description: "For shoppers spending hours browsing",
    bgClass: "bg-perfume-gradient"
  },
  {
    icon: <MapPin className="h-6 w-6 text-white" />,
    title: "Airports & Train Stations",
    description: "Refresh on your journey",
    bgClass: "bg-perfume-purple"
  },
  {
    icon: <MapPin className="h-6 w-6 text-white" />,
    title: "Entertainment Venues",
    description: "Feel your best during events",
    bgClass: "bg-perfume-gradient"
  },
  {
    icon: <MapPin className="h-6 w-6 text-white" />,
    title: "Supermarkets",
    description: "Quick refresh while shopping",
    bgClass: "bg-perfume-purple"
  }
];

const Locations = () => {
  return (
    <section id="locations" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-perfume-darkPurple">Strategic Locations</h2>
          <p className="text-gray-600">Find Perfume Puff machines in high-traffic areas where freshening up matters most.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationCategories.map((location, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden hover-scale">
              <div className={`${location.bgClass} p-4 flex items-center gap-3`}>
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  {location.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{location.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600">{location.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-perfume-lightPurple/30 rounded-xl text-center">
          <p className="text-lg text-perfume-darkPurple">
            Interested in hosting a Perfume Puff machine at your venue? 
            <span className="font-bold ml-1">Contact us today!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Locations;
