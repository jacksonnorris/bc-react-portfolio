import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer'

const pages = ['Home', 'About', 'Portfolio', 'Contact'];

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
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <h3 className='nav nav-name'>Jack</h3>
        <NavTabs pages={pages} currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <div className="bodyContent min-100-vh">
        {renderPage()}
      </div>
      <footer><Footer /></footer>
    </div>
  );
}
