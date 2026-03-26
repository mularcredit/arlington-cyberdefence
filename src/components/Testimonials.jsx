import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: "Simple to deploy, powerful under the hood. Arlington gives us real peace of mind—finally a solution that grows smarter with our company.",
    name: "Rina W.",
    title: "CTO",
    image: "/4-people-having-a-v-3628WWS.png"
  },
  {
    text: "We've tried three security platforms. Arlington is the only one that actually adapts to our daily risk levels. Worth every dollar.",
    name: "Jordan L.",
    title: "VP of Infrastructure",
    image: "/3-people-having-a-v-3628WWS.png"
  },
  {
    text: "Arlington helped us stop an active threat in real time. Their AI engine is faster than anything we've tested before.",
    name: "Kavya P.",
    title: "Head of Security",
    image: "/2-people-having-a-v-3628WWS.png"
  },
  {
    text: "The zero-trust architecture was remarkably easy to implement. We dropped our response times by 80% in the first week.",
    name: "Marcus T.",
    title: "CISO",
    image: "/1-people-having-a-v-3628WWS.png"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        
        {/* Header */}
        <div className="testimonials-header animate-fade-in-up">
          <div className="testimonials-header-left">
            <span className="testimonials-badge">Review</span>
            <h2 className="testimonials-title">What Leaders Say About Arlington</h2>
          </div>
          <div className="testimonials-header-right">
            <a href="#" className="btn-outline">Talk to a Client Specialist</a>
          </div>
        </div>

        {/* Slider */}
        <div className="testimonials-slider-container animate-fade-in-up delay-200">
          <div className="testimonials-slider">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <div className="testimonial-quote-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <p className="testimonial-text">{item.text}</p>
                
                <div className="testimonial-author">
                  <img src={item.image} alt={item.name} className="testimonial-avatar" />
                  <div className="testimonial-author-info">
                    <h4 className="testimonial-name">{item.name}</h4>
                    <span className="testimonial-role">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Pop Block */}
        <div className="testimonials-video-block animate-fade-in-up delay-300">
          <button className="video-play-btn" aria-label="Play Video">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <div className="play-ripple"></div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
