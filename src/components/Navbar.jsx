import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/logo.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <header>
            <nav>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Urban MoveHomes" className="logo-image" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/" style={{ fontWeight: isActive('/') ? 'bold' : 'normal' }}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ fontWeight: isActive('/about') ? 'bold' : 'normal' }}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" style={{ fontWeight: isActive('/services') ? 'bold' : 'normal' }}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/quote" style={{ fontWeight: isActive('/quote') ? 'bold' : 'normal' }}>
                            Get a Quote
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{ fontWeight: isActive('/contact') ? 'bold' : 'normal' }}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" style={{ fontWeight: isActive('/dashboard') ? 'bold' : 'normal' }}>
                            📊 Dashboard
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
