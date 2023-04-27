import React from 'react';
import Known1 from '../../assets/img/knownState/slide1.webp';
import './style.css';

const StateKnown = () => {
  return (
    <section class="state-known-ctn sliceLeft">
      <div class="state-known-text-ctn">
        <h2 class="state-known-text-title">Heading</h2>
        <p class="state-known-text-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque, corrupti dolor voluptates aut autem. Blanditiis dolor et harum dolorem commodi omnis animi repellat eum cum quo vel dicta adipisci praesentium, tempore ipsa amet minima cumque aliquam nemo! Quos minus, optio excepturi fugiat ullam delectus, facere totam, debitis non in tenetur minima.</p>
        <button type="button" class="btn btn-primary state-known-btn">Más...</button>
      </div>
      <div class="state-known-img-ctn">
        <img class="state-known-img" src={Known1} alt="image" />
      </div>
    </section>
  )
};

export default StateKnown;
