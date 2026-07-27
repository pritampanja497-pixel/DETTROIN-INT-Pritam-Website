import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-logo-mark">K</span>

          <span className="navbar-logo-text">
            Krishna
            <small>International School</small>
          </span>
        </Link>

        {}
        <nav className="desktop-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </nav>

        {}
        <Link to="/contact" className="navbar-cta">
          Apply Now
          <ArrowRight size={16} />
        </Link>

        {}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {}
      <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
        <nav className="mobile-nav">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
          >
            Contact
          </NavLink>

          <Link to="/contact" className="mobile-nav-cta" onClick={closeMenu}>
            Apply for Admission
            <ArrowRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
