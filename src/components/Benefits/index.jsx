import React from 'react';
import Benefits1 from '../../assets/img/benefits/slide1.webp';
import Benefits2 from '../../assets/img/benefits/slide2.jpg';
import './style.css';

const Benefits = () => {
  return (
    <section class="towns-benefits-ctn">
      <h2 class="towns-benefits-text-title">Key Benefits</h2>
      <div class="towns-benefits-cards-ctn">
        <div class="towns-benefits-card-ctn">
          <img class="towns-benefits-card-img" src={Benefits1} alt="image" />
          <h4 class="towns-benefits-card-text-title">Subheading</h4>
          <p class="towns-benefits-card-text-desc">Lorem, ipsum dolor.</p>
        </div>
        <div class="towns-benefits-card-ctn">
          <img class="towns-benefits-card-img" src={Benefits2} alt="image" />
          <h4 class="towns-benefits-card-text-title">Subheading</h4>
          <p class="towns-benefits-card-text-desc">Lorem, ipsum dolor.</p>
        </div>
        <div class="towns-benefits-card-ctn">
          <img class="towns-benefits-card-img" src={Benefits1} alt="image" />
          <h4 class="towns-benefits-card-text-title">Subheading</h4>
          <p class="towns-benefits-card-text-desc">Lorem, ipsum dolor.</p>
        </div>
        <div class="towns-benefits-card-ctn">
          <img class="towns-benefits-card-img" src={Benefits2} alt="image" />
          <h4 class="towns-benefits-card-text-title">Subheading</h4>
          <p class="towns-benefits-card-text-desc">Lorem, ipsum dolor.</p>
        </div>
      </div>
      <button type="button" class="btn btn-primary towns-benefits-card-btn">más...</button>
    </section>
  )
};

export default Benefits;
