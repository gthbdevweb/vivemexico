import React from 'react';
import Calendar1 from '../../assets/img/calendar/slide1.webp';
import Calendar2 from '../../assets/img/calendar/slide2.jpg';
import './style.css';

const ImagesCalendar = () => {
  return (
    <section class="calendar-images-ctn">
      <div class="caldendar-images-card-ctn">
        <img class="calendar-images-card-img" src={Calendar1} alt="image" />
        <h5 class="calendar-images-card-text-title">Heading</h5>
        <p class="calendar-images-card-text-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga tempore dignissimos autem tempora illum veritatis natus!</p>
      </div>
      <div class="caldendar-images-card-ctn">
        <img class="calendar-images-card-img" src={Calendar2} alt="image" />
        <h5 class="calendar-images-card-text-title">Heading</h5>
        <p class="calendar-images-card-text-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga tempore dignissimos autem tempora illum veritatis natus!</p>
      </div>
      <div class="caldendar-images-card-ctn">
        <img class="calendar-images-card-img" src={Calendar1} alt="image" />
        <h5 class="calendar-images-card-text-title">Heading</h5>
        <p class="calendar-images-card-text-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga tempore dignissimos autem tempora illum veritatis natus!</p>
      </div>
    </section>
  )
};

export default ImagesCalendar;
