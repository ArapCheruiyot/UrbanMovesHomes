import React, { useState } from 'react';
import '../css/quote.css';

const Quote = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        moving_date: '',
        from_address: '',
        to_address: '',
        description: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just log the data (we will connect to Formspree later)
        console.log('Quote request:', formData);
        setSubmitted(true);
        setFormData({
            name: '',
            phone: '',
            email: '',
            moving_date: '',
            from_address: '',
            to_address: '',
            description: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
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

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
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

                <input
                    type="text"
                    name="from_address"
                    placeholder="From Address *"
                    value={formData.from_address}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="to_address"
                    placeholder="To Address *"
                    value={formData.to_address}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    rows="4"
                    placeholder="Brief Description (e.g., 3-bedroom house, sofa, fridge, 5 boxes)"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Send Quote Request</button>
            </form>

            <p className="quote-footer">
                📞 Need a faster response? WhatsApp us at <strong>+254114161000</strong>
            </p>
        </section>
    );
};

export default Quote;