import React from 'react';

const Impact = () => {
  const findings = [
    {
      title: "Loan Disbursement Bypass",
      desc: "Identified and remediated a critical business logic flaw that allowed attackers to bypass multi-stage approval workflows and disburse unauthorized loans.",
      tag: "Critical Severity"
    },
    {
      title: "Unauthorized API Fund Access",
      desc: "Prevented mass credential harvesting and unauthorized fund transfers by discovering a Broken Object Level Authorization (BOLA) vulnerability in core API endpoints.",
      tag: "High Severity"
    },
    {
      title: "Authentication Flaws Enposing Data",
      desc: "Detected cryptographic flaws in session token generation that could have exposed personally identifiable financial data for over 100,000 customers.",
      tag: "High Severity"
    }
  ];

  return (
    <section className="section bg-card">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Impact & Sample Findings</h2>
          <p>Real-world vulnerabilities we've neutralized for financial institutions.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {findings.map((finding, idx) => (
            <div key={idx} className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <div style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                background: finding.tag.includes('Critical') ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                color: finding.tag.includes('Critical') ? '#EF4444' : '#F59E0B',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}>
                {finding.tag}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{finding.title}</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>"{finding.desc}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
