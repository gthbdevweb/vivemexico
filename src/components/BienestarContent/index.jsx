import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/bienestar/es/index.json';
import dataEn from '../../assets/data/bienestar/en/index.json';
import Share from '../Share';
import './style.css';

const BienestarContent = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="bienestar-content-ctn">
      <div className="bienestar-content-ctn-text">
        <h1 className="bienestar-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => <p className="bienestar-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <div className="bienestar-content-ctn-img">
        <LazyLoadImage
          className="bienestar-content-img"
          src={require(`../../assets/img/description/NAY_sanblas_playas_98.webp`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/bienestar/"
        urlPinterest = "https://visitmexico.com/bienestar/"
        urlTwitter = "https://visitmexico.com/bienestar/"
        urlWhatsapp = "https://visitmexico.com/bienestar/"
      />
    </section>
  )
};

export default BienestarContent;
