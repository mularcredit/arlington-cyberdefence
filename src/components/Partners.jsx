import React from 'react';
import './Partners.css';

const Partners = () => {
  const logos = [
    "Altura.png", "Aptiv.png", "iOasis.png", "Logo-1.png", "Stratifi.png", "Vector.png", "Vector-1.png"
  ];

  return (
    <section className="partners-section">
      <div className="container text-center">
        <h3 className="partners-title">Trusted by thousands companies.</h3>
        
        <div className="partners-carousel">
          <div className="partners-track">
            {logos.map((logo, idx) => (
              <img key={idx} src={`/assets/${logo}`} alt={logo.split('.')[0]} className="partner-logo" />
            ))}
            {/* Duplicate for infinite effect */}
            {logos.map((logo, idx) => (
              <img key={`dup-${idx}`} src={`/assets/${logo}`} alt={logo.split('.')[0]} className="partner-logo" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
