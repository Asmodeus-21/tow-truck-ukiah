
import React from 'react';
import { PHONE_HREF, PHONE_NUMBER, PhoneIcon } from '../constants';

const RecoveryPage: React.FC = () => {
  return (
    <>
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://picsum.photos/1920/1080?random=4')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-brand-red">Off-Road & Winch-Out Recovery</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">We Go Where Others Won't. Built for Northern California's Rugged Terrain.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-blue">When the Pavement Ends, Our Service Begins</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
              Standard tow trucks aren't equipped for the challenges of Northern California's backroads. 1 Lane Towing specializes in complex recovery situations. Our 4x4 wreckers, powerful winches, and experienced operators are ready to safely extract your vehicle from mud, snow, ditches, steep inclines, forest trails, and riverbanks.
            </p>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-blue">Winch-Outs & Ditch Pulls</h3>
                <p className="mt-2 text-gray-600">Slid off the road? Our winching services can pull your vehicle back to solid ground quickly and safely, from any angle.</p>
            </div>
            <div className="bg-brand-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-blue">Mud & Snow Recovery</h3>
                <p className="mt-2 text-gray-600">Don't spin your wheels. We have the traction and power to get you unstuck from the slickest situations without causing further issues.</p>
            </div>
             <div className="bg-brand-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-blue">Rollover & Accident Scenes</h3>
                <p className="mt-2 text-gray-600">Complex accident recovery requires expertise. We handle rollovers and off-road incidents with precision and care.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-blue text-center mb-12">See Our Capability in Action</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="font-bold text-xl text-red-600 mb-2">BEFORE: Stuck in a Ditch</h3>
                    <img src="https://picsum.photos/600/400?random=5" alt="Car stuck in a muddy ditch" className="rounded-lg shadow-xl" />
                </div>
                 <div>
                    <h3 className="font-bold text-xl text-green-600 mb-2">AFTER: Safely Recovered</h3>
                    <img src="https://picsum.photos/600/400?random=6" alt="Car safely back on the road" className="rounded-lg shadow-xl" />
                </div>
            </div>
        </div>
      </div>

       <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue">Damage-Free Extraction: Our Promise</h2>
            <p className="mt-4 text-lg text-gray-600">
              We know you're worried about your vehicle. Pulling a car from a tough spot incorrectly can cause serious damage to the frame, suspension, or bumpers. Our operators are trained in advanced recovery techniques. We assess the situation, establish secure anchor points, and use a combination of skill and equipment to ensure a smooth, damage-free extraction every time.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/600/450?random=7" alt="Close up of a winch" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>

      <div className="bg-brand-blue py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">Stuck in a Tough Spot?</h2>
            <p className="mt-4 text-lg text-gray-200">Call the off-road recovery specialists. We're ready to help 24/7.</p>
            <div className="mt-8">
                 <a href={PHONE_HREF} className="inline-flex items-center justify-center bg-brand-red text-white text-xl font-bold py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
                    <PhoneIcon />
                    <span className="ml-3">CALL {PHONE_NUMBER} FOR HELP</span>
                </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default RecoveryPage;
