import React from 'react';

const Industries = () => {
  const industries = [
    "Fintech", "Lending Platforms", "Microfinance Institutions", "Banks", "SaaS Platforms"
  ];

  return (
    <section className="section" style={{ borderBottom: 'none' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h3 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
            Trusted by Critical Sectors
          </h3>
        </div>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          opacity: 0.8
        }}>
          {industries.map((ind, i) => (
            <div key={i} style={{
              padding: '1rem 2rem',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '2rem',
              fontWeight: '500',
              fontSize: '1.1rem'
            }}>
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
