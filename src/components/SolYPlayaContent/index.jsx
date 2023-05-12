import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/solYPlaya/es/index.json';
import dataEn from '../../assets/data/solYPlaya/en/index.json';
import Share from '../Share';
import './style.css';

const SolYPlayaContent = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="sol-y-playa-content-ctn">
      <div className="sol-y-playa-content-ctn-text">
        <h1 className="sol-y-playa-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => <p className="sol-y-playa-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <div className="sol-y-playa-content-ctn-img">
        <LazyLoadImage
          className="sol-y-playa-content-img"
          src={require(`../../assets/img/description/NAY_sanblas_playas_98.webp`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/solyplaya/"
        urlPinterest = "https://visitmexico.com/solyplaya/"
        urlTwitter = "https://visitmexico.com/solyplaya/"
        urlWhatsapp = "https://visitmexico.com/solyplaya/"
      />
    </section>
  )
};

export default SolYPlayaContent;
