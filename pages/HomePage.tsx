
import React from 'react';
import { Link } from 'react-router-dom';
import { PHONE_NUMBER, PHONE_HREF, GOOGLE_MAPS_LINK, SERVICES_DATA, REVIEWS_DATA, PhoneIcon } from '../constants';
import ServiceCard from '../components/ServiceCard';
import ReviewCard from '../components/ReviewCard';
import SendLocationButton from '../components/SendLocationButton';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(13, 36, 79, 0.8), rgba(13, 36, 79, 0.8)), url('https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?q=80&w=2000&auto=format&fit=crop')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wide">
            Stuck Off-Road or Broke Down?
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-red mt-2">We’ll Get You Out.</h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            Northern California’s trusted family-owned towing service. From highway breakdowns to complex off-road recovery, 1 Lane Towing serves all of Mendocino and Lake counties 24/7.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center w-full sm:w-auto bg-brand-red text-white text-xl font-bold py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              <PhoneIcon />
              <span className="ml-3">CALL {PHONE_NUMBER} NOW</span>
            </a>
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto bg-transparent border-2 border-white text-white font-semibold py-4 px-10 rounded-lg hover:bg-white hover:text-brand-dark transition duration-300"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-brand-blue sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">The right help, right when you need it.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-red font-bold">THE 1 LANE TOWING DIFFERENCE</span>
            <h2 className="text-3xl font-extrabold text-brand-blue sm:text-4xl mt-2">Family Owned, Built for Northern California Terrain</h2>
            <p className="mt-4 text-lg text-gray-600">
              When you call us, you're not talking to a distant call center. You're talking to a local, family-owned business that knows the roads, trails, and weather of Mendocino and Lake counties. We're your neighbors, and we're equipped to handle the tough recovery jobs that others turn down.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-green-500">✓</div>
                <p className="ml-3 text-gray-600"><span className="font-bold">Off-Road Specialists:</span> We have the 4x4 wreckers and winching gear for mud, snow, and steep grades.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-green-500">✓</div>
                <p className="ml-3 text-gray-600"><span className="font-bold">24/7 Emergency Service:</span> Stranded at 2 AM? We're on our way.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-green-500">✓</div>
                <p className="ml-3 text-gray-600"><span className="font-bold">Damage-Free Guarantee:</span> Your vehicle is treated with professional care during towing and recovery.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop" alt="1 Lane Towing truck" className="rounded-lg shadow-xl mx-auto" onError={(e) => { const target = e.target as HTMLImageElement; target.onerror = null; target.src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"; }} />
          </div>
        </div>
      </section>

      {/* Send Location Section */}
      <section className="bg-brand-blue text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Not Sure Where You Are?</h2>
          <p className="mt-4 text-lg text-gray-200">
            In a remote area with no clear address? Use our one-click tool to send your exact GPS coordinates directly to our dispatcher.
          </p>
          <div className="mt-8">
            <SendLocationButton />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-brand-blue sm:text-4xl">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-gray-600">Trusted by drivers across Mendocino and Lake counties.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS_DATA.map((review) => (
              <ReviewCard key={review.author} review={review} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
