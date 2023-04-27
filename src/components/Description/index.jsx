import React from 'react';
import Description1 from '../../assets/img/description/slide2.jpg';
import './style.css';

const Description = () => {
  return (
    <section class="description-ctn">
      <div class="description-ctn-text">
        <h2 class="description-text-title">HEADLINE</h2>
        <p class="description-text-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed id cupiditate aperiam, porro distinctio atque voluptates aliquid perferendis fugiat harum? Velit quod optio nulla architecto repellat quisquam exercitationem libero incidunt delectus qui eius et saepe, harum eligendi numquam aliquam! Blanditiis.</p>
        <div class="description-ctn-badge">
          <p class="description-badge-text">Lorem ipsum dolor sit.</p>
        </div>
      </div>
      <div class="description-ctn-img">
        <img class="description-img" src={Description1} alt="image2" />
      </div>
    </section>
  )
};

export default Description;
