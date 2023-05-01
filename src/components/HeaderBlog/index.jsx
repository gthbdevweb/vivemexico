import React, { useState, useEffect, useContext} from 'react';  
import { Context } from '../../Context';
import dataEs from '../../assets/data/blog/es/index.json';
import dataEn from '../../assets/data/blog/en/index.json';
import './style.css';

const HeaderBlog = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs);
  }, [isLanguage]);

  return (
    <section className="blog-title-ctn">
      <h1 className="blog-title-text-title">{language?.title} </h1>
    </section>
  )
};

export default HeaderBlog;
