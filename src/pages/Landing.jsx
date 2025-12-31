import React from 'react';
import { useNavigate } from 'react-router-dom';
import pesceLogo from '../assets/pesce_logo.png';
import pesceBuilding from '../assets/pesce_building.png';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #F2F1EF 0%, #D9D2CC 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                zIndex: 0
            }} />

            {/* Main Content Card */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                padding: '60px 40px',
                borderRadius: '30px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                maxWidth: '600px',
                width: '100%',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px',
                animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
            }}>
                {/* Logo Section */}
                <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: '#fff',
                    padding: '10px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img
                        src={pesceLogo}
                        alt="PESCE Logo"
                        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                </div>

                {/* Text Content */}
                <div>
                    <h2 style={{
                        fontSize: '14px',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: '#666',
                        marginBottom: '10px',
                        fontWeight: '600'
                    }}>Welcome to</h2>
                    <h1 style={{
                        fontSize: '32px',
                        color: '#333',
                        fontWeight: '800',
                        marginBottom: '5px',
                        lineHeight: '1.2'
                    }}>PESCE</h1>
                    <h1 style={{
                        fontSize: '28px',
                        color: '#e74c3c', // Accent color
                        fontWeight: '700'
                    }}>Lost & Found</h1>
                </div>

                {/* Building Image */}
                <div style={{
                    width: '100%',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    border: '4px solid #fff'
                }}>
                    <img
                        src={pesceBuilding}
                        alt="PESCE College"
                        style={{
                            width: '100%',
                            height: '250px',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </div>

                {/* Get Started Button */}
                <button
                    onClick={() => navigate('/home')}
                    style={{
                        background: '#333',
                        color: '#fff',
                        border: 'none',
                        padding: '18px 40px',
                        fontSize: '18px',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        marginTop: '20px',
                        boxShadow: '0 10px 30px rgba(51, 51, 51, 0.3)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                    onMouseEnter={e => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 15px 35px rgba(51, 51, 51, 0.4)';
                    }}
                    onMouseLeave={e => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 10px 30px rgba(51, 51, 51, 0.3)';
                    }}
                >
                    Get Started ➝
                </button>
            </div>

            <p style={{
                marginTop: '30px',
                color: '#666',
                zIndex: 1,
                fontSize: '14px',
                opacity: 0.8
            }}>
                P.E.S. College of Engineering, Mandya
            </p>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Landing;
