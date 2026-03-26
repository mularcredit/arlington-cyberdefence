import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content flex justify-between items-center">
        <div className="nav-left">
          <img src="/logo.png" alt="Arlington Logo" className="logo" />
        </div>
        
        <div className="nav-center hidden md-flex">
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#coverage" className="nav-link">Coverage Area</a></li>
            <li><a href="#faqs" className="nav-link">FAQs</a></li>
          </ul>
        </div>
        
        <div className="nav-right hidden md-flex">
          <a href="#contact" className="btn-primary btn-sm">Get Started</a>
        </div>
        
        {/* Mobile Menu Icon Placeholder */}
        <div className="mobile-menu-icon" style={{ display: 'none' }}>
           <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
