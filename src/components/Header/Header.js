import React from 'react';
import './Header.css'; // Ensure you link the CSS file

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">MyConstructionCompany</a> {/* Shortened logo text for minimalism */}
            </div>
            <nav className="main-nav">
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
