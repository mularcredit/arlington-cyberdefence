import React from 'react';

const Process = () => {
  const steps = [
    { name: "Scoping", icon: "📋" },
    { name: "Reconnaissance", icon: "🔍" },
    { name: "Exploitation", icon: "⚡" },
    { name: "Reporting", icon: "📊" },
    { name: "Retesting", icon: "🔄" }
  ];

  return (
    <section id="process" className="section bg-card">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">How It Works</h2>
          <p>A streamlined, rigorous methodology designed for minimal disruption and maximum impact.</p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2rem',
          position: 'relative'
        }}>
          {/* Connecting line for desktop */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'var(--border-color)',
            zIndex: 1
          }} className="hidden-mobile" />

          {steps.map((step, index) => (
            <div key={index} style={{ 
              flex: '1', 
              minWidth: '150px',
              textAlign: 'center',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1.5rem',
                background: 'var(--bg-dark)',
                border: '2px solid var(--primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                boxShadow: '0 0 15px rgba(0, 230, 118, 0.2)'
              }}>
                {step.icon}
              </div>
              <h4 style={{ fontSize: '1.1rem' }}>{step.name}</h4>
              <div style={{
                color: 'var(--primary)',
                fontSize: '0.875rem',
                fontWeight: 'bold',
                marginTop: '0.5rem'
              }}>Step 0{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .hidden-mobile { display: none; }
        }
      `}} />
    </section>
  );
};

export default Process;
