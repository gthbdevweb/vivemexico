import React, { useState, useEffect, useContext} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/towns/es/index.json';
import dataEn from '../../assets/data/towns/en/index.json';
import './style.css';

const BottomTowns = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
  isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  }, [isLanguage]);

  return (
    <section className="towns-bottom-ctn">
      <div className="towns-bottom-img-ctn">
        <img
         className="towns-bottom-img"
         src={require(`../../assets/img/towns/slide1.webp`)}
         alt={language?.title}
       />
      </div>
      <div className="towns-bottom-text-ctn">
        <h3 className="towns-bottom-text-title">{language?.title}</h3>
        <p className="towns-bottom-text-desc">{language?.descriptionTop}</p>
      </div>
    </section>
  )
};

export default BottomTowns;
