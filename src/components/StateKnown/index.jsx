import React from 'react';
import Known1 from '../../assets/img/knownState/slide1.webp';
import './style.css';

const StateKnown = () => {
  return (
    <section className="state-known-ctn sliceLeft">
      <div className="state-known-text-ctn">
        <h2 className="state-known-text-title">Heading</h2>
        <p className="state-known-text-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque, corrupti dolor voluptates aut autem. Blanditiis dolor et harum dolorem commodi omnis animi repellat eum cum quo vel dicta adipisci praesentium, tempore ipsa amet minima cumque aliquam nemo! Quos minus, optio excepturi fugiat ullam delectus, facere totam, debitis non in tenetur minima.</p>
        <button type="button" className="btn btn-primary state-known-btn">Más...</button>
      </div>
      <div className="state-known-img-ctn">
        <img className="state-known-img" src={Known1} alt="image" />
      </div>
    </section>
  )
};

export default StateKnown;
