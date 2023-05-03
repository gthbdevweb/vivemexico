import React, { useState } from 'react';
import Calendar from 'react-calendar-events-full-year'
import { tempEvents } from '../../assets/data/calendar/data';
import Calendar1 from '../../assets/img/calendar/slide1.webp';
import './style.css';

const HeaderCalendar = () => {
  const [calendarEvents, setEvents] = useState(tempEvents.map(d => ({...d, from: new Date(d.from), to: new Date(d.to)})));

  return (
    <section className="calendar-header-ctn">
      <div className="calendar-header-text-ctn">
        <h1 className="calendar-header-text-title">Headline</h1>
        <h3 className="calendar-header-text-subtitle">Subheading</h3>
      </div>
      <div className="calendar-header-calendar-ctn">
        <div className="calendar-header-calendar-img-ctn">
          <img className="calendar-header-calendar-img" src={Calendar1} alt="img" />
        </div>
        <div className="calendar-header-calendar">
          {/*<div id="calendar"></div>*/}
          <Calendar calendarEvents={calendarEvents} monthView={true}/>
        </div>
      </div>
      <div className="calendar-header-text-desc-ctn">
        <p className="calendar-header-text-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, repellat magni at eos sint ut fuga nemo, quaerat maxime id, numquam illo natus tempore corporis hic perspiciatis voluptatibus ipsa similique suscipit dolore sunt non architecto. Nisi cum ducimus ut incidunt ratione iure, in harum ex repellat!</p>
      </div>
    </section>
  )
};

export default HeaderCalendar;
