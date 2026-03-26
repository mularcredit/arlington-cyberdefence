import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: "Darren Mills",
    title: "Chief Security Strategist",
    image: "/worker-or-coding-HTAUG4Q.jpg",
    socials: ["facebook", "twitter", "linkedin"]
  },
  {
    name: "Aria Tanaka",
    title: "AI Systems Engineer",
    image: "/worker-watching-scr-QF68N5L.jpg",
    socials: ["facebook", "twitter", "linkedin"]
  },
  {
    name: "Leo Fernandez",
    title: "Cloud Security Lead",
    image: "/worker-in-office-PD2C8ND.jpg",
    socials: ["facebook", "twitter", "linkedin"]
  },
  {
    name: "Nadya Rahim",
    title: "Compliance & Risk Advisor",
    image: "/worker-man-is-working-with-in-3V72V57.jpg",
    socials: ["facebook", "twitter", "linkedin"]
  }
];

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        
        {/* Header Grid */}
        <div className="team-header-grid">
          <div className="team-header-left animate-fade-in-up">
            <span className="team-badge">Our Expert</span>
            <h2 className="team-title">Meet the Cyber <br/>Architects of Arlington</h2>
          </div>
          <div className="team-header-right animate-fade-in-up delay-200">
            <p className="team-desc">
              Behind every defense line is a team of experts constantly thinking ahead. Our specialists combine years of real-world security experience with cutting-edge AI innovation.
            </p>
            <a href="#" className="btn-primary mt-4 inline-block">Meet All Expert</a>
          </div>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className={`team-card animate-fade-in-up delay-${index * 100}`}>
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-social-overlay">
                  <ul className="social-list">
                    <li>
                      <a href="#" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.title}</span>
              </div>
              {/* Optional blur graphic behind specific members as seen in Oryn */}
              {index % 2 === 0 && (
                <img src="/blur.png" className="team-blur" alt="" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
