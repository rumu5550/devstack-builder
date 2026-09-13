import React from 'react';
import Navbar from '../shared/Navbar';
import Banner from './Banner';
import ExploreTechnologies from './ExploreTechnologies';
import FAQ from './FAQ';
import Footer from '../shared/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar />
        <Banner />
        <ExploreTechnologies />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Home;







