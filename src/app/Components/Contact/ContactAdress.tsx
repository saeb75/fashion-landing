import React from "react";

function ContactAdress() {
  return (
    <div className="w-full p-4 md:p-8 bg-white rounded-2xl shadow-2xl">
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Visit Us
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Come see us at our location or get in touch
        </p>
      </div>

      {/* Map Section */}
      <div className="mb-6 md:mb-8">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9160522063125!2d-0.1235699!3d51.5147561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876058c7c9527fb%3A0x79bc7464573598c1!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2str!4v1754900536520!5m2!1sen!2str"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4 md:space-y-6">
        {/* Address */}
        <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <div className="flex-shrink-0 w-8 md:w-10 h-8 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              className="w-4 md:w-5 h-4 md:h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
              Our Address
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              71-75 Shelton Street, Covent Garden, London
            </p>
            <a
              href="https://www.google.com/maps/place/71-75+Shelton+St,+London+WC2H+9JQ,+UK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-xs md:text-sm font-medium inline-flex items-center mt-2 transition-colors duration-200"
            >
              View on Google Maps
              <svg
                className="w-3 md:w-4 h-3 md:h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <div className="flex-shrink-0 w-8 md:w-10 h-8 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-4 md:w-5 h-4 md:h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
              Business Hours
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              Closed on weekends and public holidays
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <div className="flex-shrink-0 w-8 md:w-10 h-8 md:h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <svg
              className="w-4 md:w-5 h-4 md:h-5 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
              Get in Touch
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Prefer to email? We&apos;re here to help
            </p>
            <a
              href="mailto:fashionai@gmail.com"
              className="text-purple-600 hover:text-purple-800 text-xs md:text-sm font-medium inline-flex items-center mt-2 transition-colors duration-200"
            >
              fashionai@gamil.com
            </a>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 md:mt-8 p-3 md:p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <div className="flex items-start space-x-2 md:space-x-3">
          <svg
            className="w-4 md:w-5 h-4 md:h-5 text-blue-600 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h4 className="font-medium text-blue-800 mb-1 text-sm md:text-base">
              Need Directions?
            </h4>
            <p className="text-blue-700 text-xs md:text-sm">
              We&apos;re located in the heart of Covent Garden, easily
              accessible by tube, bus, and train. The nearest tube station is
              Covent Garden (Piccadilly Line).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAdress;
