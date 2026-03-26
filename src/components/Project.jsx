import React from 'react';
import './Project.css';

const projects = [
  {
    client: "Finqore Bank (Global)",
    title: "Banking Without Breaches",
    desc: "Constant phishing & credential stuffing attacks",
  },
  {
    client: "Medexia Clinics",
    title: "Securing Healthcare Records",
    desc: "Patient data leaks and compliance risks",
  },
  {
    client: "Nexsoft Systems",
    title: "Enabling Safe Remote Work",
    desc: "Growing remote work with unverified devices.",
  },
  {
    client: "Voltrax Industries",
    title: "Industrial IoT Protection",
    desc: "Cyberattacks on factory sensors and machines.",
  }
];

const Project = () => {
  return (
    <section id="projects" className="project-section bg-pattern">
      <div className="container">
        
        {/* Header */}
        <div className="project-header text-center animate-fade-in-up">
          <span className="project-badge">Our Project</span>
          <h2 className="project-title">How Arlington Defends in the Real World</h2>
          <p className="project-subtitle">
            From fintech to healthcare, our evolving cybersecurity has stopped attacks, ensured uptime, and helped teams scale with confidence.
          </p>
        </div>

        {/* Project Grid */}
        <div className="project-grid">
          {projects.map((item, index) => (
            <div key={index} className={`project-card animate-fade-in-up delay-${index * 100}`}>
              <div className="project-card-inner">
                <div className="project-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M8 14h.01"></path>
                  </svg>
                </div>
                <div className="project-content">
                  <span className="project-client">{item.client}</span>
                  <h3 className="project-name">{item.title}</h3>
                  <p className="project-desc">{item.desc}</p>
                  <a href="#" className="btn-get-started">
                    Get Started <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner Area */}
        <div className="cta-banner animate-fade-in-up delay-400">
          <div className="cta-banner-content">
            <h2 className="cta-title">Ready to Outsmart Tomorrow’s Threats?</h2>
            <a href="#" className="btn-primary">Talk to a Cyber Specialist</a>
            <ul className="cta-features">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                No credit card required
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Setup in minutes
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                Trusted globally
              </li>
            </ul>
          </div>
          <div className="cta-banner-image-wrapper">
             <img src="/how-to-trac-YS79JSB.jpg" alt="Cyber Specialist" className="cta-image" />
             <img src="/blur.png" className="cta-glow" alt="" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;
