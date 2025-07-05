import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaCheckCircle, FaUserCheck, FaMapMarkedAlt, FaComments, FaLock, FaMoon } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-10 px-5 md:px-20">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-purple-600">About Us</h2>
        <p className="text-lg text-gray-600 mt-2">Know who we are and why we built RentBuddy</p>
      </div>

      {/* Hero + Mission Row */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <h3 className="text-3xl font-semibold mb-4 text-gray-900">Making Roommate Hunting Hassle-Free</h3>
          <p className="text-gray-700">
            RentBuddy connects people with the perfect roommates based on shared values, budget, and lifestyle.
          </p>
        </div>
        <div>
          <Player
            autoplay
            loop
            src="https://lottie.host/eaeb656c-e8f8-49d0-80b0-dac8f73ef2cb/0fEPj74n7O.json"
            style={{ height: '250px', width: '100%' }}
          />
        </div>
      </div>

      {/* Mission and Story */}
      <div className="grid md:grid-cols-2 gap-10 mb-14">
        <div>
          <h4 className="text-xl font-bold mb-2 text-purple-600">Mission Statement</h4>
          <p className="text-gray-700">
            At RentBuddy, our mission is to help students, professionals, and city dwellers find the most compatible roommates without stress. We aim to simplify shared living by combining tech, trust, and community.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2 text-purple-600">Our Story / How It Started</h4>
          <p className="text-gray-700">
            RentBuddy was born out of a simple problem—finding a roommate shouldn’t feel like online dating or a gamble.
            As a solo developer and renter, I created this platform to prioritize real profiles, smart filters, and safe connections.
          </p>
        </div>
      </div>

      {/* What We Offer */}
      <div className="mb-14">
        <h4 className="text-2xl font-bold mb-6 text-gray-900">What We Offer</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <Feature icon={<FaCheckCircle />} title="Smart roommate matching" />
          <Feature icon={<FaUserCheck />} title="Verified user profiles" />
          <Feature icon={<FaMapMarkedAlt />} title="Location & budget filters" />
          <Feature icon={<FaComments />} title="In-app messaging" />
          <Feature icon={<FaLock />} title="Privacy-first contact sharing" />
          <Feature icon={<FaMoon />} title="Dark/light mode toggle" />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h4 className="text-xl font-bold mb-3">Ready to find your perfect roommate?</h4>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700">Browse Listings</button>
          <button className="bg-teal-500 text-white px-5 py-2 rounded hover:bg-teal-600">Add Your Listing</button>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
    <div className="text-2xl text-purple-600 mb-2">{icon}</div>
    <p className="text-gray-700 text-sm">{title}</p>
  </div>
);

export default AboutUs;
