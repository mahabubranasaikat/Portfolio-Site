import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Services from './sections/Services';
import Works from './sections/Works';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Global listener ensuring all external links open in a new tab
    const handleGlobalClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href') || '';
        if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
          anchor.setAttribute('target', '_blank');
          anchor.setAttribute('rel', 'noopener noreferrer');
        }
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative bg-slate-50 dark:bg-black min-h-screen overflow-x-hidden text-slate-900 dark:text-white transition-colors duration-300">
      {/* Interactive Cursor Tracking */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar />

      {/* Global Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 tech-grid" />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Services />
        <Works />
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
    <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50 pointer-events-none">
      <div 
        className="scroll-progress h-full bg-red origin-left pointer-events-none"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}

export default App;
