import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <p className="text-lg text-gray-600 mb-6">
            Feel free to reach out to us for any inquiries or information. We are happy to assist you!
          </p>

          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
            </svg>
            <p className="text-lg text-gray-700">+977 9837377378</p>
          </div>

          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
            </svg>
            <p className="text-lg text-gray-700">contact@explorenepal.com</p>
          </div>

          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
            </svg>
            <p className="text-lg text-gray-700"> Koteshwor, Kathmandu, Nepal</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Location</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31713618354!2d85.28493302080203!3d27.708954252207754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1735834349607!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Map Location"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="mailto:contact@explorenepal.com"
          className="inline-block py-3 px-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Us an Email
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
