import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-header text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Beyond Automated Scanning</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            We are a team of experienced offensive security professionals specializing in high-stakes environments. We don't just run tools; we think like elite adversaries.
          </p>
        </div>

        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div className="card text-center">
            <div className="card-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>🎯</div>
            <h3>Real Attack Simulation</h3>
            <p>We replicate the exact methodologies, tools, and persistence of modern threat actors to find flaws before they do.</p>
          </div>
          
          <div className="card text-center">
            <div className="card-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>🧠</div>
            <h3>Business Logic Testing</h3>
            <p>Automated scanners miss context. Our experts focus on complex business logic vulnerabilities that scanners cannot detect.</p>
          </div>
          
          <div className="card text-center">
            <div className="card-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#FCD34D' }}>🔒</div>
            <h3>Confidential Engagements</h3>
            <p>Operating with the highest discretion and zero-trust principles for fintech ecosystems and critical lending platforms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
