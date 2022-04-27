const NavItem = ({ currentPage, handlePageChange, page }) => {
  return (
    <li className="nav-item">
      <a
        href={`#${page.toLowerCase()}`}
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
      >
        Home
      </a>
    </li>
  )
}

export default NavItem;