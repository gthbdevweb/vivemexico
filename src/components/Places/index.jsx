import React from 'react';
import Place1 from '../../assets/img/places/slide1.webp';
import Place2 from '../../assets/img/places/slide2.jpg';
import './style.css';

const Places = () => {
  return (
    <section class="places-ctn sliceLeft">
      <h2 class="places-text-title">HEADLINE</h2>
      <p class="pĺaces-text-desciption">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      <div class="places-cards-ctn">
        <div class="places-card">
          <a href="#" class="places-card-link">
            <img class="places-card-img" src={Place1} alt="image1" />
            <p class="places-card-text">Lorem, ipsum dolor.</p>
            <div class="places-card-hover">
              <p class="places-card-hover-text">Lorem, ipsum dolor.</p>
            </div>
          </a>
        </div>
        <div class="places-card">
          <a href="#" class="places-card-link">
            <img class="places-card-img" src={Place2} alt="image1" />
            <p class="places-card-text">Lorem, ipsum dolor.</p>
            <div class="places-card-hover">
              <p class="places-card-hover-text">Lorem, ipsum dolor.</p>
            </div>
          </a>
        </div>
        <div class="places-card">
          <a href="#" class="places-card-link">
            <img class="places-card-img" src={Place1} alt="image1" />
            <p class="places-card-text">Lorem, ipsum dolor.</p>
            <div class="places-card-hover">
              <p class="places-card-hover-text">Lorem, ipsum dolor.</p>
            </div>
          </a>
        </div>
        <div class="places-card">
          <a href="#" class="places-card-link">
            <img class="places-card-img" src={Place2} alt="image1" />
            <p class="places-card-text">Lorem, ipsum dolor.</p>
            <div class="places-card-hover">
              <p class="places-card-hover-text">Lorem, ipsum dolor.</p>
            </div>
          </a>
        </div>
        <div class="places-card">
          <a href="#" class="places-card-link">
            <img class="places-card-img" src={Place1} alt="image1" />
            <p class="places-card-text">Lorem, ipsum dolor.</p>
            <div class="places-card-hover">
              <p class="places-card-hover-text">Lorem, ipsum dolor.</p>
            </div>
          </a>
        </div>
        <div class="places-card">
          <a href="#" class="places-card-link">
            <img class="places-card-img" src={Place2} alt="image1" />
            <p class="places-card-text">Lorem, ipsum dolor.</p>
            <div class="places-card-hover">
              <p class="places-card-hover-text">Lorem, ipsum dolor.</p>
            </div>
          </a>
        </div>
        <div class="places-card">
          <a href="#" class="places-card-link">
            <img class="places-card-img" src={Place1} alt="image1" />
            <p class="places-card-text">Lorem, ipsum dolor.</p>
            <div class="places-card-hover">
              <p class="places-card-hover-text">Lorem, ipsum dolor.</p>
            </div>
          </a>
        </div>
        <div class="places-card">
          <a href="#" class="places-card-link">
            <img class="places-card-img" src={Place2} alt="image1" />
            <p class="places-card-text">Lorem, ipsum dolor.</p>
            <div class="places-card-hover">
              <p class="places-card-hover-text">Lorem, ipsum dolor.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
};

export default Places;
