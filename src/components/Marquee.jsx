import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const items = [
    { text: "Security", icon: "fas fa-shield-alt" },
    { text: "Defend", icon: "fas fa-shield-alt" },
    { text: "Cyberspace", icon: "fas fa-shield-alt" }
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {/* Original */}
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="marquee-text-item">{item.text}</span>
            <span className="marquee-icon-holder"><i className={item.icon}></i></span>
          </React.Fragment>
        ))}
        {items.map((item, idx) => (
          <React.Fragment key={`copy1-${idx}`}>
            <span className="marquee-text-item">{item.text}</span>
            <span className="marquee-icon-holder"><i className={item.icon}></i></span>
          </React.Fragment>
        ))}
        {/* Duplicates for infinite scroll */}
        {items.map((item, idx) => (
          <React.Fragment key={`copy2-${idx}`}>
            <span className="marquee-text-item">{item.text}</span>
            <span className="marquee-icon-holder"><i className={item.icon}></i></span>
          </React.Fragment>
        ))}
        {items.map((item, idx) => (
          <React.Fragment key={`copy3-${idx}`}>
            <span className="marquee-text-item">{item.text}</span>
            <span className="marquee-icon-holder"><i className={item.icon}></i></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
