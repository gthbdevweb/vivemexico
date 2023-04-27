import React from 'react';
import './style.css';

const MapState = () => {
  return (
    <section class="state-map-ctn revealTop">
      <div class="state-map-view-ctn">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512730.705677566!2d-124.59084255708773!3d37.151646373370205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1682217912140!5m2!1ses-419!2smx" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="state-map-desc-ctn">
        <h3 class="state-map-desc-text-title">Heading</h3>
        <p class="state-map-desc-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste cumque quisquam illo animi adipisci facere? Eligendi, consequatur inventore, consequuntur hic repudiandae ex, quisquam praesentium aliquam ipsum autem veritatis! Recusandae similique, itaque beatae deserunt magnam sint enim facilis, ratione iste perspiciatis ipsam illum labore delectus alias.</p>
        <button type="button" class="btn btn-primary state-map-btn">Share</button>
      </div>
    </section>
  )
};

export default MapState;
