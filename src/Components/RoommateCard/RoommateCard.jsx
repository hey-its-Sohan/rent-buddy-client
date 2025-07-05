import { BadgeCheck, BadgeX } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const RoommateCard = ({ roommateCard }) => {
  return (
    <div >
      <div className="card h-[500px] mb-3 bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            className=''
            src={roommateCard.photo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">
            {roommateCard.title}
            {
              roommateCard.availability === 'Available' ? <div className="badge text-white py-4 bg-purple-500"><BadgeCheck color="white" />Available</div> :
                <div className="badge text-white py-4 bg-purple-500"><BadgeX color="white" />Unavailable</div>
            }

          </h2>
          <h3 className='text-lg font-medium text-slate-500 mt-3'>Rent: {roommateCard.rent} Taka</h3>
          <div className='flex justify-between font-medium text-lg text-slate-500'>
            <h4>Location: {roommateCard.location}</h4>
            <h4>Roomtype: {roommateCard.roomType}</h4>
          </div>

          <Link to={`/post-details/${roommateCard._id}`}>
            <div className="card-actions justify-end">
              <button className=" btn mt-2 bg-cyan-500 text-white font-medium rounded-xl hover:bg-cyan-700">View Details</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoommateCard;