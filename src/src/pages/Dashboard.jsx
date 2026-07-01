import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import '../css/dashboard.css';

const Dashboard = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    // Fetch all quotes from Firebase
    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'quotes'));
                const quotesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setQuotes(quotesData);
            } catch (error) {
                console.error('Error fetching quotes:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchQuotes();
    }, []);

    // Update status
    const updateStatus = async (id, newStatus) => {
        try {
            const quoteRef = doc(db, 'quotes', id);
            await updateDoc(quoteRef, { status: newStatus });
            setQuotes(quotes.map(q => q.id === id ? { ...q, status: newStatus } : q));
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    // Delete a quote
    const deleteQuote = async (id) => {
        if (window.confirm('Are you sure you want to delete this request?')) {
            try {
                await deleteDoc(doc(db, 'quotes', id));
                setQuotes(quotes.filter(q => q.id !== id));
            } catch (error) {
                console.error('Error deleting quote:', error);
            }
        }
    };

    // Filter quotes
    const filteredQuotes = filter === 'all' 
        ? quotes 
        : quotes.filter(q => q.status === filter);

    // Calculate stats
    const total = quotes.length;
    const pending = quotes.filter(q => q.status === 'pending').length;
    const contacted = quotes.filter(q => q.status === 'contacted').length;
    const completed = quotes.filter(q => q.status === 'completed').length;

    if (loading) return <div className="dashboard-loading">Loading...</div>;

    return (
        <section className="dashboard">
            <h1>📊 Admin Dashboard</h1>

            {/* Stats */}
            <div className="stats">
                <div className="stat-card">
                    <span className="stat-number">{total}</span>
                    <span className="stat-label">Total</span>
                </div>
                <div className="stat-card pending">
                    <span className="stat-number">{pending}</span>
                    <span className="stat-label">Pending</span>
                </div>
                <div className="stat-card contacted">
                    <span className="stat-number">{contacted}</span>
                    <span className="stat-label">Contacted</span>
                </div>
                <div className="stat-card completed">
                    <span className="stat-number">{completed}</span>
                    <span className="stat-label">Completed</span>
                </div>
            </div>

            {/* Filter */}
            <div className="filter-bar">
                <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
                <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>Pending</button>
                <button onClick={() => setFilter('contacted')} className={filter === 'contacted' ? 'active' : ''}>Contacted</button>
                <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
            </div>

            {/* Table */}
            <div className="table-container">
                {filteredQuotes.length === 0 ? (
                    <p className="no-data">No quote requests found.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>From → To</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredQuotes.map((q) => (
                                <tr key={q.id}>
                                    <td>{q.name}</td>
                                    <td>{q.phone}</td>
                                    <td>{q.from_address} → {q.to_address}</td>
                                    <td>{q.moving_date}</td>
                                    <td>
                                        <span className={`status-badge status-${q.status || 'pending'}`}>
                                            {q.status || 'pending'}
                                        </span>
                                    </td>
                                    <td>
                                        {q.status !== 'contacted' && (
                                            <button 
                                                className="btn-contact" 
                                                onClick={() => updateStatus(q.id, 'contacted')}
                                            >
                                                Contact
                                            </button>
                                        )}
                                        {q.status !== 'completed' && (
                                            <button 
                                                className="btn-complete" 
                                                onClick={() => updateStatus(q.id, 'completed')}
                                            >
                                                Complete
                                            </button>
                                        )}
                                        <button 
                                            className="btn-delete" 
                                            onClick={() => deleteQuote(q.id)}
                                        >
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
};

export default Dashboard;
