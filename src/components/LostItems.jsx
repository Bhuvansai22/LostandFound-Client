import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard';

import API_URL from '../config';

const LostItems = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`${API_URL}/items/lost`);
                setItems(response.data);
                setFilteredItems(response.data);
            } catch (error) {
                console.error('Error fetching lost items:', error);
            }
        };

        fetchItems();
    }, []);

    useEffect(() => {
        const searchLower = searchTerm.toLowerCase().trim();
        if (searchLower === '') {
            setFilteredItems(items);
        } else {
            const filtered = items.filter(item =>
                (item.title && item.title.toLowerCase().includes(searchLower)) ||
                (item.location && item.location.toLowerCase().includes(searchLower)) ||
                (item.description && item.description.toLowerCase().includes(searchLower)) ||
                (item.name && item.name.toLowerCase().includes(searchLower))
            );
            setFilteredItems(filtered);
        }
    }, [searchTerm, items]);

    return (
        <section id="Lost-items">
            <h2 id="losthead">
                <span>Lost Items</span>
            </h2>
            <div className="lost-cont">
                <div className="search-bar">
                    <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '16px' }}>
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search by item, location, or reporter..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                border: 'none',
                                outline: 'none',
                                background: 'transparent',
                                width: '100%',
                                fontSize: '15px',
                                padding: '12px 16px',
                                color: '#333'
                            }}
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                style={{
                                    border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    padding: '5px',
                                    marginRight: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#999'
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <button className="lost-item" id="lost-btn1" type="submit"
                onClick={() => {
                    navigate('/report-lost');
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
            >
                Report Lost <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
            </button>

            <div id="cards" className="cards">
                {filteredItems.length > 0 ? (
                    filteredItems.map(item => (
                        <ItemCard key={item._id} item={item} isLost={true} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', width: '100%', padding: '20px' }}>
                        {searchTerm ? 'No items found matching your search.' : 'No lost items reported yet.'}
                    </p>
                )}
            </div>
        </section>
    );
};

export default LostItems;
