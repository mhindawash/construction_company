import React from 'react';
import './Footer.css'; // Make sure to link the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 My Construction Company. All rights reserved.</p>
            <div className="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Use</a>
            </div>
        </footer>
    );
}

export default Footer;
