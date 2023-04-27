import React from 'react';
import HeaderVideos from '../components/HeaderVideos';
import VideosPage from '../components/VideosPage';
import './style.css';

const Videos = () => {
  return (
    <div className="main-content">
      <HeaderVideos />
      <VideosPage />
    </div>
  )
};

export default Videos;
