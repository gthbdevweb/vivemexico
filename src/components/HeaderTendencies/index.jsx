import React from 'react';
import './style.css';

const HeaderTendencies = () => {
  return (
    <section class="tendencies-header-ctn">
      <h1 class="tendencies-header-text-title">Headline</h1>
      <h3 class="tendecies-header-text-subtitle">Subhead</h3>
      <p class="tendencies-header-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form class="tendencies-header-form-ctn">
        <div class="form-group tendencies-header-form">
          <label for="tendenciesHeaderSearch">tendencies search</label>
          <input type="email" class="form-control" id="tendenciesHeaderSearch" aria-describedby="tendenciesHelp" placeholder="Some text..." />
        </div>
        <button type="submit" class="btn btn-primary tendencies-header-btn">Submit</button>
      </form>
      <div class="tendencies-header-back">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EjNe5EJ1cAQ?rel=0;&autoplay=1" title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México." frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </section>
  )
};

export default HeaderTendencies;
