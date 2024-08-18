import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ backgroundColor: 'lightgray', padding: '10px', display: "flex", justifyContent: "center" }}>
            <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
                <li style={{ fontWeight: 'bold' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                </li>
                <li style={{ fontWeight: 'bold' }}>
                    <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
                </li>
                <li style={{ fontWeight: 'bold' }}>
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
                </li>
                <li style={{ fontWeight: 'bold' }}>
                    <Link to="/services" style={{ textDecoration: 'none', color: 'black' }}>Services</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;