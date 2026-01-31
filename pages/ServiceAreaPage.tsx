
import React from 'react';
import { SERVICE_AREAS, GOOGLE_MAPS_LINK } from '../constants';

const ServiceAreaPage: React.FC = () => {
  return (
    <>
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-white">Our Service Area</h1>
          <p className="mt-4 text-xl text-gray-300">Serving Ukiah and Surrounding Northern California Communities</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue">Covering Mendocino County</h2>
            <p className="mt-4 text-lg text-gray-600">
              1 Lane Towing is proud to be a local business serving our neighbors. We provide prompt and reliable towing, recovery, and roadside assistance to a wide area around Ukiah. If you're stranded in the region, we can get to you.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {SERVICE_AREAS.map((area, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-500 italic">
              If you're unsure if you're in our service area, give us a call! We'll do our best to help or recommend someone who can.
            </p>
          </div>
          <div>
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="block rounded-lg shadow-xl overflow-hidden relative">
                <img 
                    src={`https://maps.googleapis.com/maps/api/staticmap?center=Ukiah,CA&zoom=9&size=600x450&maptype=roadmap&markers=color:red%7Clabel:A%7C39.1502,-123.2078&key=YOUR_API_KEY_PLACEHOLDER`} 
                    alt="Map of 1 Lane Towing service area" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // prevent infinite loop
                        target.src='https://picsum.photos/600/450?random=8';
                        target.alt = 'Placeholder map of Ukiah area';
                    }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <p className="text-white text-lg font-bold bg-black bg-opacity-50 p-2 rounded">Click to see on Google Maps</p>
                </div>
            </a>
            <p className="text-center mt-2 text-sm text-gray-500">
                Our base is at 110 Observatory Ave Ste A, Ukiah, CA 95482.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaPage;
