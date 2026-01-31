
import React, { useState } from 'react';
import { PHONE_NUMBER } from '../constants';

const SendLocationButton: React.FC = () => {
  const [status, setStatus] = useState<string>('Share My Location');
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setStatus('Not Supported');
      return;
    }

    setStatus('Getting Location...');
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const message = `I'm stranded and need help. My location is: https://www.google.com/maps?q=${latitude},${longitude}`;
        const smsLink = `sms:${PHONE_NUMBER}?&body=${encodeURIComponent(message)}`;
        
        window.location.href = smsLink;
        setStatus('Location Sent!');
        setTimeout(() => setStatus('Share My Location'), 3000);
      },
      () => {
        setError('Unable to retrieve your location. Please ensure location services are enabled.');
        setStatus('Error');
        setTimeout(() => setStatus('Share My Location'), 5000);
      }
    );
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleClick}
        disabled={status !== 'Share My Location' && status !== 'Error' && status !== 'Not Supported'}
        className="inline-flex items-center justify-center bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {status}
      </button>
      {error && <p className="text-red-500 mt-2 text-sm text-center">{error}</p>}
    </div>
  );
};

export default SendLocationButton;
