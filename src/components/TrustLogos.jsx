import React from 'react';
import './TrustLogos.css';

const logos = [
  "/Altura.png", 
  "/Aptiv.png", 
  "/iOasis.png", 
  "/Stratifi.png", 
  "/Vector.png", 
  "/Logo-1.png"
];

const TrustLogos = () => {
  return (
    <section className="trust-logos-section bg-pattern-green">
      <div className="container">
        <h3 className="trust-logos-title">Trusted by thousands of companies.</h3>
        
        <div className="logos-carousel">
          <div className="logos-track">
            {/* Double the logos to create the infinite scroll effect */}
            {[...logos, ...logos].map((logoSrc, index) => (
              <div className="logo-item" key={index}>
                <img src={logoSrc} alt="Client Logo" className="logo-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
