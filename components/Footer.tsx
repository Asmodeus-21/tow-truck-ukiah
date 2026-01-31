
import React from 'react';
import { Link } from 'react-router-dom';
import { ADDRESS, PHONE_NUMBER, PHONE_HREF, GOOGLE_MAPS_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold tracking-wider uppercase">
              <span className="text-brand-red font-black">1 LANE</span> TOWING
            </h3>
            <p className="mt-4 text-gray-400">
              Family owned and operated in Ukiah, CA. We go where others won't.
            </p>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg text-center">
              <p className="font-bold text-brand-red">Locally Owned,</p>
              <p className="text-sm text-gray-300">Not a Call Center.</p>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/off-road-recovery" className="text-base text-gray-300 hover:text-brand-red">Off-Road Recovery</Link></li>
              <li><Link to="/light-medium-towing" className="text-base text-gray-300 hover:text-brand-red">Towing</Link></li>
              <li><Link to="/roadside-assistance" className="text-base text-gray-300 hover:text-brand-red">Roadside Assistance</Link></li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li><a href={PHONE_HREF} className="text-base text-gray-300 hover:text-brand-red">{PHONE_NUMBER}</a></li>
              <li><a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-base text-gray-300 hover:text-brand-red">{ADDRESS}</a></li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Service Area</h3>
            <ul className="mt-4 space-y-2 text-base text-gray-300">
              <li>Ukiah</li>
              <li>Redwood Valley</li>
              <li>Hopland</li>
              <li>Talmage</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col items-center">
          <p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} 1 Lane Towing. All rights reserved.</p>
          <div className="mt-2 flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-brand-red">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-gray-500 hover:text-brand-red">Terms of Service</Link>
          </div>
          <p className="text-sm text-gray-500 text-center mt-2">CA Towing License: [Your License Number Here]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
