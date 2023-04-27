import React from 'react';
import './style.css';

const Features = () => {
  return (
    <section class="features-ctn">
      <h2 class="features-text-title">Great features</h2>
      <div class="features-collapse-ctn">
        <div class="features-collapse-btn-ctn">
          <button class="btn btn-primary features-collapse-btn" type="button" data-bs-toggle="collapse" data-bs-target="#featuresCollapseOne" aria-expanded="false" aria-controls="featuresCollapseOne">
            +
          </button>
          <div class="features-collapse-desc-ctn">
            <p class="features-collapse-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, sunt.</p>
          </div>
        </div>
        <div class="collapse features-collapse-body-ctn" id="featuresCollapseOne">
          <div class="card card-body">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dignissimos error ut velit eum ad, voluptatibus suscipit vitae fuga. Ut, delectus. Accusantium.</p>
          </div>
        </div>
      </div>
      <div class="features-collapse-ctn">
        <div class="features-collapse-btn-ctn">
          <button class="btn btn-primary features-collapse-btn" type="button" data-bs-toggle="collapse" data-bs-target="#featuresCollapseTwo" aria-expanded="false" aria-controls="featuresCollapseTwo">
            +
          </button>
          <div class="features-collapse-desc-ctn">
            <p class="features-collapse-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, libero.</p>
          </div>
        </div>
        <div class="collapse features-collapse-body-ctn" id="featuresCollapseTwo">
          <div class="card card-body">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur beatae, ad recusandae dignissimos animi facilis delectus ea illum est reiciendis veniam?</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Features;
