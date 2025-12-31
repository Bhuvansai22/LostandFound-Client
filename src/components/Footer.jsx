import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-box">
                <img height="130px" src="/images/logo.svg" alt="" id="footer-logo" />
                <div className="footer-content">
                    <div className="site">
                        <p id="Footer-site">Site</p>
                        <ul id="footer-ul">
                            <li><Link to="/lost">Lost</Link></li>
                            <li><Link to="/report-lost">Report Lost</Link></li>
                            <li><Link to="/found">Found</Link></li>
                            <li><Link to="/report-found">Report Found</Link></li>
                        </ul>
                    </div>

                    <div className="Help">
                        <p id="Footer-Help">Help</p>
                        <ul id="footer-ul">
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="links">
                        <p id="Footer-Links">Links</p>
                        <ul id="footer-ul">
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><Link to="/">About us</Link></li>
                        </ul>
                    </div>

                    <div className="contact">
                        <p id="Footer-Contact">Contact</p>
                        <ul id="footer-ul">
                            <li><a href="tel:+919742247556">📞 +91 1234567891</a></li>
                            <li>
                                <a href="mailto:bhuvan9259@gmail.com">✉️ bhuvan9259@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <center>
                <h5>&copy; Copyright 2025 Lost & Found</h5>
                <h5>All Rights Reserved</h5>
            </center>
        </footer>
    );
};

export default Footer;
