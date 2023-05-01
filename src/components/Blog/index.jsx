import React, { useState, useEffect, useContext} from 'react';  
import { Context } from '../../Context';
import Share from '../Share';
import dataEs from '../../assets/data/blog/es/index.json';
import dataEn from '../../assets/data/blog/en/index.json';
import './style.css';

const Blog = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs);
  }, [isLanguage]);

  const languageSort = language?.blogs?.sort(function(a, b){return b.id - a.id});

  const listBlogs = () => (
    languageSort?.map((blog, index) => (
      <div className="blog-item-ctn" key={index}>
        <img
          className="blog-item-img"
          src={require(`../../assets/img/blog/${blog?.urlImg}`)}
          alt={blog?.title}
        />
        <h2 className="blog-item-text-title">{blog?.title} </h2>
        <p className="blog-item-text-desc">{blog?.description} </p>
        <Share 
          urlFaceboock = "https://visitmexico.com/"
          urlPinterest = "https://visitmexico.com/"
          urlTwitter = "https://visitmexico.com/"
          urlWhatsapp = "https://visitmexico.com/"
        />
      </div>
    ))
  );

  return (
    <section className="blog-ctn sliceLeft">
      {listBlogs()}
    </section>
  )
};

export default Blog;
