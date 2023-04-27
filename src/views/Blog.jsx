import React from 'react';
import HeaderBlog from '../components/HeaderBlog';
import BlogContent from '../components/Blog';
import './style.css';

const Blog = () => {
  return (
    <div className="main-content">
      <HeaderBlog />
      <BlogContent />
    </div>
  )
};

export default Blog;
