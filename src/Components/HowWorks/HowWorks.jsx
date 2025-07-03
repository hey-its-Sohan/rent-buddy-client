import React from 'react';
import createProfile from "../../assets/createProfile.png"
import search from "../../assets/search.png"
import react from "../../assets/react.png"

const HowWorks = () => {
  return (
    <div className='max-w-screen-xl mx-auto my-10'>
      <h1 className='text-4xl font-bold text-purple-500 my-7'>How It Works</h1>
      <div className='flex gap-5'>
        <div className='bg-slate-100 p-5 rounded-xl'>
          <img className='w-24 mx-auto' src={createProfile} alt="" />
          <h2 className='text-lg my-2 font-bold text-purple-500 text-center'>Create a Profile</h2>
          <p className='text-center w-3/4 mx-auto'>Sign up and create a detailed profile about yourself and your living.</p>
        </div>
        <div className='bg-slate-100 p-5 rounded-xl'>
          <img className='w-24 mx-auto' src={search} alt="" />
          <h2 className='text-lg my-2 font-bold text-cyan-500 text-center'>Search for Roommates</h2>
          <p className='text-center w-3/4 mx-auto'>Browse through potential roommates based on your criteria and preferences.</p>
        </div>
        <div className='bg-slate-100 p-5 rounded-xl'>
          <img className='w-24 mx-auto' src={react} alt="" />
          <h2 className='text-lg my-2 font-bold text-purple-500 text-center'>React to Connect</h2>
          <p className='text-center w-3/4 mx-auto'>Matched your preferences? React post to connect and see if you're a good match.</p>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;