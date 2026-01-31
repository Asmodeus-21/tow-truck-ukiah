
import React from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold text-brand-blue mb-2">{service.title}</h3>
      <p className="text-gray-600 flex-grow mb-4">{service.description}</p>
      <Link
        to={service.link}
        className="mt-auto bg-brand-blue text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;
