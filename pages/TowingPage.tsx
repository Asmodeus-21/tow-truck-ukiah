
import React from 'react';
import { Link } from 'react-router-dom';
import { PHONE_HREF, PHONE_NUMBER, PhoneIcon } from '../constants';

const TowingPage: React.FC = () => {
  return (
    <>
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-white">Light & Medium Duty Towing</h1>
          <p className="mt-4 text-xl text-gray-300">Safe, reliable, and professional towing for cars, trucks, and motorcycles.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue">Your Vehicle is in Safe Hands</h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether you've been in an accident, had a breakdown, or need to transport a vehicle, 1 Lane Towing has the right equipment for the job. Our fleet of modern flatbed and wheel-lift tow trucks is operated by trained professionals who prioritize the safety of your vehicle above all else.
            </p>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span><span><strong>Accident Towing:</strong> 24/7 response to collision scenes, working with law enforcement.</span></li>
              <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span><span><strong>Breakdown Towing:</strong> Fast assistance for mechanical failures on the highway or in town.</span></li>
              <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span><span><strong>Flatbed Service:</strong> The safest way to transport all-wheel-drive, classic, or specialty vehicles.</span></li>
              <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span><span><strong>Motorcycle Towing:</strong> Specialized equipment to secure and transport your bike without damage.</span></li>
              <li className="flex items-start"><span className="text-green-500 font-bold mr-2">✓</span><span><strong>Local & Long-Distance:</strong> We can tow you to a local mechanic or across the county.</span></li>
            </ul>
          </div>
          <div>
            <img src="https://picsum.photos/600/450?random=3" alt="Flatbed tow truck" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
      
      <div className="bg-brand-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-brand-blue">Need a Tow Now?</h2>
            <p className="mt-4 text-lg text-gray-600">Don't wait. Our dispatch is ready to send a truck to your location immediately.</p>
            <div className="mt-8">
                 <a href={PHONE_HREF} className="inline-flex items-center justify-center bg-brand-red text-white text-xl font-bold py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
                    <PhoneIcon />
                    <span className="ml-3">CALL {PHONE_NUMBER}</span>
                </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default TowingPage;
