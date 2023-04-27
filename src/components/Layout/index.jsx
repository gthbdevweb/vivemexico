import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Rss from '../Rss';

const Layout = ({ children }) => (
  <div>
    <Header />
    {/*<Rss />*/}
    {children}
    <Footer />
  </div>
);

export default Layout;
