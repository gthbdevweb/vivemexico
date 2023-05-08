import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/description/es/index.json';
import dataEn from '../../assets/data/description/en/index.json';
import Share from '../Share';
import './style.css';

const Description = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="description-ctn">
      <div className="description-ctn-text">
        <h2 className="description-text-title">{language?.title}</h2>
        <p className="description-text-desc">{language?.description}</p>
        {/*<div className="description-ctn-badge">
          <p className="description-badge-text">{language?.actions?.button?.text}</p>
        </div>*/}
      </div>
      <div className="description-ctn-img">
        <LazyLoadImage
          className="description-img"
          src={require(`../../assets/img/description/slide2.jpg`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/"
        urlPinterest = "https://visitmexico.com/"
        urlTwitter = "https://visitmexico.com/"
        urlWhatsapp = "https://visitmexico.com/"
      />
    </section>
  )
};

export default Description;
