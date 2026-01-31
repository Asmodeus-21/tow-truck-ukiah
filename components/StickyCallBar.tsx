
import React from 'react';
import { PHONE_NUMBER, PHONE_HREF, PhoneIcon } from '../constants';

const StickyCallBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-dark p-2 z-50 border-t-4 border-brand-red">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center w-full bg-brand-red text-white text-lg font-bold py-3 px-4 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-200"
      >
        <PhoneIcon />
        <span className="ml-3">CALL {PHONE_NUMBER} NOW</span>
      </a>
    </div>
  );
};

export default StickyCallBar;
