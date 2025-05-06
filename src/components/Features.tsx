
import React from 'react';
import { Star, Settings, CreditCard, Phone, Bell, Search } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const featureItems = [
  {
    icon: <Star className="h-8 w-8 text-perfume-purple" />,
    title: "Premium Fragrances",
    description: "Access luxury perfumes from top brands in convenient, affordable single-use puffs."
  },
  {
    icon: <Settings className="h-8 w-8 text-perfume-purple" />,
    title: "Precise Dispensing",
    description: "Advanced technology ensures the perfect amount of fragrance for each use."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-perfume-purple" />,
    title: "Cashless Payment",
    description: "Quick and easy transactions with all major payment methods accepted."
  },
  {
    icon: <Phone className="h-8 w-8 text-perfume-purple" />,
    title: "Smart App Integration",
    description: "Control preferences, discover scents, and earn rewards with our mobile app."
  },
  {
    icon: <Bell className="h-8 w-8 text-perfume-purple" />,
    title: "Location Alerts",
    description: "Get notified when you're near a Perfume Puff machine at participating venues."
  },
  {
    icon: <Search className="h-8 w-8 text-perfume-purple" />,
    title: "Scent Discovery",
    description: "Explore new fragrances with our curated selection that changes seasonally."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-perfume-darkPurple">Revolutionary Features</h2>
          <p className="text-gray-600">Our smart dispensers combine cutting-edge technology with premium fragrances to deliver a unique experience.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureItems.map((item, index) => (
            <Card key={index} className="hover-scale glass-card">
              <CardContent className="p-6">
                <div className="h-14 w-14 bg-perfume-lightPurple rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-perfume-darkPurple">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
