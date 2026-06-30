import React from 'react';
import '../css/services.css';  // We will create this

const Services = () => {
    return (
        <section className="services-page">
            <h1 className="services-title">Our Services</h1>
            <p className="services-subtitle">We offer reliable and professional moving solutions tailored to your needs.</p>

            <div className="services-list">
                <div className="service-item">
                    <div className="service-icon">🏠</div>
                    <div className="service-content">
                        <h3>House Moving</h3>
                        <p>We handle your household belongings with care — from packing to unpacking. Our team ensures your items arrive safely at your new home.</p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-icon">🚗</div>
                    <div className="service-content">
                        <h3>Vehicle Transport</h3>
                        <p>We transport your cars, bikes, and other vehicles safely and securely to any destination across the country.</p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-icon">🏢</div>
                    <div className="service-content">
                        <h3>Office Relocation</h3>
                        <p>Minimize downtime with our professional office moving services. We handle furniture, equipment, and documents with care.</p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-icon">📦</div>
                    <div className="service-content">
                        <h3>Packaging</h3>
                        <p>We provide high-quality packing materials and professional packing services to keep your items safe during transit.</p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-icon">🧹</div>
                    <div className="service-content">
                        <h3>Cleaning</h3>
                        <p>We offer post-move cleaning services for your old or new home — making your move stress-free from start to finish.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;