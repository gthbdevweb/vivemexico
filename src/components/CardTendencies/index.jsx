import React from 'react';
import Tendencies1 from '../../assets/img/tendencies/slide1.webp';
import Tendencies2 from '../../assets/img/tendencies/slide2.jpg';
import './style.css';

const CardTendencies = () => {
  return (
    <section class="sliceLeft">
      <div class="tendencies-card" style={{ backgroundColor: "#eee" }} >
        <div class="tendencies-card-img-ctn">
          <img class="tendencies-card-img" src={Tendencies1} alt="image" />
        </div>
        <div class="tendencies-card-text-ctn">
          <h2 class="tendencies-card-text-title">Heading</h2>
          <p class="tendencies-card-text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sed labore atque unde nobis expedita adipisci nostrum quaerat numquam ut aspernatur, commodi doloremque voluptatibus accusamus inventore iusto vel eaque officiis veritatis vero?</p>
          <button class="btn btn-primary tendencies-card-text-btn">Share</button>
        </div>
      </div>
      <div class="tendencies-card" style={{ backgroundColor: "#fff" }} >
        <div class="tendencies-card-img-ctn">
          <img class="tendencies-card-img" src={Tendencies2} alt="image" />
        </div>
        <div class="tendencies-card-text-ctn">
          <h2 class="tendencies-card-text-title">Heading</h2>
          <p class="tendencies-card-text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sed labore atque unde nobis expedita adipisci nostrum quaerat numquam ut aspernatur, commodi doloremque voluptatibus accusamus inventore iusto vel eaque officiis veritatis vero?</p>
          <button class="btn btn-primary tendencies-card-text-btn">Share</button>
        </div>
      </div>
      <div class="tendencies-card" style={{ backgroundColor: "#eee" }} >
        <div class="tendencies-card-img-ctn">
          <img class="tendencies-card-img" src={Tendencies1} alt="image" />
        </div>
        <div class="tendencies-card-text-ctn">
          <h2 class="tendencies-card-text-title">Heading</h2>
          <p class="tendencies-card-text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sed labore atque unde nobis expedita adipisci nostrum quaerat numquam ut aspernatur, commodi doloremque voluptatibus accusamus inventore iusto vel eaque officiis veritatis vero?</p>
          <button class="btn btn-primary tendencies-card-text-btn">Share</button>
        </div>
      </div>
    </section>
  )
};

export default CardTendencies;
