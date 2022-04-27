import React from 'react';
import NavItem from './NavItem'

function NavTabs({ pages, currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      {pages.map(page => <NavItem key={page} currentPage={currentPage} handlePageChange={handlePageChange} page={page} />)}
    </ul>
  );
}

export default NavTabs;
