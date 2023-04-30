import React from 'react';
import HeaderEvents from '../components/HeaderEvents';
import VideoEvents from '../components/VideoEvents';
import Rss from '../components/Rss';
import './style.css';

const Events = () => {
  return (
    <div className="main-content">
      <Rss />
      <HeaderEvents />
      <VideoEvents />
    </div>
  )
};

export default Events;
