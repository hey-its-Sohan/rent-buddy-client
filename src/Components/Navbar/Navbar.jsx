import React, { use } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {

  const { user, signOutUser } = use(AuthContext)

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  return (
    <div className='bg-purple-500'>
      <div className='max-w-screen-xl mx-auto'>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Home</a></li>
                <li><a>Add Post</a></li>
                <li><a>Browse Listing</a></li>
                <li><a>My Listing</a></li>
              </ul>
            </div>
            <div><img className='w-30 md:w-40' src={logo} alt="" /></div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className=' text-lg font-medium'><a>Home</a></li>
              <Link to={'/addpost'} ><li className=' text-lg font-medium'><a>Add Post</a></li></Link>
              <li className=' text-lg font-medium'><a>Browse Listing</a></li>
              <li className=' text-lg font-medium'><a>My Listing</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            {
              user ? <div className=' text-white text-lg font-medium'>{user.displayName}</div> :
                <div className='flex gap-3 mr-5 md:mr-0'>
                  <button className='text-lg font-medium btn btn-xs py-5 md:py-0 sm:btn-sm md:btn-md  '>Login</button>
                  <button className='text-lg font-medium btn btn-xs py-5 md:py-0 sm:btn-sm md:btn-md  '>Sign up</button>
                </div>
            }

            <div className="dropdown dropdown-end ml-5">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User"
                    src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li onClick={handleSignOut}><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;