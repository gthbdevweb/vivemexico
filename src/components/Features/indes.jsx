import React, { useState, useEffect, useContext}  from 'react';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
import dataEs from '../../assets/data/blog/es/index.json';
import dataEn from '../../assets/data/blog/en/index.json';
import './style.css';

const Features = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  const languageSort = language?.blogs?.sort(function(a, b){return b.id - a.id});
  const tasks = languageSort?.filter((task, index) => index <= 1 );

  const getBlogs = () => (
    tasks?.map((blog, index) => (
      <div className="features-collapse-ctn" key={index}>
        <div className="features-collapse-btn-ctn">
          <button className="btn btn-primary features-collapse-btn" type="button" data-bs-toggle="collapse" data-bs-target={`#featuresCollapse${blog.id}`} aria-expanded="false" aria-controls={`featuresCollapse${blog.id}`}>
            +
          </button>
          <div className="features-collapse-desc-ctn">
            <p className="features-collapse-desc">{blog.title}</p>
          </div>
        </div>
        <div className="collapse features-collapse-body-ctn" id={`featuresCollapse${blog.id}`}>
          <div className="card card-body">
            <p>{blog.shortDescription}</p>
            <Link to={blog.actions.button.dir}>
              <button type="button" className="btn btn-outline-primary class-buton-features">{blog.actions.button.text}</button>
            </Link>
          </div>
        </div>
      </div>
    ))
  );

  return (
    <section className="features-ctn">
      <h2 className="features-text-title">{language?.title}</h2>
      {getBlogs()}
    </section>
  )
};

export default Features;
