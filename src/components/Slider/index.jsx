import React from 'react';
import Slide1 from '../../assets/img/slider/slide1.webp';
import Slide2 from '../../assets/img/slider/slide2.jpg';
import './style.css';

const Slider = () => {
  return (
    <section class="slider-ctn">
      <div id="recipeCarousel" class="carousel carousel-js slide" data-bs-ride="carousel">
        <div class="carousel-inner carousel-inner-js" role="listbox">
          <div class="carousel-item carousel-item-js active">
            <div class="col-md-4">
              <div class="card slider-card-ctn">
                <div class="heading-card-img heading-slider-card-ctn-img">
                  <a href="#" rel="noopener noreferrer">
                    <img src={Slide1} class="heading-card-img heading-slider-card-img" />
                    <h4 class="heading-slider-text-title">Heading</h4>
                    <p class="heading-slider-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus totam corporis.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item carousel-item-js">
            <div class="col-md-4">
              <div class="card slider-card-ctn">
                <div class="heading-card-img heading-slider-card-ctn-img">
                  <a href="#" rel="noopener noreferrer">
                    <img src={Slide2} class="heading-card-img heading-slider-card-img" />
                    <h4 class="heading-slider-text-title">Heading</h4>
                    <p class="heading-slider-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus totam corporis.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item carousel-item-js">
            <div class="col-md-4">
              <div class="card slider-card-ctn">
                <div class="heading-card-img heading-slider-card-ctn-img">
                  <a href="#" rel="noopener noreferrer">
                    <img src={Slide1} class="heading-card-img heading-slider-card-img" />
                    <h4 class="heading-slider-text-title">Heading</h4>
                    <p class="heading-slider-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus totam corporis.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item carousel-item-js">
            <div class="col-md-4">
              <div class="card slider-card-ctn">
                <div class="heading-card-img heading-slider-card-ctn-img">
                  <a href="#" rel="noopener noreferrer">
                    <img src={Slide2} class="heading-card-img heading-slider-card-img" />
                    <h4 class="heading-slider-text-title">Heading</h4>
                    <p class="heading-slider-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus totam corporis.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item carousel-item-js">
            <div class="col-md-4">
              <div class="card slider-card-ctn">
                <div class="heading-card-img heading-slider-card-ctn-img">
                  <a href="#" rel="noopener noreferrer">
                    <img src={Slide1} class="heading-card-img heading-slider-card-img" />
                    <h4 class="heading-slider-text-title">Heading</h4>
                    <p class="heading-slider-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus totam corporis.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item carousel-item-js">
            <div class="col-md-4">
              <div class="card slider-card-ctn">
                <div class="heading-card-img heading-slider-card-ctn-img">
                  <a href="#" rel="noopener noreferrer">
                    <img src={Slide2} class="heading-card-img heading-slider-card-img" />
                    <h4 class="heading-slider-text-title">Heading</h4>
                    <p class="heading-slider-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus totam corporis.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev carousel-control-prev-js bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a class="carousel-control-next carousel-control-next-js bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </section>
  )
};

export default Slider;
