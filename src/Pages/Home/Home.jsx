import React from 'react';
import Banner from '../../Components/Banner/Banner';
import HowWorks from '../../Components/HowWorks/HowWorks';
import RoommateList from '../../Components/RoommateList/RoommateList';
import { useLoaderData } from 'react-router';

const Home = () => {
  const roommatePosts = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <HowWorks></HowWorks>
      <RoommateList roommatePosts={roommatePosts}></RoommateList>

    </div>
  );
};

export default Home;