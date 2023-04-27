import React from 'react';
import Blog1 from '../../assets/img/blog/slide1.webp';
import Blog2 from '../../assets/img/blog/slide2.jpg';
import './style.css';

const Blog = () => {
  return (
    <section class="blog-ctn sliceLeft">
      <div class="blog-item-ctn">
        <img class="blog-item-img" src={Blog1} alt="image" />
        <h2 class="blog-item-text-title">Heading</h2>
        <p class="blog-item-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dolores officiis! Adipisci itaque error ea cumque minima enim blanditiis, tenetur asperiores sequi voluptatem dolorem nostrum ad. Repudiandae provident eius quae exercitationem! At officia modi aliquid temporibus neque, quod nihil molestiae facere et unde corrupti minima saepe quibusdam aspernatur magni ipsam accusamus, facilis illo mollitia tempora magnam velit eos hic? Ratione modi velit eveniet aliquam.</p>
        <button type="button" class="btn btn-primary blog-item-btn">Share</button>
      </div>
      <div class="blog-item-ctn">
        <img class="blog-item-img" src={Blog2} alt="image" />
        <h2 class="blog-item-text-title">Heading</h2>
        <p class="blog-item-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dolores officiis! Adipisci itaque error ea cumque minima enim blanditiis, tenetur asperiores sequi voluptatem dolorem nostrum ad. Repudiandae provident eius quae exercitationem! At officia modi aliquid temporibus neque, quod nihil molestiae facere et unde corrupti minima saepe quibusdam aspernatur magni ipsam accusamus, facilis illo mollitia tempora magnam velit eos hic? Ratione modi velit eveniet aliquam.</p>
        <button type="button" class="btn btn-primary blog-item-btn">Share</button>
      </div>
    </section>
  )
};

export default Blog;
