
import React from 'react';
import './Features.css';
import FeatureCard from './FeatureCard';


function Features() {
  const cards = [
    {
      icon: '/growth1.svg',
      title: 'Site Speed',
      description: "Incredibly fast storefronts. Don't take our word for it, start selling online and see it for yourself!"
    },
    {
      icon: '/growth1.svg',
      title: 'Multi-Warehouse',
      description: 'One store, multiple locations. Ship products from multiple warehouses across India.'
    },
    {
      icon: '/growth1.svg',
      title: 'Optimised Checkouts',
      description: 'Offer a seamless shopping experience optimised for checkouts and reduce abandonment rates.'
    },
    {
      icon: '/growth1.svg',
      title: 'Staff Accounts',
      description: 'Add employees, colleagues and teammates to help you grow your business efficiently.'
    },
    {
      icon: '/growth1.svg',
      title: 'Android App',
      description: "The world is mobile. It's time your store is too. Get more loyal customers with our Android app."
    },
    {
      icon: '/growth1.svg',
      title: 'Advanced Analytics',
      description: 'All the information about your sales, traffic, regions and products, just a click away.'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        {cards.map((card, index) => (
          <FeatureCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
