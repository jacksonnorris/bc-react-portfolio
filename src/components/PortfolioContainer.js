import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './Footer'

const pages = ['Home', 'About', 'Blog', 'Contact'];

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    // console.log('current', currentPage)
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <span className='nav nav-tabs'>Jack Norris</span>
        <NavTabs pages={pages} currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {renderPage()}
      <footer><Footer /></footer>
    </div>
  );
}
