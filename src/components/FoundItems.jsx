import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard';

import API_URL from '../config';

const FoundItems = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`${API_URL}/items/found`);
                setItems(response.data);
                setFilteredItems(response.data);
            } catch (error) {
                console.error('Error fetching found items:', error);
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
        <section id="found-items-section">
            <h2 className="foundhead">
                <span>Found Items</span>
            </h2>
            <div className="found-cont">
                <div className="search-bar">
                    <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '20px', marginLeft: '16px' }}>🔍</span>
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
            <button className="found-item-btn" id="found-item-btn" type="submit"
                onClick={() => {
                    navigate('/report-found');
                }}
            >
                Report Found 📝
            </button>

            <div id="found-cards" className="cards">
                {filteredItems.length > 0 ? (
                    filteredItems.map(item => (
                        <ItemCard key={item._id} item={item} isLost={false} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', width: '100%', padding: '20px' }}>
                        {searchTerm ? 'No items found matching your search.' : 'No found items reported yet.'}
                    </p>
                )}
            </div>
        </section>
    );
};

export default FoundItems;
