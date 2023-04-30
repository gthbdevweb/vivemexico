import React from 'react';
import Calendar1 from '../../assets/img/calendar/slide1.webp';
import Calendar2 from '../../assets/img/calendar/slide2.jpg';
import './style.css';

const ImagesCalendar = () => {
  return (
    <section className="calendar-images-ctn">
      <div className="caldendar-images-card-ctn">
        <img className="calendar-images-card-img" src={Calendar1} alt="image" />
        <h5 className="calendar-images-card-text-title">Heading</h5>
        <p className="calendar-images-card-text-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga tempore dignissimos autem tempora illum veritatis natus!</p>
      </div>
      <div className="caldendar-images-card-ctn">
        <img className="calendar-images-card-img" src={Calendar2} alt="image" />
        <h5 className="calendar-images-card-text-title">Heading</h5>
        <p className="calendar-images-card-text-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga tempore dignissimos autem tempora illum veritatis natus!</p>
      </div>
      <div className="caldendar-images-card-ctn">
        <img className="calendar-images-card-img" src={Calendar1} alt="image" />
        <h5 className="calendar-images-card-text-title">Heading</h5>
        <p className="calendar-images-card-text-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga tempore dignissimos autem tempora illum veritatis natus!</p>
      </div>
    </section>
  )
};

export default ImagesCalendar;
