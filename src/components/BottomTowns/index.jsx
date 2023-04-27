import React from 'react';
import Bottom1 from '../../assets/img/bottom/slide1.webp';
import './style.css';

const BottomTowns = () => {
  return (
    <section class="towns-bottom-ctn">
      <div class="towns-bottom-img-ctn">
        <img class="towns-bottom-img" src={Bottom1} alt="img" />
      </div>
      <div class="towns-bottom-text-ctn">
        <h3 class="towns-bottom-text-title">Heading</h3>
        <p class="towns-bottom-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, delectus voluptatem. Blanditiis perspiciatis modi doloremque neque maiores odio id sapiente omnis beatae mollitia corrupti ab dolorum, iure quis animi voluptatibus fugit recusandae, ipsam repellendus! Mollitia inventore soluta possimus perferendis explicabo harum magni hic necessitatibus voluptas provident nisi itaque, tempore a quia fugit laudantium voluptatum eum! Tempora ab ut natus, mollitia quam ad perspiciatis odio obcaecati inventore quasi aliquid corporis hic magni magnam. Aliquam nisi dolorem, animi architecto deserunt ad in. Unde mollitia neque vitae?</p>
      </div>
    </section>
  )
};

export default BottomTowns;
