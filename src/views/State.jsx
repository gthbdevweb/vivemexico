import React from 'react';
import VideoState from '../components/VideoState';
import StateKnown from '../components/StateKnown';
import MapState from '../components/MapState';
import SpotifyState from '../components/SpotifyState';
import Rss from '../components/Rss';
import './style.css';

const State = () => {
  return (
    <div className="main-content">
      <Rss />
      <VideoState />
      <StateKnown />
      <MapState />
      <SpotifyState />
      <VideoState />
    </div>
  )
};

export default State;
