import React from 'react';
import Towns1 from '../../assets/img/towns/slide1.webp';
import './style.css';

const HeaderTowns = () => {
  return (
    <section className="towns-header-ctn">
      <p className="towns-header-text-desc">Company name</p>
      <h1 className="towns-header-text-title">Headline</h1>
      <h3 className="towns-header-text-subtitle">subheading</h3>
      <button type="button" className="btn btn-primary towns-header-btn">CTA</button>
      <div className="towns-header-back-img-ctn">
        <img className="towns-header-back-img" src={Towns1} alt="img" />
      </div>
    </section>
  )
};

export default HeaderTowns;
