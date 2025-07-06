import React from 'react';
import RoommateCard from '../RoommateCard/RoommateCard';

const RoommateList = ({ roommatePosts }) => {
  return (
    <div className='my-10 max-w-screen-xl mx-auto px-10 md:px-7 lg:px-0'>
      <h1 className='text-4xl font-bold text-purple-500 my-7'>Roommate Listing</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
          roommatePosts?.map(roommateCard => <RoommateCard roommateCard={roommateCard}></RoommateCard>)
        }
      </div>


    </div>
  );
};

export default RoommateList;