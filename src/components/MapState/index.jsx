import React, { useState, useEffect, useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import Share from '../Share';
import dataEs from '../../assets/data/states/es/index.json';
import dataEn from '../../assets/data/states/en/index.json';
import dataFr from '../../assets/data/states/fr/index.json';
import dataDe from '../../assets/data/states/de/index.json';
import dataJp from '../../assets/data/states/jp/index.json';
import './style.css';

const MapState = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = language?.states?.filter(state => state.id === stateId);
  const data = getStateInfo?.[0];

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : isLanguage === 'FR' ? setLanguage(dataFr)
    : isLanguage === 'DE' ? setLanguage(dataDe)
    : isLanguage === 'JP' ? setLanguage(dataJp)
    : setLanguage(dataEs);
  }, [isLanguage]);

  console.log('stateId: ', stateId)

  const getList = () => (
    data?.descriptionBottom?.map((item, index) => (
      <li key={index}>
        {item?.text}
      </li>
    ))
  )

  return (
    <section className="state-map-ctn revealTop">
      <div className="state-map-view-ctn">
        <iframe
          src={data?.urlMap}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="state-map-desc-ctn">
        <h3 className="state-map-desc-text-title">{data?.titleBottom}</h3>
        <ul className="state-map-desc-text-desc">
          {getList()}
        </ul>
        <Share
          urlFaceboock = {`https://visitmexico.com/estado/${stateId}/`}
          urlPinterest = {`https://visitmexico.com/estado/${stateId}/`}
          urlTwitter = {`https://visitmexico.com/estado/${stateId}/`}
          urlWhatsapp = {`https://visitmexico.com/estado/${stateId}/`}
        />
      </div>
    </section>
  )
};

export default MapState;
