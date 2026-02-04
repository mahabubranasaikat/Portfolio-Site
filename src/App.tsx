import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Services from './sections/Services';
import Works from './sections/Works';
import Interests from './sections/Interests';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen overflow-x-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Services />
        <Works />
        <Interests />
        <Contact />
        <Footer />
      </main>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />
    </div>
  );
}

// Scroll Progress Component
function ScrollProgress() {
  useEffect(() => {
    const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
    
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === document.body) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50">
      <div 
        className="scroll-progress h-full bg-red origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}

export default App;
