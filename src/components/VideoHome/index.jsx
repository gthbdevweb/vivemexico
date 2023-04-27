import React from 'react';
import './style.css';

const VideoHome = () => {
  return (
    <section class="video-home-ctn">
      <h2 class="video-home-text-title">HEADLINE</h2>
      <div class="video-home-vide-ctn">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EjNe5EJ1cAQ?rel=0;&autoplay=1" title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México." frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </section>
  )
};

export default VideoHome;
