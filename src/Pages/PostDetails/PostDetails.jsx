import { BadgeCheck, BadgeX } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
  const roomDetails = useLoaderData()
  return (
    <div className='w-10/12 md:w-2/3 mx-auto my-20 shadow-md'>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className='md:w-9/12 '>
          <img
            src={roomDetails.photo}
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{roomDetails.title}</h2>
          {
            roomDetails.availability === 'Available' ? <h3 className='text-lg text-slate-500'>{roomDetails.description} <span class="badge py-4 badge-soft text-purple-500 badge-primary text-lg"><BadgeCheck color="oklch(62.7% 0.265 303.9)" />Available</span></h3> :
              <h3 className='text-lg text-slate-500'>{roomDetails.description} <span class="badge py-4 badge-soft text-purple-500 badge-primary text-lg"><BadgeX color="oklch(62.7% 0.265 303.9)" />Unavailable</span></h3>
          }
          <h4></h4>
          <h4 className='font-medium text-lg'>Rent: <span className='font-normal'>{roomDetails.rent} Taka/Month</span></h4>
          <h4 className='font-medium text-lg'>Location: <span className='font-normal'>{roomDetails.location}</span></h4>
          <h4 className='font-medium text-lg'>Room Type: <span className='font-normal'>{roomDetails.roomType}</span></h4>
          <h4 className='font-medium text-lg'>Lifestyle: <span className='font-normal'>{roomDetails.Lifestyle}</span></h4>
          <h4 className='font-medium text-lg'>Posted By: <span className='font-normal'>{roomDetails.name}</span></h4>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;