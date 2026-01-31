
import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-extrabold text-brand-blue mb-8">Privacy Policy</h1>
                <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">Introduction</h2>
                    <p className="text-gray-600">
                        1 Lane Towing ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">Information We Collect</h2>
                    <p className="text-gray-600 mb-4">
                        We collect information that you provide directly to us, such as when you request a tow, fill out a contact form, or communicate with us. This may include:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>Name</li>
                        <li>Phone number</li>
                        <li>Email address</li>
                        <li>Location/GPS coordinates (when shared for recovery)</li>
                        <li>Vehicle information</li>
                    </ul>
                </section>

                <section className="mb-8 bg-brand-light p-6 rounded-lg border-l-4 border-brand-red">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">Mobile Information & SMS Privacy</h2>
                    <p className="text-gray-700 font-semibold mb-4">
                        No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
                    </p>
                    <p className="text-gray-600">
                        All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. 1 Lane Towing does not sell or rent your phone number or SMS consent to any third party.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">How We Use Your Information</h2>
                    <p className="text-gray-600">
                        We use the information we collect to provide and improve our services, including:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                        <li>Dispatching towing and recovery vehicles to your location.</li>
                        <li>Communicating with you about your service request via call or SMS.</li>
                        <li>Processing payments and sending receipts.</li>
                        <li>Responding to your inquiries and support requests.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">Data Security</h2>
                    <p className="text-gray-600">
                        We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">Contact Us</h2>
                    <p className="text-gray-600">
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p className="mt-4 text-gray-700">
                        <strong>1 Lane Towing</strong><br />
                        110 Observatory Ave Ste A<br />
                        Ukiah, CA 95482<br />
                        Phone: 707-462-1239
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
