import React from 'react';
import Hero from '../components/Hero';
import Places from '../components/Places';
import Description from '../components/Description';
import Slider from '../components/Slider';
import Features from '../components/Features/indes';
import VideoHome from '../components/VideoHome';
import './style.css';


const Home = () => {
  return (
    <div className="main-content">
      <Hero />
      <Places />
      <Description />
      <Slider />
      <Features />
      <VideoHome />
    </div>
  )
};

export default Home;
