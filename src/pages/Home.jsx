import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/packed-truck.jpg';
import '../css/home.css';

const Home = () => {
    return (
        <>
            <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1 className="hero-title">Find Homes. Move Smart. Live Better.</h1>
                        <p className="hero-subtitle">
                            House Moving • Vehicle Transport • Office Relocation • Packaging • Cleaning
                        </p>
                        <div className="hero-buttons">
                            <Link to="/quote" className="btn btn-primary">
                                Get Free Quote
                            </Link>
                            <a href="https://wa.me/+254114161000" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                                💬 WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;