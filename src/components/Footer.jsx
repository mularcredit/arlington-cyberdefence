import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        
        {/* Top Newsletter Area */}
        <div className="footer-newsletter">
          <div className="footer-brand">
            <h2 className="footer-logo">ARLINGTON</h2>
            <p className="footer-brand-desc">
              We make cybersecurity easy—from consultation to implementation.
            </p>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Link</h4>
            <ul className="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Coverage Area</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-col-title">Support</h4>
            <ul className="footer-list">
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Security Updates</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-col-title">Career</h4>
            <ul className="footer-list">
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Hiring</a></li>
            </ul>
          </div>
          
          <div className="footer-col footer-col-address">
            <div className="footer-contact-block">
              <h4 className="footer-col-title">Address</h4>
              <p className="footer-text">
                Level 39, One Canada Square,<br />
                Canary Wharf, London E14 5AB,<br />
                United Kingdom
              </p>
            </div>
            
            <div className="footer-contact-block mt-4">
              <h4 className="footer-col-title">Contact</h4>
              <ul className="footer-list footer-contact-list">
                <li>
                  <a href="tel:+442079460000">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    +44 20 7946 0000
                  </a>
                </li>
                <li>
                  <a href="mailto:secure@arlingtoncyber.com">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    secure@arlingtoncyber.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Arlington Cybersecurity. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
