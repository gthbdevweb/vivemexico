import React from 'react';
import Towns1 from '../../assets/img/towns/slide1.webp';
import './style.css';

const HeaderTowns = () => {
  return (
    <section class="towns-header-ctn">
      <p class="towns-header-text-desc">Company name</p>
      <h1 class="towns-header-text-title">Headline</h1>
      <h3 class="towns-header-text-subtitle">subheading</h3>
      <button type="button" class="btn btn-primary towns-header-btn">CTA</button>
      <div class="towns-header-back-img-ctn">
        <img class="towns-header-back-img" src={Towns1} alt="img" />
      </div>
    </section>
  )
};

export default HeaderTowns;
