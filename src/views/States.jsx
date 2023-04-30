import React from 'react';
import Videostates from '../components/VideoStates';
import Liststates from '../components/ListStates/indes';
import ContentStates from '../components/ContentStates';
import Rss from '../components/Rss';
import './style.css';

const States = () => {
  return (
    <div className="main-content">
      <Rss />
      <Videostates />
      <Liststates />
      <ContentStates />
    </div>
  )
};

export default States;
