import React, { useState, useEffect, useContext} from 'react';  
import { Context } from '../../Context';
import dataEs from '../../assets/data/events/es/index.json';
import dataEn from '../../assets/data/events/en/index.json';
import './style.css';

const HeaderEvents = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs);
  }, [isLanguage]);

  const languageSort = language?.videos?.sort(function(a, b){return b.id - a.id});
  const getVideoTop = languageSort?.map((video, index) => index === 0 && video);

  return (
    <section className="eventos-header-ctn">
      <h1 className="eventos-header-text-title">{language?.title}</h1>
      <div className="eventos-header-video-ctn">
        <iframe
          width="100%"
          height="100%"
          src={getVideoTop?.[0]?.urlVideo}
          title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
          frameBorder="1"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading='lazy'
        />
      </div>
      <p className="eventos-header-text-desc">{language?.description}</p>
    </section>
  )
};

export default HeaderEvents;
