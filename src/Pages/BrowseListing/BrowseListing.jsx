import React from 'react';
import { useLoaderData } from 'react-router';
import AllPost from '../../Components/AllPost/AllPost';

const BrowseListing = () => {
  const allposts = useLoaderData()
  return (
    <div className='max-w-screen-xl mx-auto my-7 md:my-20'>
      <h1 className='text-4xl mb-7 md:mb-10 font-bold text-purple-500'>All Post Lists</h1>
      <div className='grid md:grid-cols-3 gap-3'>
        {
          allposts?.map(post => <AllPost post={post}></AllPost>)
        }
      </div>
    </div>
  );
};

export default BrowseListing;