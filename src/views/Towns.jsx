import React from 'react';
import HeaderTowns from '../components/HeaderTowns';
import Benefits from '../components/Benefits';
import Rating from '../components/Rating';
import Features from '../components/Features/indes';
import BottomTowns from '../components/BottomTowns';
import './style.css';

const Towns = () => {
  return (
    <div className="main-content">
      <HeaderTowns />
      <Benefits />
      <Rating />
      <Features />
      <BottomTowns />
    </div>
  )
};

export default Towns;
