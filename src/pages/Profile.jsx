import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { currentUser, isAuthenticated, updateProfile, logout } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: '',
        usn: '',
        faculty: '',
        contact: ''
    });
    const [originalData, setOriginalData] = useState({});

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    // Load profile data from current user
    useEffect(() => {
        if (currentUser && currentUser.profile) {
            setProfileData(currentUser.profile);
            setOriginalData(currentUser.profile);
        }
    }, [currentUser]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleEdit = () => {
        setIsEditing(true);
        setOriginalData(profileData); // Save current state in case of cancel
    };

    const handleSave = async () => {
        if (!profileData.contact || profileData.contact.trim() === '') {
            alert('❌ Contact number is compulsory. Please enter your contact number.');
            return;
        }

        // Basic phone validation (optional but good)
        if (!/^\d{10}$/.test(profileData.contact.replace(/\D/g, ''))) {
            alert('❌ Please enter a valid 10-digit contact number.');
            return;
        }

        const result = await updateProfile(profileData);
        if (result.success) {
            setIsEditing(false);
            alert('✅ Profile updated successfully!');
        } else {
            alert('❌ ' + (result.message || 'Error updating profile'));
        }
    };

    const handleCancel = () => {
        setProfileData(originalData); // Restore original data
        setIsEditing(false);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!isAuthenticated || !currentUser) {
        return null; // Will redirect to login
    }

    return (
        <>
            <Header />
            <section id="Profile" style={{ marginTop: '50px' }}>
                <h2><span>Profile</span></h2>
                <div id="Profile-detail">
                    <div className="profile-avatar">
                        <img
                            src="https://img.icons8.com/ios-filled/100/737373/user-male-circle.png"
                            alt="User Avatar"
                        />
                        <p style={{
                            textAlign: 'center',
                            marginTop: '10px',
                            color: '#666',
                            fontSize: '14px'
                        }}>
                            {currentUser.email}
                        </p>
                    </div>

                    <div className="profile-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            value={profileData.name}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            style={{
                                cursor: isEditing ? 'text' : 'not-allowed',
                                opacity: isEditing ? 1 : 0.7
                            }}
                        />

                        <label htmlFor="usn">USN</label>
                        <input
                            type="text"
                            id="usn"
                            placeholder="Enter your USN"
                            value={profileData.usn}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            style={{
                                cursor: isEditing ? 'text' : 'not-allowed',
                                opacity: isEditing ? 1 : 0.7
                            }}
                        />

                        <label htmlFor="faculty">Faculty</label>
                        <input
                            type="text"
                            id="faculty"
                            placeholder="Enter your faculty"
                            value={profileData.faculty}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            style={{
                                cursor: isEditing ? 'text' : 'not-allowed',
                                opacity: isEditing ? 1 : 0.7
                            }}
                        />

                        <label htmlFor="contact">Contact Number <span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="tel"
                            id="contact"
                            placeholder="Enter your contact number"
                            value={profileData.contact}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            required
                            style={{
                                cursor: isEditing ? 'text' : 'not-allowed',
                                opacity: isEditing ? 1 : 0.7,
                                borderColor: (isEditing && !profileData.contact) ? 'red' : undefined
                            }}
                        />
                    </div>

                    <div className="profile-buttons">
                        {!isEditing ? (
                            <>
                                <button className="edit-btn" onClick={handleEdit}>
                                    Edit Profile
                                </button>
                                <button
                                    className="cancel-btn"
                                    onClick={handleLogout}
                                    style={{ background: '#333', color: 'white' }}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="save-btn" onClick={handleSave}>
                                    Save Changes
                                </button>
                                <button className="cancel-btn" onClick={handleCancel}>
                                    Cancel
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Profile;
