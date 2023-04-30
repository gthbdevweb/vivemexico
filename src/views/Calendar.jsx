import React from 'react';
import HeaderCalendar from '../components/HeaderCalendar';
import ImagesCalendar from '../components/ImagesCalendar';
import VideoCalendar from '../components/VideoCalendar';
import Rss from '../components/Rss';
import './style.css';

const Calendar = () => {
  return (
    <div className="main-content">
      <Rss />
      <HeaderCalendar />
      <ImagesCalendar />
      <VideoCalendar />
    </div>
  )
};

export default Calendar;
