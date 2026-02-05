
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PHONE_NUMBER, PHONE_HREF } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = "block py-2 px-3 text-white rounded hover:bg-brand-blue md:hover:bg-transparent md:border-0 md:hover:text-brand-red md:p-0";
  const activeLinkClasses = "text-brand-red";

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = (
    <>
      <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={handleLinkClick} end>Home</NavLink>
      <NavLink to="/off-road-recovery" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={handleLinkClick}>Off-Road Recovery</NavLink>
      <NavLink to="/light-medium-towing" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={handleLinkClick}>Towing</NavLink>
      <NavLink to="/roadside-assistance" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={handleLinkClick}>Roadside</NavLink>
      <NavLink to="/service-area" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={handleLinkClick}>Service Area</NavLink>
      <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={handleLinkClick}>About Us</NavLink>
      <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={handleLinkClick}>Contact</NavLink>
    </>
  );

  return (
    <header className="bg-brand-dark sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-white flex-shrink-0">
              <span className="font-black text-xl tracking-tight text-brand-red">1 LANE</span>
              <span className="font-semibold text-xl tracking-tight"> TOWING</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks}
            </div>
          </div>
          <div className="hidden md:block">
            <a href={PHONE_HREF} className="bg-brand-red text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition duration-300">
              CALL NOW
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
