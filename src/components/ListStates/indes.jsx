import React, { useState, useEffect, useContext} from 'react';
import { Context } from '../../Context';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import dataEs from '../../assets/data/states/es/index.json';
import dataEn from '../../assets/data/states/en/index.json';
import './style.css';

const Liststates = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  const listStates = () => (
    language?.states?.map((state, index) => (
      <li className="states-card-ctn" key={index}>
        <Link to={`${state.dir}/${state.id}`}>
          <LazyLoadImage
            className="states-card-img"
            src={require(`../../assets/img/states/${state.urlImg}`)}
            alt={state.titleTop}
          />
          <h5 className="states-card-text-title">{state.titleTop}</h5>
          <p className="states-card-text-desc">{state.descriptionShort}</p>
          <div className="states-card-back">
            <p className="states-card-back-desc">{state.desciptionHover}</p>
          </div>
        </Link>
      </li>
    ))
  );


  return (
    <section className="states-list-ctn sliceLeft">
      <ul className="states-list-cards-ctn">
        {listStates()}
      </ul>
    </section>
  )
};

export default Liststates;
