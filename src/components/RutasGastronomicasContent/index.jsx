import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/rutasGastronomicas/es/index.json';
import dataEn from '../../assets/data/rutasGastronomicas/en/index.json';
import Share from '../Share';
import './style.css';

const RutasGastronomicasContent = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="rutas-gastronomicas-content-ctn">
      <div className="rutas-gastronomicas-content-ctn-text">
      <h1 className="rutas-gastronomicas-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => <p className="rutas-gastronomicas-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <div className="rutas-gastronomicas-content-ctn-img">
        <LazyLoadImage
          className="rutas-gastronomicas-content-img"
          src={require(`../../assets/img/description/NAY_sanblas_playas_98.webp`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/rutasgastronomicas/"
        urlPinterest = "https://visitmexico.com/rutasgastronomicas/"
        urlTwitter = "https://visitmexico.com/rutasgastronomicas/"
        urlWhatsapp = "https://visitmexico.com/rutasgastronomicas/"
      />
    </section>
  )
};

export default RutasGastronomicasContent;
