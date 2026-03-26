import React, { useState } from 'react';
import './FeaturesAccordion.css';

const FeaturesAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      title: "Daily-Evolving Defense",
      content: "Our offensive methodologies adapt every day, learning from global threat patterns to protect your business in real time."
    },
    {
      title: "Rapid Threat Response",
      content: "Stop breaches in seconds, not hours. We detect, isolate, and neutralize threats before they cause harm."
    },
    {
      title: "End-to-End Security",
      content: "From endpoint to cloud, your entire digital environment stays protected under one unified system."
    },
    {
      title: "Behavior-Based Detection",
      content: "Go beyond traditional compliance-checkboxes—Arlington identifies unusual behavior and emerging threats before they’re even known."
    }
  ];

  return (
    <section className="features-accordion-section bg-pattern">
      <div className="container">
        <div className="features-grid">
          
          {/* Left Column: Icons and Text */}
          <div className="features-left animate-fade-in-up">
            <span className="features-badge">Why Choose Arlington</span>
            <h2 className="features-title">Designed for a World That Changes Daily</h2>
            <p className="features-desc">
              We engineer resilient defenses to stay ahead of persistent, adaptive threats targeting critical enterprises.
            </p>

            <div className="features-icon-list">
              <div className="feature-icon-item">
                <div className="feature-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 2.5 2.5 0 0 1-.34-4.8 2.5 2.5 0 0 1 2.96-3.08A2.5 2.5 0 0 1 9.5 2Z"></path>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 2.5 2.5 0 0 0 .34-4.8 2.5 2.5 0 0 0-2.96-3.08A2.5 2.5 0 0 0 14.5 2Z"></path>
                  </svg>
                </div>
                <div className="feature-icon-text">
                  <h3>Behavior-Based Learning</h3>
                  <p>Our algorithms constantly learn and adapt to new threats automatically.</p>
                </div>
              </div>

              <div className="feature-icon-item">
                <div className="feature-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <div className="feature-icon-text">
                  <h3>Enterprise Security Systems</h3>
                  <p>Bank-grade infrastructure for defending high-value data and assets.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="features-right animate-fade-in-up delay-200">
            <div className="accordion">
              {accordionItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                >
                  <button 
                    className="accordion-header"
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                  >
                    <span>{item.title}</span>
                    <div className="accordion-icon">
                      {activeAccordion === index ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      )}
                    </div>
                  </button>
                  <div className="accordion-content">
                    {item.content}
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

export default FeaturesAccordion;
