import React, { useState, useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Components/Context/AuthContext';
import { BadgeCheck, BadgeX, ThumbsUp } from 'lucide-react';
import { toast } from 'react-toastify';
import greyBG from '../../assets/grey-bg.jpg'


const PostDetails = () => {
  const roomDetails = useLoaderData();
  const { user } = useContext(AuthContext);

  const [likeCount, setLikeCount] = useState(roomDetails.likes || 0);
  const [liked, setLiked] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleLike = () => {
    if (user?.email === roomDetails.email) {
      toast.error("You can't like your own post");
      return;
    }

    fetch(`https://rent-buddy-server-six.vercel.app/like/${roomDetails._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setLikeCount(prev => prev + 1);
          setShowContact(true);
          setLiked(true);
        }
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to like post");
      });
  };

  return (
    <div className='w-10/12 md:w-2/3 mx-auto my-20 shadow-md'>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className='lg:w-9/12 '>
          <img
            src={roomDetails.photo || greyBG}
            alt="Roommate Post"
            className='w-full h-full object-cover'
          />
        </figure>


        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{roomDetails.title}</h2>

          {/* LIKE COUNT DISPLAY */}
          <p className='text-lg font-medium text-rose-500'>
            {likeCount} people interested in this post
          </p>

          {/* DESCRIPTION + AVAILABILITY */}
          {roomDetails.availability === 'Available' ? (
            <h3 className='text-lg text-slate-500'>
              {roomDetails.description}{' '}
              <span className="badge py-4 badge-soft text-purple-500 badge-primary text-lg flex items-center gap-1">
                <BadgeCheck color="oklch(62.7% 0.265 303.9)" />
                Available
              </span>
            </h3>
          ) : (
            <h3 className='text-lg text-slate-500'>
              {roomDetails.description}{' '}
              <span className="badge py-4 font-medium bg-rose-50 text-rose-500 flex items-center gap-1">
                <BadgeX className='text-rose-500' />
                Not Available
              </span>
            </h3>
          )}

          {/* LIKE BUTTON */}
          <button
            onClick={handleLike}
            className={`mt-3 w-fit px-4 py-2 rounded text-white flex items-center gap-2 ${liked ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}
            disabled={liked}
          >
            <ThumbsUp size={18} /> {liked ? 'Liked' : 'Like'}
          </button>

          {/* CONDITIONAL CONTACT DISPLAY */}
          {showContact && (
            <h4 className='font-medium text-lg'>
              Contact: <span className='font-normal'>{roomDetails.contact}</span>
            </h4>
          )}

          {/* Remaining Fields */}
          <h4 className='font-medium text-lg'>
            Rent: <span className='font-normal'>{roomDetails.rent} Taka/Month</span>
          </h4>
          <h4 className='font-medium text-lg'>
            Location: <span className='font-normal'>{roomDetails.location}</span>
          </h4>
          <h4 className='font-medium text-lg'>
            Room Type: <span className='font-normal'>{roomDetails.roomType}</span>
          </h4>
          <h4 className='font-medium text-lg'>
            Lifestyle: <span className='font-normal'>{roomDetails.Lifestyle}</span>
          </h4>
          <h4 className='font-medium text-lg'>
            Posted By: <span className='font-normal'>{roomDetails.name}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
