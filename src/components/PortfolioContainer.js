import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer'

const pages = ['About', 'Portfolio', 'Contact', 'Resume'];

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    // console.log('current', currentPage)
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <h3 className='nav nav-name'>Jack Norris</h3>
        <NavTabs pages={pages} currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <div className="bodyContent">
        {renderPage()}
      </div>
      <footer><Footer /></footer>
    </div>
  );
}
