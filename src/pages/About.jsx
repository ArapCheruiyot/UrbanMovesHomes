import React from 'react';
import '../css/about.css';

const About = () => {
    return (
        <section className="about-page">
            <div className="about-header">
                <h1>About Urban MoveHomes</h1>
                <p>We make moving simple, safe, and stress-free.</p>
            </div>

            <div className="about-content">
                <div className="about-story">
                    <h2>Our Story</h2>
                    <p>
                        Urban MoveHomes was founded with a simple vision — to help people and businesses relocate 
                        with ease and confidence. We understand that moving can be overwhelming, which is why we 
                        are committed to providing reliable, professional, and affordable moving services.
                    </p>
                    <p>
                        From households to offices, vehicles to packaging, we handle every aspect of your move 
                        with care and precision. Our team is trained to ensure your belongings arrive safely 
                        and on time.
                    </p>
                </div>

                <div className="about-mission">
                    <h2>Our Mission</h2>
                    <p>
                        To deliver stress-free moving solutions that exceed our customers' expectations — 
                        through professionalism, integrity, and a commitment to quality service.
                    </p>
                </div>

                <div className="about-values">
                    <h2>Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <span className="value-icon">🤝</span>
                            <h3>Reliability</h3>
                            <p>We show up on time and deliver on our promises.</p>
                        </div>
                        <div className="value-card">
                            <span className="value-icon">🛡️</span>
                            <h3>Safety</h3>
                            <p>Your belongings are handled with the utmost care and protection.</p>
                        </div>
                        <div className="value-card">
                            <span className="value-icon">💬</span>
                            <h3>Transparency</h3>
                            <p>Clear communication and honest pricing — no hidden fees.</p>
                        </div>
                        <div className="value-card">
                            <span className="value-icon">❤️</span>
                            <h3>Customer First</h3>
                            <p>Your satisfaction is our priority from start to finish.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;