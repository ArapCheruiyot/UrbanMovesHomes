import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../css/quote.css';

const Quote = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        moving_date: '',
        from_address: '',
        from_lat: '',
        from_lng: '',
        to_address: '',
        to_lat: '',
        to_lng: '',
        description: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Get current location for "From" address
    const getFromLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setFormData({
                        ...formData,
                        from_lat: position.coords.latitude,
                        from_lng: position.coords.longitude
                    });
                    alert('Location captured successfully!');
                },
                (error) => {
                    alert('Unable to get location. Please enter your address manually.');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    // Get current location for "To" address
    const getToLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setFormData({
                        ...formData,
                        to_lat: position.coords.latitude,
                        to_lng: position.coords.longitude
                    });
                    alert('Location captured successfully!');
                },
                (error) => {
                    alert('Unable to get location. Please enter your address manually.');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await addDoc(collection(db, 'quotes'), {
                ...formData,
                submitted_at: new Date().toISOString(),
                status: 'pending'
            });

            setSubmitted(true);
            setFormData({
                name: '',
                phone: '',
                email: '',
                moving_date: '',
                from_address: '',
                from_lat: '',
                from_lng: '',
                to_address: '',
                to_lat: '',
                to_lng: '',
                description: ''
            });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            console.error('Firebase Error:', err);
            setError('Failed to submit quote. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="quote-page">
            <h2>Get a Free Quote</h2>
            <p className="quote-subtitle">
                Fill in your details and we will get back to you within 1 hour.
            </p>

            {submitted && (
                <div className="success-message">
                    ✅ Thank you! We will contact you within 24 hours.
                </div>
            )}

            {error && (
                <div className="error-message">
                    ❌ {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="date"
                    name="moving_date"
                    value={formData.moving_date}
                    onChange={handleChange}
                    required
                />

                {/* From Address */}
                <div className="location-group">
                    <input
                        type="text"
                        name="from_address"
                        placeholder="From Address *"
                        value={formData.from_address}
                        onChange={handleChange}
                        required
                    />
                    <button type="button" onClick={getFromLocation} className="locate-btn">
                        📍 Pin
                    </button>
                </div>

                {/* To Address */}
                <div className="location-group">
                    <input
                        type="text"
                        name="to_address"
                        placeholder="To Address *"
                        value={formData.to_address}
                        onChange={handleChange}
                        required
                    />
                    <button type="button" onClick={getToLocation} className="locate-btn">
                        📍 Pin
                    </button>
                </div>

                <textarea
                    name="description"
                    rows="4"
                    placeholder="Brief Description (e.g., 3-bedroom house, sofa, fridge, 5 boxes)"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Quote Request'}
                </button>
            </form>

            <p className="quote-footer">
                📞 Need a faster response? WhatsApp us at <strong>+254114161000</strong>
            </p>
        </section>
    );
};

export default Quote;