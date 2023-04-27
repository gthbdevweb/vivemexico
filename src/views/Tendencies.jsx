import React from 'react';
import HeaderTendencies from '../components/HeaderTendencies';
import CardTendencies from '../components/CardTendencies';
import './style.css';

const Tendencies = () => {
  return (
    <div className="main-content">
      <HeaderTendencies />
      <CardTendencies />
    </div>
  )
};

export default Tendencies;
