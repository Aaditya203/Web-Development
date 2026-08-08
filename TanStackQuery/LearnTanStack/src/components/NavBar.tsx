import { NavLink } from 'react-router-dom';
import './NavBar.css';

export function NavBar() {
  return (
    <nav className="navbar" id="main-navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand" id="navbar-brand-logo">
          <span className="navbar-brand-accent">Aditya</span>Repo
        </NavLink>
        
        <div className="nav-links-wrapper">
          <ul className="nav-links" id="navbar-menu-links">
            <li>
              <NavLink 
                to="/" 
                end
                className="nav-link"
                id="nav-link-home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/old" 
                className="nav-link"
                id="nav-link-old"
              >
                FetchOld
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/rq" 
                className="nav-link"
                id="nav-link-rq"
              >
                FetchRq
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
