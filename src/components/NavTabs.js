import React from 'react';
import NavItem from './NavItem'

// TODO: Add a comment explaining how we are able to extract the key value pairs from props


function NavTabs({ pages, currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      {pages.map(page => <NavItem key={page} currentPage={currentPage} handlePageChange={handlePageChange} page={page} />)}
    </ul>
  );
}

export default NavTabs;
