import React from 'react';
import Videostates from '../components/VideoStates';
import Liststates from '../components/ListStates/indes';
import ContentStates from '../components/ContentStates';
import './style.css';

const States = () => {
  return (
    <div className="main-content">
      <Videostates />
      <Liststates />
      <ContentStates />
    </div>
  )
};

export default States;
