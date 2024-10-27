// src/Components/Footer.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faViber } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Make sure to style your footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                <a href="https://viber.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faViber} size="2x" />
                </a>
            </div>
            <br></br>
            <p>© 2024 შპს სალო. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
