import React from 'react';
import State1 from '../../assets/img/contentStates/slide1.webp';
import State2 from '../../assets/img/contentStates/slide2.jpg';
import './style.css';

const ContentStates = () => {
  return (
    <section class="states-relation-content-ctn">
      <h3 class="states-relation-content-text-title">Quizás también te interese...</h3>
      <div class="states-relation-content-cards-ctn">
        <div class="states-relation-content-card-ctn">
          <a href="#">
            <img class="states-relation-content-card-img" src={State2} alt="relationed" />
            <h6 class="states-relation-content-card-text-title">Heading</h6>
            <p class="states-relation-content-card-text-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorum voluptatibus quos ratione vero repellendus doloribus quaerat praesentium similique perferendis, in, obcaecati quae reprehenderit aspernatur earum corrupti dolores, iure quasi.</p>
          </a>
        </div>
        <div class="states-relation-content-card-ctn">
          <a href="#">
            <img class="states-relation-content-card-img" src={State1} alt="relationed" />
            <h6 class="states-relation-content-card-text-title">Heading</h6>
            <p class="states-relation-content-card-text-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorum voluptatibus quos ratione vero repellendus doloribus quaerat praesentium similique perferendis, in, obcaecati quae reprehenderit aspernatur earum corrupti dolores, iure quasi.</p>
          </a>
        </div>
        <div class="states-relation-content-card-ctn">
          <a href="#">
            <img class="states-relation-content-card-img" src={State2} alt="relationed" />
            <h6 class="states-relation-content-card-text-title">Heading</h6>
            <p class="states-relation-content-card-text-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorum voluptatibus quos ratione vero repellendus doloribus quaerat praesentium similique perferendis, in, obcaecati quae reprehenderit aspernatur earum corrupti dolores, iure quasi.</p>
          </a>
        </div>
      </div>
    </section>
  )
};

export default ContentStates;
