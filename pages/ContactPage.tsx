
import React from 'react';
import { ADDRESS, GOOGLE_MAPS_LINK, PHONE_HREF, PHONE_NUMBER, LocationIcon, PhoneIcon } from '../constants';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! For immediate assistance, please call us.");
    // Here you would typically handle form submission
  };

  return (
    <>
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-white">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-300">For immediate 24/7 service, please call us. For other inquiries, use the form below.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <PhoneIcon />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">24/7 Emergency Line</h3>
                  <a href={PHONE_HREF} className="text-brand-blue hover:text-brand-red text-2xl font-bold">{PHONE_NUMBER}</a>
                </div>
              </div>
              <div className="flex items-start">
                <LocationIcon />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Our Location</h3>
                  <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-blue">{ADDRESS}</a>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-lg shadow-xl overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.908076615797!2d-123.2096786846569!3d39.15017197953259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80814f0e5f5f5f5f%3A0x1c1e0a2b0c1e1c1e!2s110%20Observatory%20Ave%2C%20Ukiah%2C%20CA%2095482!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="1 Lane Towing Location"
              ></iframe>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Send a Message</h2>
            <p className="text-gray-600 mb-4">For non-emergency inquiries, quotes, or feedback, please use the form below. We'll get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input type="text" name="name" id="name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-blue focus:border-brand-blue border-gray-300 rounded-md" placeholder="Full Name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-blue focus:border-brand-blue border-gray-300 rounded-md" placeholder="Email Address" />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input type="text" name="phone" id="phone" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-blue focus:border-brand-blue border-gray-300 rounded-md" placeholder="Phone Number (Optional)" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={6} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-brand-blue focus:border-brand-blue border border-gray-300 rounded-md" placeholder="Your Message"></textarea>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="sms-consent"
                    name="sms-consent"
                    type="checkbox"
                    required
                    className="focus:ring-brand-blue h-4 w-4 text-brand-blue border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="sms-consent" className="font-medium text-gray-700">
                    I agree to receive SMS communications from 1 Lane Towing.
                  </label>
                  <p className="text-gray-500">
                    By checking this box, you agree to receive automated service updates and recovery status messages via SMS. Message and data rates may apply. Reply STOP to opt-out. See our <a href="/privacy-policy" className="text-brand-blue underline">Privacy Policy</a> and <a href="/terms-of-service" className="text-brand-blue underline">Terms of Service</a>.
                  </p>
                </div>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-red hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
