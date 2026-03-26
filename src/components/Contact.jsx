import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          
          <div className="contact-info">
            <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Secure Your Platform Before Attackers Do</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '500px' }}>
              We operate exclusively with organizations that treat security as a mission-critical imperative.
            </p>
            
            <div className="contact-methods" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>✉</span>
                <span>security@arlington.co.ke</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>📍</span>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            
            <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem' }}>
              <button className="btn btn-primary">Request a Quote</button>
              <button className="btn btn-secondary">Schedule Consultation</button>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="card form-card">
              <h3 style={{ marginBottom: '2rem' }}>Request an Assessment</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                
                <div className="form-group">
                  <label>Corporate Email</label>
                  <input type="email" placeholder="john@company.com" required />
                </div>
                
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" placeholder="Acme Fintech" required />
                </div>
                
                <div className="form-group">
                  <label>Scope of Testing</label>
                  <select required>
                    <option value="" disabled selected>Select an option</option>
                    <option value="web">Web Application</option>
                    <option value="api">API Security</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="network">Network/Infrastructure</option>
                    <option value="full">Full Stack Fintech Audit</option>
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Submit Request
                </button>
                <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '1rem', color: 'var(--text-muted)' }}>
                  All inquiries remain strictly confidential.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
