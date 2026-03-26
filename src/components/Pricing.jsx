import React from 'react';
import './Pricing.css';

const pricingPlans = [
  {
    tier: "Starter",
    desc: "Startups & small teams",
    price: "$49",
    period: "/month*",
    annualPrice: "*Paid annually at $360/year",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.138 20.187 10.201 17.864 10.02C17.362 6.592 14.414 4 10.8 4C6.934 4 3.8 7.134 3.8 11C3.8 11.086 3.801 11.171 3.805 11.256C1.656 11.751 0 13.684 0 16C0 18.761 2.239 21 5 21H17.5C18.328 21 19 20.328 19 19.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: [
      "AI-powered threat detection",
      "Protection for 10 devices",
      "Daily security updates",
      "Email & chat support"
    ],
    highlight: false
  },
  {
    tier: "Professional",
    desc: "Scalable protection",
    price: "$149",
    period: "/month*",
    annualPrice: "*Paid annually at $1,380/year",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    features: [
      "Behavioral threat analytics",
      "Multi-device & cloud integration",
      "Weekly vulnerability reports",
      "Compliance support (GDPR/HIPAA)"
    ],
    highlight: true
  },
  {
    tier: "Enterprise",
    desc: "Cybersecurity solutions",
    price: "Custom",
    period: "Pricing",
    annualPrice: "*Contact annually for details",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
    features: [
      "Zero Trust Architecture deployment",
      "24/7 threat response team",
      "On-premise & hybrid cloud security",
      "Dedicated account manager"
    ],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        
        {/* Header Grid */}
        <div className="pricing-header-grid">
          <div className="pricing-header-left animate-fade-in-up">
            <span className="pricing-badge">Pricing Plans</span>
            <h2 className="pricing-title">Choose a Plan That Evolves With Your Business</h2>
          </div>
          
          <div className="pricing-header-right animate-fade-in-up delay-200">
            <div className="pricing-guarantee-items">
              <div className="guarantee-item">
                <div className="guarantee-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                </div>
                <span>One-time purchase</span>
              </div>
              <div className="guarantee-item">
                <div className="guarantee-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <span>30 day money back guarantee</span>
              </div>
            </div>
            
            <div className="pricing-trust">
              <div className="trust-avatars">
                {/* Simulated Avatars overlap */}
                <div className="avatar bg-gray-600"></div>
                <div className="avatar bg-gray-500"></div>
                <div className="avatar bg-gray-400"></div>
                <div className="avatar bg-gray-300"></div>
              </div>
              <div className="trust-rating">
                <div className="stars">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <span>from 1,000+ happy clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.highlight ? 'pricing-card-highlight' : ''} animate-fade-in-up delay-${index * 100}`}
            >
              <div className="pricing-card-top">
                <div className="plan-icon-wrapper">
                  {plan.icon}
                </div>
                <div className="plan-header">
                  <h3 className="plan-tier">{plan.tier}</h3>
                  <p className="plan-desc">{plan.desc}</p>
                </div>
              </div>
              
              <div className="plan-price-block">
                <h2 className="plan-price">{plan.price}</h2>
                <span className="plan-period">{plan.period}</span>
              </div>
              <p className="plan-annual">{plan.annualPrice}</p>
              
              <a href="#" className={`btn-primary w-full text-center ${plan.highlight ? '' : 'btn-outline'}`}>
                Get Started
              </a>
              
              <div className="plan-features-block">
                <h4 className="plan-features-title">What's included?</h4>
                <div className="plan-divider"></div>
                <ul className="plan-features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <svg className="feature-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5v14"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {plan.highlight && (
                <img src="/blur.png" className="pricing-blur" alt="" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
