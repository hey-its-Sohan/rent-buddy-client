import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Lottie from 'lottie-react';
import loader from "../../assets/Animations/loading.json"


const PrivateRoutes = ({ children }) => {

  const { user, loading } = use(AuthContext);
  const location = useLocation()
  if (loading) {
    return <div className='max-w-screen-xl mx-auto text-center my-[400px]'><Lottie animationData={loader} loop={true} className="w-1/4 mx-auto" /></div>
  }
  if (!user) {
    return <Navigate state={location?.pathname} to='/login'></Navigate>
  }
  return children;
};

export default PrivateRoutes;