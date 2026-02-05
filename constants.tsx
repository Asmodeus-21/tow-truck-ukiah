
import React from 'react';
import type { Service, Review } from './types';

export const PHONE_NUMBER = "707-462-1239";
export const PHONE_HREF = "tel:7074621239";
export const ADDRESS = "110 Observatory Ave Ste A, Ukiah, CA 95482";
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=1+Lane+Towing+110+Observatory+Ave+Ste+A%2C+Ukiah%2C+CA+95482";

export const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

export const CarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7c0-1.1.9-2 2-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" />
  </svg>
);

export const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

export const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const SERVICES_DATA: Service[] = [
  {
    title: 'Light & Medium Duty Towing',
    description: 'Reliable towing for breakdowns, accidents, and vehicle transport. Our flatbed trucks ensure your car arrives safely.',
    icon: <CarIcon />,
    link: '/light-medium-towing',
  },
  {
    title: 'Off-Road Recovery',
    description: 'Stuck in mud, snow, or a ditch? We specialize in winch-outs and extractions from Northern California\'s toughest terrain.',
    icon: <WrenchIcon />,
    link: '/off-road-recovery',
  },
  {
    title: 'Roadside Assistance',
    description: 'Fast help for lockouts, jumpstarts, tire changes, and fuel delivery. We get you back on the road quickly, 24/7.',
    icon: <ShieldIcon />,
    link: '/roadside-assistance',
  },
];

export const REVIEWS_DATA: Review[] = [
  {
    author: 'John D.',
    text: '1 Lane Towing saved me when my truck slid into a ditch off a muddy road near Redwood Valley. They arrived quickly and had the equipment to pull me out without a scratch. Truly professional!',
    rating: 5,
  },
  {
    author: 'Sarah P.',
    text: 'My car broke down on the 101 late at night. The driver was calm, courteous, and made a stressful situation much easier. Highly recommend this family-owned business serving all of Mendocino and Lake counties.',
    rating: 5,
  },
  {
    author: 'Mike R.',
    text: 'Locked my keys in my car at the grocery store in Lakeport. They were there in 20 minutes and had it unlocked in seconds. Great, fast service!',
    rating: 5,
  },
];

export const SERVICE_AREAS: string[] = [
  'Ukiah',
  'Lakeport',
  'Redwood Valley',
  'Hopland',
  'Talmage',
  'Kelseyville',
  'Clearlake',
  'Calpella',
  'Potter Valley',
  'All of Mendocino County',
  'All of Lake County',
];
