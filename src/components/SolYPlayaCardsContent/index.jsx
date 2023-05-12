import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/solYPlaya/es/index.json';
import dataEn from '../../assets/data/solYPlaya/en/index.json';
import './style.css';

const SolYPlayaCardsContent = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="sol-y-playa-cards-content-ctn">
      <div className="sol-y-playa-cards-content-card-ctn">
        {language?.cards?.map((card, index) => <div className="sol-y-playa-cards-content-card" key={`sol-y-playa-${index}`}>
          <LazyLoadImage
            className="sol-y-playa-content-card-img"
            src={require(`../../assets/img/description/${card.urlImg}`)} 
            alt={card?.title}
          />
          <p className="sol-y-playa-content-card-text">{card.title}</p>
        </div>)}
      </div>
    </section>
  )
};

export default SolYPlayaCardsContent;
