import React from 'react';

const ItemCard = ({ item, isLost }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;

        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
        <div className="glass-card" style={{
            padding: '24px',
            margin: '20px',
            width: '320px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        }}>

            {/* Header: Type and Date */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: isLost ? '#FF6B6B' : '#4ECDC4',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    background: isLost ? 'rgba(255, 107, 107, 0.1)' : 'rgba(78, 205, 196, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '20px'
                }}>
                    {isLost ? 'Lost Item' : 'Found Item'}
                </span>
                <span style={{ fontSize: '13px', color: '#888', fontWeight: '500' }}>
                    {formatDate(item.date)}
                </span>
            </div>

            {/* Item Title */}
            <div>
                <h3 style={{
                    fontSize: '20px',
                    fontWeight: '800',
                    color: '#2D3436',
                    marginBottom: '4px',
                    lineHeight: '1.2'
                }}>
                    {item.title}
                </h3>
                <div style={{ fontSize: '14px', color: '#636E72', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>📍</span> {item.location}
                </div>
            </div>

            {/* Description Box */}
            <div style={{
                background: '#F7F9FC',
                borderRadius: '16px',
                padding: '16px',
                fontSize: '14px',
                color: '#555',
                lineHeight: '1.5',
                minHeight: '80px'
            }}>
                <div style={{ fontSize: '11px', color: '#AAA', textTransform: 'uppercase', fontWeight: '700', marginBottom: '4px' }}>
                    Description
                </div>
                {item.description}
            </div>

            {/* Reporter Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#EEE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    color: '#555',
                    fontSize: '14px'
                }}>
                    {item.name ? item.name.charAt(0).toUpperCase() : '?'}
                </div>
                <div style={{ fontSize: '14px', color: '#333', fontWeight: '600' }}>
                    {item.name}
                </div>
            </div>

            {/* Contact Button */}
            <button style={{
                width: '100%',
                padding: '16px',
                border: 'none',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                marginTop: 'auto',
                boxShadow: '0 10px 20px rgba(63, 43, 150, 0.2)',
                transition: 'all 0.3s ease'
            }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(63, 43, 150, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(63, 43, 150, 0.2)';
                }}
                onClick={() => alert(`Contact Info: ${item.contact}`)}
            >
                Contact
            </button>
        </div>
    );
};

export default ItemCard;
