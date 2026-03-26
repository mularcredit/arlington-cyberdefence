import React, { useState } from 'react';
import './WhyArlington.css';

const WhyArlington = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reasons = [
    {
      title: "Real-World Attack Simulation",
      desc: "We don't rely only on automated scanners. We mimic skilled adversaries to uncover complex attack vectors."
    },
    {
      title: "Financial Workflow Expertise",
      desc: "Deep domain knowledge of fintech architectures, core banking, and lending loan lifecycles."
    },
    {
      title: "Executive & Technical Reporting",
      desc: "Clear impact summaries for the board, combined with step-by-step reproduction guides for engineering teams."
    },
    {
      title: "Fast Turnaround & Retesting",
      desc: "Agile delivery to match your release cycles. We include verification retesting to ensure vulnerabilities are effectively patched."
    }
  ];

  return (
    <section className="section bg-dark-pattern">
      <div className="container">
        <div className="why-grid">
          
          <div className="why-content">
            <h3 className="section-subtitle">WHY CHOOSE ARLINGTON</h3>
            <h2 className="section-title">Designed for Environments<br/>Where Failure is Not an Option</h2>
            <p className="section-desc">
              We provide actionable, intelligence-led offensive security. Because modern threats evolve fast—so must your defense.
            </p>

            <div className="progress-bars">
              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-title">Real Attack Simulation</span>
                  <span className="progress-pct">95%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-header">
                  <span className="progress-title">Bank-Grade Confidentiality</span>
                  <span className="progress-pct">100%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '2.5rem' }}>Schedule a Consultation</a>
          </div>

          <div className="why-accordion-wrapper">
            <div className="oryn-accordion">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                >
                  <div className="accordion-header">
                    <span className="accordion-title">{reason.title}</span>
                    <div className="accordion-icon">
                      <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                    </div>
                  </div>
                  <div className="accordion-body" style={{
                    maxHeight: activeIndex === index ? '200px' : '0',
                    opacity: activeIndex === index ? 1 : 0
                  }}>
                    <div className="accordion-content">
                      <p>{reason.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyArlington;
