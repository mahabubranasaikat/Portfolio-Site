import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const navItems = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'works', label: 'Projects', href: '#works' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Show Saikat logo only from About Me section onwards
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setShowLogo(rect.top <= 160);
      } else {
        setShowLogo(scrollY > 450);
      }

      // Real-time User Position Detection (Scroll Spy)
      const sectionIds = ['contact', 'works', 'services', 'education', 'about'];
      const viewportHeight = window.innerHeight;
      const scrollBottom = scrollY + viewportHeight;
      const docHeight = document.documentElement.scrollHeight;

      // If scrolled near page bottom, activate contact
      if (docHeight - scrollBottom < 100) {
        setActiveSection('contact');
        return;
      }

      // Check sections from bottom to top with responsive threshold
      const scrollThreshold = scrollY + 160;
      let matched = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollThreshold) {
          matched = id;
          break;
        }
      }
      setActiveSection(matched);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
    setMobileMenuOpen(false);
    window.history.pushState(null, '', ' ');
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId) || (targetId === 'projects' ? document.getElementById('works') : null);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(targetId === 'projects' ? 'works' : targetId);
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-black/75 backdrop-blur-2xl py-2 sm:py-2.5 border-b border-slate-200/90 dark:border-white/[0.08] shadow-[0_4px_25px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-white/80 dark:bg-black/35 backdrop-blur-xl py-2.5 sm:py-3 border-b border-slate-200/70 dark:border-white/[0.05] shadow-[0_2px_15px_rgba(0,0,0,0.03)]'
      }`}
    >
      <div className="w-full px-5 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Left: Brand Logo (Only shown from About Me onwards) */}
        <div
          className={`transition-all duration-500 ease-out ${
            showLogo
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto w-auto'
              : 'opacity-0 -translate-y-3 scale-95 pointer-events-none w-0 overflow-hidden'
          }`}
        >
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-left focus:outline-none whitespace-nowrap cursor-pointer"
            aria-label="Scroll to top"
          >
            <span className="font-display text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-wider group-hover:text-red transition-colors duration-300">
              Saikat
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
          </button>
        </div>

        {/* Right Area: All Navigation Links + Theme Toggle positioned right by the edge */}
        <div className="flex items-center gap-4 sm:gap-6 ml-auto">
          {/* Desktop Navigation Links with High Contrast in Light & Dark Mode */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-3 py-1.5 rounded-lg text-xs sm:text-[13px] tracking-wider transition-all duration-200 group cursor-pointer ${
                    isActive
                      ? 'text-red-600 dark:text-red font-bold bg-red-500/10 dark:bg-red-500/15'
                      : 'font-semibold text-slate-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Glowing Active Position Indicator */}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-[2px] bg-red transition-all duration-300 rounded-full ${
                      isActive
                        ? 'opacity-100 shadow-[0_0_8px_rgba(255,59,48,0.85)]'
                        : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Action Controls (Theme Toggle + Mobile Menu Button) */}
          <div className="flex items-center gap-2">
            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="group relative p-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-200 shadow-xs hover:border-red/40 hover:text-red-600 dark:hover:text-amber-400 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-90 transition-transform duration-500" />
              ) : (
                <Moon className="w-4 h-4 text-slate-800 group-hover:text-red-600 group-hover:-rotate-12 transition-transform duration-500" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-200 shadow-xs hover:border-red/40 transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 px-6 py-4 transition-all duration-300 shadow-2xl">
          <nav className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-sm font-semibold py-2.5 px-3 rounded-lg flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-red-500/10 text-red-600 dark:text-red font-bold border-l-4 border-red'
                      : 'text-slate-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`text-xs font-mono ${isActive ? 'text-red font-bold' : 'text-slate-400 dark:text-gray-500'}`}>
                    {isActive ? '●' : '→'}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
