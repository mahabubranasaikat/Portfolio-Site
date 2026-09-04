import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  ArrowDown,
  Code2,
  Terminal,
  GitBranch,
  Sparkles,
  MessageSquare
} from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(nameRef.current, { y: 15, opacity: 0 });
      gsap.set(ctaRef.current, { scale: 0.9, opacity: 0 });
      gsap.set(imageRef.current, { y: 20, opacity: 0 });
      gsap.set('.social-link', { y: 15, opacity: 0 });
      gsap.set('.connect-line', { scaleX: 0 });

      // Entrance timeline - snappy, no lag
      const tl = gsap.timeline({ delay: 0.05 });

      // Name title entrance animation
      tl.to(nameRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      });

      // CTA button bounce
      tl.to(ctaRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
      }, '-=0.2');

      // Image smooth entrance
      tl.to(imageRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.55,
        ease: 'power3.out',
      }, '-=0.3');

      // Social links slide up
      tl.to('.social-link', {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
        ease: 'expo.out',
      }, '-=0.2');

      // Connect line draw
      tl.to('.connect-line', {
        scaleX: 1,
        duration: 0.35,
        ease: 'expo.out',
      }, '-=0.2');

      // Continuous gentle floating animation for cutout image
      gsap.to(imageRef.current, {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const worksSection = document.getElementById('works') || document.getElementById('projects');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#works');
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full bg-slate-50 dark:bg-black overflow-hidden transition-colors duration-300"
    >
      {/* Dynamic Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid pointer-events-none" />

      {/* Enhanced Red Accent Glow with Multiple Layers */}
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-red/10 dark:bg-red/15 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-red/5 dark:bg-red/8 rounded-full blur-[120px] pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 sm:px-16 lg:px-24 pt-20 sm:pt-24 pb-8">
        {/* Hero Grid with Poetic Depth Overlap - Centered vertically so photo returns to its previous position */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center max-w-7xl mx-auto w-full my-auto relative">
          
          {/* Left Content - Typography (Elevated upwards near the narrower navbar) */}
          <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5 lg:-mt-16 xl:-mt-22 relative z-10">
            
            {/* Apple Liquid Glass Status Pill - Software Engineering Student with Green Glowing Active Dot */}
            <div className="relative group inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-liquid transition-all duration-300 hover:border-emerald-500/40">
              {/* Side Active Dot - Glowing Vibrant Green Animation */}
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="absolute -inset-1 rounded-full bg-emerald-500/40 blur-[2.5px] animate-pulse" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981,0_0_14px_#10b981]" />
              </span>

              {/* Pill Title Text */}
              <span className="relative z-10 text-[11px] sm:text-xs font-mono font-bold tracking-[0.16em] text-slate-800 dark:text-gray-200 uppercase">
                Software Engineering Student
              </span>
            </div>

            {/* Artistic Name Title - Signature Overlap with 3D Depth Effect */}
            <div ref={nameRef} className="relative pt-1 select-none">
              
              {/* Signature Name - Clean Static Darkish Flourish, No Animation, Not Red */}
              <div className="relative z-20 -mb-2.5 sm:-mb-3.5 md:-mb-4.5 lg:-mb-5 -ml-1 sm:ml-2 origin-bottom-left pointer-events-none">
                <div className="inline-block">
                  <span className="font-signature font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[3.1rem] tracking-wide inline-block whitespace-nowrap signature-darkish py-0.5 px-1 select-none">
                    Md Mahabub Rana
                  </span>
                  {/* Signature Brush Swoosh Underline - Darkish Slate Gradient, No Red */}
                  <svg className="w-36 sm:w-48 lg:w-60 h-3.5 -mt-1 sm:-mt-1.5 ml-2 overflow-visible" viewBox="0 0 220 12" fill="none">
                    <defs>
                      <linearGradient id="signature-darkish-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.75" />
                        <stop offset="40%" stopColor="#64748b" stopOpacity="0.6" />
                        <stop offset="80%" stopColor="#334155" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path d="M4 8 Q 70 2, 140 7 T 215 4" stroke="url(#signature-darkish-line)" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Primary Calling Name - Immense, Wide, Ultra-Bold Reddish-Black */}
              <div className="relative z-10">
                <h1 className="tracking-tight">
                  <span className="block font-outfit font-black text-8xl sm:text-9xl md:text-[9.5rem] lg:text-[10rem] xl:text-[11.5rem] 2xl:text-[13rem] tracking-tighter leading-[0.78] uppercase group cursor-default transition-transform duration-300 lg:whitespace-nowrap">
                    <span className="bg-gradient-to-r from-slate-950 via-red-600 to-red dark:from-white dark:via-red-500 dark:to-red-600 bg-clip-text text-transparent drop-shadow-[0_12px_35px_rgba(220,38,38,0.25)] dark:drop-shadow-[0_0_55px_rgba(255,59,48,0.5)]">
                      SAIKAT
                    </span>
                  </span>
                </h1>
              </div>

              {/* Artistic Accent Stroke with Reddish-Black Gradient */}
              <div className="flex items-center gap-3 mt-3 sm:mt-4">
                <div className="h-1.5 sm:h-2 w-32 sm:w-44 bg-gradient-to-r from-slate-950 via-red to-transparent dark:from-white dark:via-red dark:to-transparent rounded-full shadow-sm" />
                <div className="h-1.5 sm:h-2 w-4 bg-red rounded-full shadow-sm shadow-red/50" />
                <div className="h-1.5 sm:h-2 w-2 bg-red/60 rounded-full" />
              </div>
            </div>

            {/* CTA Buttons - Compact, Sleek & Flawless in both Light/Dark mode */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <a
                ref={ctaRef as any}
                href="#works"
                onClick={scrollToProjects}
                className="group hero-btn-primary px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-lg font-outfit font-semibold text-xs tracking-wide cursor-pointer active:scale-95"
              >
                <span className="flex items-center gap-1.5">
                  <span>See My Work</span>
                  <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform duration-200" />
                </span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState(null, '', '#contact');
                }}
                className="group hero-btn-secondary px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-lg font-outfit font-semibold text-xs tracking-wide active:scale-95 cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <span>Let's Talk</span>
                  <MessageSquare className="w-3 h-3 text-red group-hover:scale-110 transition-transform duration-200" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Content - Bigger Photo with Noticeable 3D Depth Overlap & Seamless Edge Melting */}
          <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end items-center relative z-20 lg:-ml-16 xl:-ml-28 pointer-events-none">
            <div
              ref={imageRef}
              className="relative w-80 sm:w-96 lg:w-[32rem] xl:w-[36rem] flex flex-col items-center justify-center pointer-events-auto group"
            >
              {/* Primary Organic Morphing Irregular Fluid Shape */}
              <div className="absolute inset-2 sm:inset-4 animate-morph-blob bg-gradient-to-tr from-red/20 via-red-950/15 to-transparent dark:from-red/30 dark:via-red-950/25 dark:to-transparent border border-red/35 dark:border-red/40 backdrop-blur-sm pointer-events-none -z-10 shadow-[0_0_50px_rgba(220,38,38,0.25)]" />

              {/* Secondary Organic Fluid Contour (Counter-Morphing Layer) */}
              <div className="absolute inset-4 sm:inset-6 animate-morph-blob [animation-direction:reverse] [animation-duration:18s] bg-gradient-to-bl from-red/10 via-transparent to-red-900/10 border border-dashed border-red/25 pointer-events-none -z-10" />

              {/* Ambient Glowing Halo Behind Head & Shoulders */}
              <div className="absolute inset-0 m-auto w-72 sm:w-88 h-72 sm:h-88 bg-gradient-to-tr from-red/35 via-red/15 to-transparent rounded-full blur-[90px] pointer-events-none -z-10 animate-pulse" />

              {/* Geometric Orbital Wireframe Rings Centered */}
              <svg
                className="absolute inset-0 m-auto w-[115%] h-[115%] pointer-events-none -z-10 text-red/20 dark:text-red/30"
                viewBox="0 0 500 500"
                fill="none"
              >
                <circle cx="250" cy="250" r="215" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" className="animate-[spin_90s_linear_infinite]" />
                <ellipse cx="250" cy="250" rx="245" ry="145" stroke="currentColor" strokeWidth="1.5" transform="rotate(-28 250 250)" />
                <ellipse cx="250" cy="250" rx="245" ry="145" stroke="currentColor" strokeWidth="1.5" transform="rotate(32 250 250)" />
                <circle cx="250" cy="250" r="165" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              </svg>

              {/* --- CREATIVE ANIMATED DOODLES & TECH BADGES (Refined, Apple Liquid Glass, Non-Messy) --- */}

              {/* Doodle 1: Sparkle Star (Top-Right) */}
              <div className="absolute -top-4 -right-2 sm:-right-6 z-30 pointer-events-none animate-doodle-pulse group-hover:scale-125 transition-transform duration-300">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-red drop-shadow-[0_0_14px_rgba(220,38,38,0.7)]" viewBox="0 0 50 50" fill="none">
                  <path d="M25 2 C25 15 35 25 48 25 C35 25 25 35 25 48 C25 35 15 25 2 25 C15 25 25 15 25 2 Z" fill="currentColor" />
                  <circle cx="42" cy="10" r="2.5" fill="currentColor" className="animate-ping" />
                  <circle cx="8" cy="38" r="2" fill="currentColor" />
                </svg>
              </div>

              {/* Doodle 2: Hand-Drawn Developer Pill & Scribble Arrow (Top-Left) */}
              <div className="absolute top-2 -left-4 sm:-left-10 z-30 pointer-events-none animate-doodle-wiggle group-hover:rotate-6 transition-transform duration-300">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-liquid border border-red/30 dark:border-red/30 rotate-[-8deg]">
                  <span className="text-[10.5px] font-mono font-extrabold text-red tracking-wider uppercase">
                    &lt;developer/&gt;
                  </span>
                </div>
                {/* Hand-drawn connecting sketch arrow */}
                <svg className="w-10 h-8 text-red/80 -mt-1 ml-4" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 5 C 20 25, 35 5, 45 28 L 52 24 M 45 28 L 46 36" />
                </svg>
              </div>

              {/* Doodle 3: Floating 'programmer' Pill (Mid-Left) */}
              <div className="absolute top-[34%] -left-5 sm:-left-12 z-30 pointer-events-none animate-doodle-drift transition-transform duration-300 group-hover:translate-x-1.5">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-liquid">
                  <Code2 className="w-3 h-3 text-red dark:text-red-400 animate-pulse" />
                  <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-slate-800 dark:text-gray-200 tracking-wider lowercase">
                    programmer
                  </span>
                </div>
              </div>

              {/* Doodle 4: Floating 'learner' Pill (Lower-Left) */}
              <div className="absolute bottom-24 -left-3 sm:-left-8 z-30 pointer-events-none animate-doodle-slow [animation-delay:1.5s] transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full glass-liquid">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-semibold text-slate-700 dark:text-gray-300 tracking-widest uppercase">
                    learner
                  </span>
                </div>
              </div>

              {/* Doodle 5: Electric Zigzag Wave Squiggle (Bottom-Left) */}
              <div className="absolute bottom-6 -left-3 sm:-left-7 z-30 pointer-events-none animate-doodle-float group-hover:translate-x-2 transition-transform duration-300 opacity-75">
                <svg className="w-12 h-8 text-red drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]" viewBox="0 0 70 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 25 Q 15 8, 25 22 T 45 18 T 65 20" />
                  <circle cx="65" cy="20" r="3" fill="currentColor" />
                </svg>
              </div>

              {/* Doodle 6: Floating Mini Terminal Prompt (Upper-Right) */}
              <div className="absolute top-12 -right-3 sm:-right-8 z-30 pointer-events-none animate-doodle-float [animation-delay:0.8s]">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md glass-liquid opacity-90">
                  <Terminal className="w-2.5 h-2.5 text-red animate-pulse" />
                  <span className="text-[8.5px] font-mono text-slate-700 dark:text-gray-300">~/saikat $</span>
                </div>
              </div>

              {/* Doodle 7: Crosshair & Orbit Accent + SWE (Mid-Right) */}
              <div className="absolute top-[46%] -right-4 sm:-right-8 z-30 pointer-events-none animate-doodle-drift [animation-delay:1.2s] group-hover:scale-110 transition-transform duration-300">
                <div className="flex flex-col items-center gap-1">
                  <svg className="w-5 h-5 text-red animate-spin [animation-duration:14s]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                  </svg>
                  <span className="text-[8.5px] font-mono font-extrabold text-red/90 tracking-widest uppercase">
                    + SWE
                  </span>
                </div>
              </div>

              {/* Doodle 8: Git Branch Icon Capsule (Lower-Right) */}
              <div className="absolute bottom-20 -right-2 sm:-right-6 z-30 pointer-events-none animate-doodle-wiggle [animation-delay:2.2s] opacity-85">
                <div className="p-1.5 rounded-lg glass-liquid border border-red/30 text-red">
                  <GitBranch className="w-3 h-3 text-red/90" />
                </div>
              </div>

              {/* Doodle 9: Subtle Floating Sparkle (Upper-Right Far) */}
              <div className="absolute top-28 -right-6 z-20 pointer-events-none animate-doodle-pulse [animation-delay:1.9s] opacity-60">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>

              {/* Perfectly Centered Frameless Cutout Portrait Image with Natural Bottom Alpha Fade */}
              <img
                src="/hero-profile.png"
                alt="Md Mahabub Rana Saikat"
                className="relative z-20 w-full max-h-[54vh] sm:max-h-[60vh] lg:max-h-[66vh] object-contain select-none mx-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_25px_55px_rgba(255,59,48,0.35)] transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 0%, black 42%, rgba(0,0,0,0.92) 54%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.15) 75%, transparent 84%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 42%, rgba(0,0,0,0.92) 54%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.15) 75%, transparent 84%, transparent 100%)',
                }}
              />

              {/* Natural 3D Grounding Contact Shadow underneath base */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-slate-950/10 dark:bg-black/60 rounded-full blur-2xl pointer-events-none z-10"
              />
            </div>
          </div>
        </div>

        {/* Social Links Bar - Always Fully Visible at Bottom of Hero */}
        <div
          ref={socialsRef}
          className="relative z-20 w-full max-w-7xl mx-auto pt-6 pb-2"
        >
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Connect Line */}
            <div className="connect-line hidden sm:block w-12 h-px bg-slate-300 dark:bg-white/20 origin-left" />

            {/* Social Icons */}
            {[
              { icon: Github, href: 'https://github.com/mahabubranasaikat', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/mahabubranasaikat', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com/mahbubrnasaikat', label: 'Twitter' },
              { icon: Facebook, href: 'https://www.facebook.com/mahabubranasaikat/', label: 'Facebook' },
              { icon: Mail, href: 'mailto:mahabubranasaikat@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+88017533610727', label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link group flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-red dark:hover:text-white transition-colors duration-300"
              >
                <span className="w-2 h-2 bg-red rounded-full transform group-hover:scale-150 transition-transform" />
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
