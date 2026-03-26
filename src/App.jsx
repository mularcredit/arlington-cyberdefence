import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Marquee from './components/Marquee';
import Services from './components/Services';
import WhyArlington from './components/WhyArlington';
import Process from './components/Process';
import Industries from './components/Industries';
import Impact from './components/Impact';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <About />
        <Marquee />
        <Services />
        <WhyArlington />
        <Process />
        <Industries />
        <Impact />
        <Contact />
      </main>
      
      <footer style={{ 
        padding: '2rem 0', 
        textAlign: 'center', 
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        color: '#a3b8cc'
      }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Arlington Cybersecurity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
