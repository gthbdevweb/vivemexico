import React, { useState, useEffect, useContext} from 'react';
import { Context } from '../../Context';
import dataEs from '../../assets/data/towns/es/index.json';
import dataEn from '../../assets/data/towns/en/index.json';
import './style.css';

const Benefits = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});
  const [show, setShow] = useState(false);
  const [languajeLimit, setLanguageLimit] = useState();

  const shortTowns = (data) => {
    const languageSort = data?.towns?.sort(function(a, b){return b.id - a.id});
    const deletedTowns = languageSort?.slice(0, 4);
    setLanguageLimit(deletedTowns)
  };

  const largeTowns = (data) => {
    const languageSort = data?.towns?.sort(function(a, b){return b.id - a.id});
    setLanguageLimit(languageSort)
  };

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
      : isLanguage === 'USA' ? setLanguage(dataEn)
      : setLanguage(dataEs);

    
  }, [isLanguage]);

  useEffect(() => {
    show ? largeTowns(language) : shortTowns(language)
  }, [show]);

  useEffect(() => {
    language?.towns && shortTowns(language)
  }, [language]);

  const getTowns = () => (
    languajeLimit?.map((town, index) => (
      <div className="towns-benefits-card-ctn" key={index}>
        <img
          className="towns-benefits-card-img"
          src={require(`../../assets/img/towns/${town.urlImg}`)}
          alt={town.title}
        />
        <h4 className="towns-benefits-card-text-title">{town.title}</h4>
      </div>
    ))
  );

  const showMore = () => {
    setShow(!show)
  };

  return (
    <section className="towns-benefits-ctn">
      <h2 className="towns-benefits-text-title">{language?.subtitle}</h2>
      <div className="towns-benefits-cards-ctn">
        {getTowns()}
      </div>
      <button
        type="button"
        className="btn btn-primary towns-benefits-card-btn"
        onClick={showMore}
      > 
      {show ? language?.textShowLess : language?.texShowMore}
      </button>
    </section>
  )
};

export default Benefits;
