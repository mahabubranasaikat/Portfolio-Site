import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter, Facebook, Mail, Heart, ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mahabubranasaikat', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mahabubranasaikat', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/mahbubrnasaikat', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/mahabubranasaikat/', label: 'Facebook' },
    { icon: Mail, href: 'mailto:mahabubranasaikat@gmail.com', label: 'Email' },
  ];

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Services', href: '#services' },
    { label: 'Works', href: '#works' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer slide up
      gsap.fromTo(
        footerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Social links
      gsap.fromTo(
        '.footer-social',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-slate-100 dark:bg-black border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-300"
    >
      {/* Dynamic Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid pointer-events-none opacity-60" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red/5 to-red/10 opacity-30 pointer-events-none" />

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 lg:px-24 py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-24">
          
          {/* Brand */}
          <div className="space-y-5 max-w-md">
            <div className="font-display text-3xl text-slate-900 dark:text-white tracking-wider hover:text-red transition-colors duration-300">
              Saikat
            </div>
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed hover:text-slate-800 dark:hover:text-gray-300 transition-colors duration-300">
              Software engineering student passionate about creating scalable, elegant, and real-world modern systems.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social group w-10 h-10 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg flex items-center justify-center hover:bg-red dark:hover:bg-red transition-all duration-300 hover:shadow-lg hover:shadow-red/40 hover:-translate-y-0.5 shadow-xs"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-slate-700 dark:text-gray-300 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-slate-900 dark:text-white tracking-wide">Quick Links</h4>
            <nav className="flex flex-wrap md:flex-col gap-3 md:gap-2.5">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = href.replace('#', '');
                    const target = document.getElementById(targetId) || (targetId === 'projects' ? document.getElementById('works') : null);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      window.history.pushState(null, '', href);
                    }
                  }}
                  className="footer-social group text-slate-600 dark:text-gray-400 hover:text-red dark:hover:text-red transition-all duration-200 text-sm font-medium hover:translate-x-1 inline-block"
                >
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-500 dark:text-gray-500 text-sm hover:text-slate-700 dark:hover:text-gray-300 transition-colors duration-300">
              <span>© 2026 Md Mahabub Rana Saikat. Made with</span>
              <Heart className="w-4 h-4 text-red fill-red animate-pulse-scale" />
              <span>and lots of coffee.</span>
            </div>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover-lift"
            >
              <span className="text-sm font-medium">Back to top</span>
              <div className="w-8 h-8 bg-white dark:bg-gradient-to-br dark:from-dark-100 dark:to-dark-200 border border-slate-200 dark:border-transparent rounded-lg flex items-center justify-center group-hover:from-red group-hover:to-red/80 group-hover:bg-red dark:group-hover:bg-transparent transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red/50 group-hover:scale-110 shadow-sm dark:shadow-none">
                <ArrowUp className="w-4 h-4 text-slate-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-all duration-300 group-hover:-translate-y-1" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
