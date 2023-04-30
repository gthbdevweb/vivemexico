import React from 'react';
import Benefits1 from '../../assets/img/benefits/slide1.webp';
import Benefits2 from '../../assets/img/benefits/slide2.jpg';
import './style.css';

const Benefits = () => {
  return (
    <section className="towns-benefits-ctn">
      <h2 className="towns-benefits-text-title">Key Benefits</h2>
      <div className="towns-benefits-cards-ctn">
        <div className="towns-benefits-card-ctn">
          <img className="towns-benefits-card-img" src={Benefits1} alt="image" />
          <h4 className="towns-benefits-card-text-title">Subheading</h4>
          <p className="towns-benefits-card-text-desc">Lorem, ipsum dolor.</p>
        </div>
        <div className="towns-benefits-card-ctn">
          <img className="towns-benefits-card-img" src={Benefits2} alt="image" />
          <h4 className="towns-benefits-card-text-title">Subheading</h4>
          <p className="towns-benefits-card-text-desc">Lorem, ipsum dolor.</p>
        </div>
        <div className="towns-benefits-card-ctn">
          <img className="towns-benefits-card-img" src={Benefits1} alt="image" />
          <h4 className="towns-benefits-card-text-title">Subheading</h4>
          <p className="towns-benefits-card-text-desc">Lorem, ipsum dolor.</p>
        </div>
        <div className="towns-benefits-card-ctn">
          <img className="towns-benefits-card-img" src={Benefits2} alt="image" />
          <h4 className="towns-benefits-card-text-title">Subheading</h4>
          <p className="towns-benefits-card-text-desc">Lorem, ipsum dolor.</p>
        </div>
      </div>
      <button type="button" className="btn btn-primary towns-benefits-card-btn">más...</button>
    </section>
  )
};

export default Benefits;
