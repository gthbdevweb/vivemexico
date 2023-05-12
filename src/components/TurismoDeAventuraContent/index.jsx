import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/turismoDeAventura/es/index.json';
import dataEn from '../../assets/data/turismoDeAventura/en/index.json';
import Share from '../Share';
import './style.css';

const TurismoDeAventuraContent = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="turismo-de-aventura-content-ctn">
      <div className="turismo-de-aventura-content-ctn-text">
        <h1 className="turismo-de-aventura-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => <p className="turismo-de-aventura-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <div className="turismo-de-aventura-content-ctn-img">
        <LazyLoadImage
          className="turismo-de-aventura-content-img"
          src={require(`../../assets/img/description/NAY_sanblas_playas_98.webp`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/turismodeaventura/"
        urlPinterest = "https://visitmexico.com/turismodeaventura/"
        urlTwitter = "https://visitmexico.com/turismodeaventura/"
        urlWhatsapp = "https://visitmexico.com/turismodeaventura/"
      />
    </section>
  )
};

export default TurismoDeAventuraContent;
