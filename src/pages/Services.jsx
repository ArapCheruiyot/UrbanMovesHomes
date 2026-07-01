import React from 'react';
import houseMovingImage from '../assets/images/house-moving.jpg';
import vehicleTransportImage from '../assets/images/vehicle-transport.jpg';
import officeRelocationImage from '../assets/images/office-relocation.jpg';
import packagingImage from '../assets/images/packaging.jpg';
import cleaningImage from '../assets/images/cleaning.jpg';
import '../css/services.css';

const Services = () => {
    return (
        <section className="services-page">
            <h1 className="services-title">Our Services</h1>
            <p className="services-subtitle">
                We offer reliable and professional moving solutions tailored to your needs.
            </p>

            <div className="services-list">
                <div className="service-item">
                    <img src={houseMovingImage} alt="House moving services" className="service-image" />
                    <div className="service-content">
                        <h3>🏠 House Moving</h3>
                        <p>We handle your household belongings with care — from packing to unpacking. Our team ensures your items arrive safely at your new home.</p>
                    </div>
                </div>

                <div className="service-item">
                    <img src={vehicleTransportImage} alt="Vehicle transport services" className="service-image" />
                    <div className="service-content">
                        <h3>🚗 Vehicle Transport</h3>
                        <p>We transport your cars, bikes, and other vehicles safely and securely to any destination across the country.</p>
                    </div>
                </div>

                <div className="service-item">
                    <img src={officeRelocationImage} alt="Office relocation services" className="service-image" />
                    <div className="service-content">
                        <h3>🏢 Office Relocation</h3>
                        <p>Minimize downtime with our professional office moving services. We handle furniture, equipment, and documents with care.</p>
                    </div>
                </div>

                <div className="service-item">
                    <img src={packagingImage} alt="Packaging services" className="service-image" />
                    <div className="service-content">
                        <h3>📦 Packaging</h3>
                        <p>We provide high-quality packing materials and professional packing services to keep your items safe during transit.</p>
                    </div>
                </div>

                <div className="service-item">
                    <img src={cleaningImage} alt="Cleaning services" className="service-image" />
                    <div className="service-content">
                        <h3>🧹 Cleaning</h3>
                        <p>We offer post-move cleaning services for your old or new home — making your move stress-free from start to finish.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;