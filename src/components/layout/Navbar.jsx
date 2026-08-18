import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import Logo from "./Logo";
import Container from "../common/Container";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Container>
        <div className="navbar-content">
          <Logo />

          <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/categories" onClick={closeMenu}>
              Categories
            </NavLink>

            <NavLink to="/glossary" onClick={closeMenu}>
              Glossary
            </NavLink>

            <NavLink to="/search" onClick={closeMenu}>
              Search
            </NavLink>
            
            <NavLink to="/favorites" onClick={closeMenu}>
              Favorites
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </nav>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;