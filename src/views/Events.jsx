import React from 'react';
import HeaderEvents from '../components/HeaderEvents';
import VideoEvents from '../components/VideoEvents';
import './style.css';

const Events = () => {
  return (
    <div className="main-content">
      <HeaderEvents />
      <VideoEvents />
    </div>
  )
};

export default Events;
