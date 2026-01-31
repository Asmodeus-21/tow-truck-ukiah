
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-white">About 1 Lane Towing</h1>
          <p className="mt-4 text-xl text-gray-300">Your Local, Family-Owned Towing & Recovery Experts</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue">Meet the Family</h2>
            <p className="mt-4 text-lg text-gray-600">
              1 Lane Towing isn't a franchise or a faceless corporation. We're a family, born and raised right here in Mendocino County. We started this business because we saw a need for a towing company that treats its customers like neighbors, not numbers. When you call us, you're getting a team that's deeply invested in our community and dedicated to providing honest, reliable service.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our roots in this area mean we understand the local roads, the challenging terrain, and the importance of a friendly face in a stressful situation. We're proud to be the team people trust when they're in a tough spot.
            </p>
             <div className="mt-8">
                 <Link to="/contact" className="inline-block bg-brand-red text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
                    Contact Us
                </Link>
            </div>
          </div>
          <div className="text-center">
            <img src="https://picsum.photos/600/700?random=9" alt="The 1 Lane Towing family and team" className="rounded-lg shadow-xl mx-auto" />
            <p className="mt-2 text-sm text-gray-500 italic">The 1 Lane Towing Team</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
