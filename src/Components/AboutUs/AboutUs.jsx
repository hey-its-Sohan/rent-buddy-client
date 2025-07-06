import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/Animation - 1751725378063.json";
import { FaCheckCircle, FaUserCheck, FaMapMarkedAlt, FaComments, FaLock, FaMoon } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div >
      <div className="mb-10 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-500">About Us</h2>
        {/* <p className="text-lg text-gray-600 mt-2">Know who we are and why we built RentBuddy</p> */}
      </div>
      <section className="bg-gray-100 text-gray-800 py-5 px-5 md:px-20">

        <div className='max-w-screen-xl mx-auto'>
          {/* Hero + Mission Row */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
            <div>
              <h3 className="text-3xl text-cyan-500 font-semibold mb-4 ">Making Roommate Hunting Hassle-Free</h3>
              <p className="text-slate-500 text-lg">
                RentBuddy connects people with the perfect roommates based on shared values, budget, and lifestyle.
              </p>
            </div>
            <div>
              <Lottie
                animationData={groovyWalkAnimation}
                loop={true}
                src="https://lottie.host/eaeb656c-e8f8-49d0-80b0-dac8f73ef2cb/0fEPj74n7O.json"
                style={{ height: '350px', width: '100%' }}
              />
            </div>
          </div>

          {/* Mission and Story */}
          <div className="grid md:grid-cols-2 gap-10 mb-14">
            <div>
              <h4 className="text-2xl font-bold mb-2 text-cyan-500">Mission Statement</h4>
              <p className="text-slate-500 text-lg">
                At RentBuddy, our mission is to help students, professionals, and city dwellers find the most compatible roommates without stress. We aim to simplify shared living by combining tech, trust, and community.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2 text-cyan-500">Our Story / How It Started</h4>
              <p className="text-slate-500 text-lg">
                RentBuddy was born out of a simple problem—finding a roommate shouldn’t feel like online dating or a gamble.
                As a solo developer and renter, I created this platform to prioritize real profiles, smart filters, and safe connections.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-14">
            <h4 className="text-2xl text-cyan-500 font-bold mb-6 ">What We Offer</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
                <div className="text-2xl text-purple-500 mb-2"><FaCheckCircle /></div>
                <p className="text-gray-700 text-sm">Smart roommate matching</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
                <div className="text-2xl text-purple-500 mb-2"><FaUserCheck /></div>
                <p className="text-gray-700 text-sm">Verified user profiles</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
                <div className="text-2xl text-purple-500 mb-2"><FaMapMarkedAlt /></div>
                <p className="text-gray-700 text-sm">Location & budget filters</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
                <div className="text-2xl text-purple-500 mb-2"><FaComments /></div>
                <p className="text-gray-700 text-sm">In-app messaging</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
                <div className="text-2xl text-purple-500 mb-2"><FaLock /></div>
                <p className="text-gray-700 text-sm">Privacy-first contact sharing</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center">
                <div className="text-2xl text-purple-500 mb-2"><FaMoon /></div>
                <p className="text-gray-700 text-sm">Dark/light mode toggle</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold mb-3">Ready to find your perfect roommate?</h4>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-purple-500 text-white px-5 py-2 rounded hover:bg-purple-700">Browse Listings</button>
              <button className="bg-cyan-500 text-white px-5 py-2 rounded hover:bg-cyan-600">Add Your Listing</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default AboutUs;
