import React from 'react';
import Calendar1 from '../../assets/img/calendar/slide1.webp';
import './style.css';

const HeaderCalendar = () => {
  return (
    <section class="calendar-header-ctn">
      <div class="calendar-header-text-ctn">
        <h1 class="calendar-header-text-title">Headline</h1>
        <h3 class="calendar-header-text-subtitle">Subheading</h3>
      </div>
      <div class="calendar-header-calendar-ctn">
        <div class="calendar-header-calendar-img-ctn">
          <img class="calendar-header-calendar-img" src={Calendar1} alt="img" />
        </div>
        <div class="calendar-header-calendar">
          <div id="calendar"></div>
        </div>
      </div>
      <div class="calendar-header-text-desc-ctn">
        <p class="calendar-header-text-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, repellat magni at eos sint ut fuga nemo, quaerat maxime id, numquam illo natus tempore corporis hic perspiciatis voluptatibus ipsa similique suscipit dolore sunt non architecto. Nisi cum ducimus ut incidunt ratione iure, in harum ex repellat!</p>
      </div>
    </section>
  )
};

export default HeaderCalendar;
