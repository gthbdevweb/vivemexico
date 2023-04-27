import React from 'react';
import Slide1 from '../../assets/img/hero/slide1.webp';
import Slide2 from '../../assets/img/hero/slide2.jpg';
import './style.css';


const Hero = () => {
  return (
    <section class="hero-ctn">
      <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Slide1} class="hero-carousel-img" alt="slide1" />
          </div>
          <div class="carousel-item">
            <img src={Slide2} class="hero-carousel-img" alt="slide2" />
          </div>
          <div class="carousel-item">
            <img src={Slide1} class="hero-carousel-img" alt="slide3" />
          </div>
          <div class="carousel-item">
            <img src={Slide2} class="hero-carousel-img" alt="slide4" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="hero-text-ctn">
        <h1 class="hero-text-title">Headline</h1>
        <h3 class="hero-text-subtitle">Subheadline</h3>
        <p class="hero-text-desc">Lorem ipsum dolor sit amet consectetur.</p>
        <button type="button" class="btn btn-primary">Get started</button>
      </div>
    </section>
  )
}

export default Hero
