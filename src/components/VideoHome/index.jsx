import React, { useState, useEffect, useContext}  from 'react';
import { Context } from '../../Context';
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import dataEs from '../../assets/data/videoHome/es/index.json';
import dataEn from '../../assets/data/videoHome/en/index.json';
import './style.css';

const VideoHome = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="video-home-ctn">
      <h2 className="video-home-text-title">{language.title}</h2>
      <div className="video-home-vide-ctn">
        <iframe loading='lazy' width="100%" height="100%" src="https://www.youtube.com/embed/EjNe5EJ1cAQ?rel=0;&autoplay=1" title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México." frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className="video-home-share">
        <FacebookShareButton url="https://visitmexico.com/" className="video-home-share-btn">
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <PinterestShareButton url="https://visitmexico.com/" className="video-home-share-btn">
          <PinterestIcon size={32} round={true} />
        </PinterestShareButton>
        <TwitterShareButton url="https://visitmexico.com/" className="video-home-share-btn">
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton url="https://visitmexico.com/" className="video-home-share-btn">
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
      </div>
    </section>
  )
};

export default VideoHome;
