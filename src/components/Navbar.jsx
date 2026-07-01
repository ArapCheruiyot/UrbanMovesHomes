import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/logo.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav>
                <div className="logo">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img src={logo} alt="Urban MoveHomes" className="logo-image" />
                    </Link>
                </div>

                {/* Hamburger Icon */}
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation Links */}
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li>
                        <Link to="/" onClick={() => setMenuOpen(false)} style={{ fontWeight: isActive('/') ? 'bold' : 'normal' }}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setMenuOpen(false)} style={{ fontWeight: isActive('/about') ? 'bold' : 'normal' }}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={() => setMenuOpen(false)} style={{ fontWeight: isActive('/services') ? 'bold' : 'normal' }}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/quote" onClick={() => setMenuOpen(false)} style={{ fontWeight: isActive('/quote') ? 'bold' : 'normal' }}>
                            Get a Quote
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ fontWeight: isActive('/contact') ? 'bold' : 'normal' }}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" onClick={() => setMenuOpen(false)} style={{ fontWeight: isActive('/dashboard') ? 'bold' : 'normal' }}>
                            📊 Dashboard
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
