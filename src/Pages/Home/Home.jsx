import React from 'react';
import Banner from '../../Components/Banner/Banner';
import HowWorks from '../../Components/HowWorks/HowWorks';
import RoommateList from '../../Components/RoommateList/RoommateList';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowWorks></HowWorks>
      <RoommateList></RoommateList>

    </div>
  );
};

export default Home;