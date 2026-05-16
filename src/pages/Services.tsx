import React from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const services = [
  { id: 1, title: 'Economy', description: 'Economy car rental options', price: 40 },
  { id: 2, title: 'Premium', description: 'Premium car rental options', price: 60 },
  { id: 3, title: 'Luxury', description: 'Luxury car rental options', price: 80 }
];

function Services() {
  return (
    <div className="services">
      <h1>Car Rental Services</h1>
      <div className="cards">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;