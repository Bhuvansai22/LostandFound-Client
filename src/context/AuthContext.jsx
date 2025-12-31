import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../config';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // Check if user is already logged in on mount
    useEffect(() => {
        const savedUser = sessionStorage.getItem('currentUser');
        if (savedUser) {
            try {
                const user = JSON.parse(savedUser);
                setCurrentUser(user);
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Error parsing stored user:", error);
                sessionStorage.removeItem('currentUser');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email,
                password
            });

            if (response.data.success) {
                const user = response.data.user;
                setCurrentUser(user);
                setIsAuthenticated(true);
                sessionStorage.setItem('currentUser', JSON.stringify(user));
                return { success: true, user };
            } else {
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed. Please try again.'
            };
        }
    };

    const signup = async (email, password, name = '') => {
        try {
            const response = await axios.post(`${API_URL}/auth/signup`, {
                email,
                password,
                name
            });

            if (response.data.success) {
                const user = response.data.user;
                setCurrentUser(user);
                setIsAuthenticated(true);
                sessionStorage.setItem('currentUser', JSON.stringify(user));
                return { success: true, user };
            } else {
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            console.error('Signup error:', error);
            return {
                success: false,
                message: error.response?.data?.message || 'Signup failed. Please try again.'
            };
        }
    };

    const logout = () => {
        setCurrentUser(null);
        setIsAuthenticated(false);
        sessionStorage.removeItem('currentUser');
    };

    const updateProfile = async (profileData) => {
        if (!currentUser || !currentUser.id) return { success: false, message: 'No user logged in' };

        try {
            const response = await axios.put(`${API_URL}/auth/profile/${currentUser.id}`, profileData);

            if (response.data.success) {
                const updatedUser = response.data.user;
                setCurrentUser(updatedUser);
                sessionStorage.setItem('currentUser', JSON.stringify(updatedUser)); // Update local storage
                return { success: true, user: updatedUser };
            } else {
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            console.error('Profile update error:', error);
            return {
                success: false,
                message: error.response?.data?.message || 'Update failed. Please try again.'
            };
        }
    };

    const value = {
        currentUser,
        isAuthenticated,
        loading,
        login,
        signup,
        logout,
        updateProfile
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
