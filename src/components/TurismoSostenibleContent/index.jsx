import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/turismoSostenible/es/index.json';
import dataEn from '../../assets/data/turismoSostenible/en/index.json';
import Share from '../Share';
import './style.css';

const TurismoSostenibleContent = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="turismo-sostenible-content-ctn">
      <div className="turismo-sostenible-content-ctn-text">
        <h1 className="turismo-sostenible-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => <p className="turismo-sostenible-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <div className="turismo-sostenible-content-ctn-img">
        <LazyLoadImage
          className="turismo-sostenible-content-img"
          src={require(`../../assets/img/description/NAY_sanblas_playas_98.webp`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/turismosostenible/"
        urlPinterest = "https://visitmexico.com/turismosostenible/"
        urlTwitter = "https://visitmexico.com/turismosostenible/"
        urlWhatsapp = "https://visitmexico.com/turismosostenible/"
      />
    </section>
  )
};

export default TurismoSostenibleContent;
