import React from 'react';
import HeaderBlog from '../components/HeaderBlog';
import BlogContent from '../components/Blog';
import Rss from '../components/Rss';
import './style.css';

const Blog = () => {
  return (
    <div className="main-content">
      <Rss />
      <HeaderBlog />
      <BlogContent />
    </div>
  )
};

export default Blog;
