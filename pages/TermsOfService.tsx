
import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-extrabold text-brand-blue mb-8">Terms of Service</h1>
                <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-600">
                        By accessing or using the services provided by 1 Lane Towing, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

                <section className="mb-8 bg-brand-light p-6 rounded-lg border-l-4 border-brand-red">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">2. SMS & Mobile Communication</h2>
                    <p className="text-gray-600 mb-4">
                        By providing your phone number, you consent to receive SMS messages from 1 Lane Towing regarding your service requests, status updates, and dispatch notifications.
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                        <li><strong>Opt-Out:</strong> You can cancel the SMS service at any time. Just text "STOP" to the number we messaged you from. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us.</li>
                        <li><strong>Help:</strong> If you are experiencing issues with the messaging program you can reply with the keyword "HELP" for more assistance, or you can get help directly at 707-462-1239.</li>
                        <li><strong>Costs:</strong> As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">3. Description of Service</h2>
                    <p className="text-gray-600">
                        1 Lane Towing provides professional towing, roadside assistance, and off-road recovery services in Ukiah and surrounding Mendocino County areas. Service availability and response times may vary based on location, weather, and demand.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">4. Customer Responsibilities</h2>
                    <p className="text-gray-600">
                        Customers must provide accurate location information. You must have the authority to request towing or recovery for the vehicle in question. We are not responsible for delays caused by inaccurate information or inaccessible locations.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">5. Limitation of Liability</h2>
                    <p className="text-gray-600">
                        While we take every precaution to ensure damage-free towing and recovery, 1 Lane Towing is not liable for structural failures of the vehicle being recovered (e.g., rusted frames, pre-existing damage) or for incidents occurring beyond our direct control during the recovery process.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4">6. Contact Information</h2>
                    <p className="text-gray-600">
                        Questions about the Terms of Service should be sent to us at 707-462-1239.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
