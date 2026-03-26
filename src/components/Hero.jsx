import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Graphics from Template */}
      <img src="/assets/blur.png" alt="blur" className="bg-blur blur-top-right" />
      <img src="/assets/blur.png" alt="blur" className="bg-blur blur-bottom-left" />
      <img src="/assets/Background-Graphics-1.png" alt="graphic" className="bg-graphic graphic-1" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid">
          
          <div className="hero-content animate-fade-in delay-100">
            <h3 className="hero-subheading text-accent">TRUSTED SECURITY PARTNER</h3>
            <h1 className="hero-title">
              Enterprise-Grade <br /> Penetration Testing
            </h1>
            <p className="hero-desc delay-200">
              Arlington helps fintechs, lenders, and enterprises identify and eliminate critical vulnerabilities before attackers exploit them.
            </p>
            
            <div className="hero-actions delay-300">
              <a href="#contact" className="btn btn-primary">Request Assessment</a>
              <a href="#contact" className="btn btn-secondary">Get a Quote</a>
            </div>

            <div className="hero-counters delay-300">
              <div className="counter-item">
                <h4 className="counter-num">Millions</h4>
                <p>Transactions Secured</p>
              </div>
              <div className="counter-item">
                <h4 className="counter-num">0-Day</h4>
                <p>Attack Simulation</p>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper animate-fade-in delay-200" style={{ animationName: 'fadeInRight' }}>
            <img src="/assets/army-control-QVQ8MLA.jpg" alt="Security Operations" className="hero-main-img" />
            <img src="/assets/Background-Graphics-1.png" alt="graphic" className="bg-graphic graphic-2" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
