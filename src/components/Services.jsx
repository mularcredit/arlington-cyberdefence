import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Web App Penetration Testing",
      desc: "Deep-dive analysis of complex web architectures to identify injection flaws and auth bypasses.",
      icon: "fas fa-globe"
    },
    {
      title: "Mobile App Security Testing",
      desc: "Reverse engineering and dynamic analysis of iOS and Android applications.",
      icon: "fas fa-mobile-alt"
    },
    {
      title: "API Security Testing",
      desc: "Rigorous testing of REST and GraphQL endpoints for broken object level authorization.",
      icon: "fas fa-plug"
    },
    {
      title: "Network & Infrastructure",
      desc: "Internal and external assessments targeting lateral movement and domain compromise.",
      icon: "fas fa-network-wired"
    },
    {
      title: "Fintech & Lending Audits",
      desc: "Specialized auditing for payment gateways and core banking integrations.",
      icon: "fas fa-university"
    },
    {
      title: "Cloud Security Assessments",
      desc: "Review of AWS, Azure, and GCP environments targeting IAM misconfigurations.",
      icon: "fas fa-cloud"
    }
  ];

  return (
    <section id="services" className="section oryn-services">
      <div className="container relative-z">
        <div className="services-header text-center" style={{ marginBottom: '5rem' }}>
          <h3 className="section-subtitle">OUR SERVICE</h3>
          <h2 className="section-title">Our Cybersecurity Services <br/> at a Glance</h2>
          <p className="section-desc">
            From real-time threat response to zero-trust infrastructure, Arlington delivers smart, scalable protection built to adapt.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card oryn-card">
              <div className="service-icon-box">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.desc}</p>
              
              <a href="#contact" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
