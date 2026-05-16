import React from 'react';
import './ServiceCard.css';

interface Service Props {
  service: {
    id: number;
    title: string;
    description: string;
    price: number;
  };
}

function ServiceCard({ service }: ServiceProps) {
  return (
    <div className="card">
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <p>Price: ${service.price}</p>
      <button>Book Now</button>
    </div>
  );
}

export default ServiceCard;