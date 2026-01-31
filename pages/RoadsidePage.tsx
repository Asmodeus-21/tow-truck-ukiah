
import React from 'react';
import { PHONE_HREF, PHONE_NUMBER, PhoneIcon } from '../constants';

const RoadsidePage: React.FC = () => {
  return (
    <>
      <div className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-white">24/7 Roadside Assistance</h1>
          <p className="mt-4 text-xl text-gray-300">Fast, friendly help for life's little roadside emergencies.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-blue">Get Back on the Road, Fast</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
              Not every problem requires a tow truck. For common issues that leave you stranded, our roadside assistance service is the quickest way to get moving again. Our service vehicles are equipped to handle a variety of problems on the spot.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue">Jumpstarts</h3>
                <p className="mt-2 text-gray-600">Dead battery? We'll get you started safely without any risk to your vehicle's electronics.</p>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue">Tire Changes</h3>
                <p className="mt-2 text-gray-600">We can quickly and safely swap your flat tire with your spare so you can get to a repair shop.</p>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue">Vehicle Lockouts</h3>
                <p className="mt-2 text-gray-600">Locked your keys in the car? Our technicians can get you back in without any damage to your door or lock.</p>
            </div>
             <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue">Fuel Delivery</h3>
                <p className="mt-2 text-gray-600">Ran out of gas? We'll deliver enough fuel to get you to the nearest gas station.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-brand-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-brand-blue">Roadside Trouble? One Call Solves It All.</h2>
            <p className="mt-4 text-lg text-gray-600">Our team is standing by 24/7 to provide the help you need.</p>
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

export default RoadsidePage;
