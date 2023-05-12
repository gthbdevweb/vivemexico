import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/description/es/index.json';
import dataEn from '../../assets/data/description/en/index.json';
import Share from '../Share';
import './style.css';

const TrenMayaContent = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="tren-maya-content-ctn">
      <div className="tren-maya-content-ctn-text">
        <h2 className="tren-maya-content-text-title">Tren Maya</h2>
        <p className="tren-maya-content-text-desc">Próximamente</p>
      </div>
      <div className="tren-maya-content-ctn-img">
        <LazyLoadImage
          className="tren-maya-content-img"
          src={require(`../../assets/img/description/NAY_sanblas_playas_98.webp`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/trenmaya/"
        urlPinterest = "https://visitmexico.com/trenmaya/"
        urlTwitter = "https://visitmexico.com/trenmaya/"
        urlWhatsapp = "https://visitmexico.com/trenmaya/"
      />
    </section>
  )
};

export default TrenMayaContent;
