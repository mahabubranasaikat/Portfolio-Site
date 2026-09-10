import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const navItems = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'works', label: 'Projects', href: '#works' },
  { id: 'problem-solving', label: 'Coding', href: '#problem-solving' },
  { id: 'leadership', label: 'Leadership', href: '#leadership' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { toggleTheme, isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show Saikat logo only from About Me section onwards
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setShowLogo(rect.top <= 160);
      } else {
        setShowLogo(scrollY > 450);
      }

      // Real-time User Position Detection (Scroll Spy)
      const sectionIds = ['contact', 'leadership', 'problem-solving', 'works', 'services', 'education', 'about'];
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
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none p-3 sm:p-4 lg:p-5">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Floating Brand Logo Capsule (Only shown from About Me onwards) */}
        <div
          className={`transition-all duration-500 ease-out pointer-events-auto ${
            showLogo
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 -translate-y-4 scale-90 pointer-events-none'
          }`}
        >
          <div className="glass-liquid rounded-full px-4 py-2 border border-slate-200/90 dark:border-white/15 shadow-xl shadow-black/5 dark:shadow-black/50 hover:border-red/50 hover:scale-105 transition-all duration-300">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-left focus:outline-none whitespace-nowrap cursor-pointer"
              aria-label="Scroll to top"
            >
              <span className="font-display text-2xl text-slate-950 dark:text-white tracking-wider group-hover:text-red transition-colors duration-300">
                Saikat
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
            </button>
          </div>
        </div>

        {/* Right: Floating macOS Menu Bar Capsule */}
        <div className="ml-auto flex flex-col items-end pointer-events-auto">
          <div className="glass-liquid rounded-full px-2.5 sm:px-3.5 py-1.5 border border-slate-200/90 dark:border-white/15 shadow-xl shadow-black/5 dark:shadow-black/50 flex items-center gap-1 sm:gap-2">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
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
                    className={`relative px-3 py-1.5 rounded-full text-xs sm:text-[12.5px] font-semibold tracking-wide transition-all duration-200 group cursor-pointer ${
                      isActive
                        ? 'text-red-600 dark:text-red font-bold bg-red-500/15 dark:bg-red-500/20 shadow-xs'
                        : 'text-slate-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-red rounded-full shadow-[0_0_6px_rgba(255,59,48,0.9)]" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="hidden md:block w-px h-4 bg-slate-300 dark:bg-white/15 mx-1" />

            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="group relative p-2 rounded-full hover:bg-slate-200/60 dark:hover:bg-white/10 text-slate-800 dark:text-gray-200 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
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
              className="md:hidden p-2 rounded-full hover:bg-slate-200/60 dark:hover:bg-white/10 text-slate-800 dark:text-gray-200 transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Navigation Floating Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 w-56 glass-liquid rounded-2xl border border-slate-200/90 dark:border-white/15 shadow-2xl p-2.5 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
              <nav className="flex flex-col space-y-1">
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
                      className={`text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-red-500/15 text-red-600 dark:text-red font-bold'
                          : 'text-slate-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red hover:bg-slate-200/60 dark:hover:bg-white/10'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={`text-[10px] font-mono ${isActive ? 'text-red font-bold' : 'text-slate-400 dark:text-gray-500'}`}>
                        {isActive ? '●' : '→'}
                      </span>
                    </a>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
