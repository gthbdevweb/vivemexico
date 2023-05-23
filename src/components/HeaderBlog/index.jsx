import React, { useState, useEffect, useContext} from 'react';  
import { Context } from '../../Context';
import dataEs from '../../assets/data/blog/es/index.json';
import dataEn from '../../assets/data/blog/en/index.json';
import dataDe from '../../assets/data/blog/de/index.json';
import dataFr from '../../assets/data/blog/fr/index.json';
import dataJp from '../../assets/data/blog/jp/index.json';
import dataPt from '../../assets/data/blog/pt/index.json';
import './style.css';

const HeaderBlog = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : isLanguage === 'DE' ? setLanguage(dataDe)
    : isLanguage === 'FR' ? setLanguage(dataFr)
    : isLanguage === 'JP' ? setLanguage(dataJp)
    : isLanguage === 'PT' ? setLanguage(dataPt)
    : setLanguage(dataEs);
  }, [isLanguage]);

  return (
    <section className="blog-title-ctn">
      <h1 className="blog-title-text-title">{language?.title} </h1>
    </section>
  )
};

export default HeaderBlog;
