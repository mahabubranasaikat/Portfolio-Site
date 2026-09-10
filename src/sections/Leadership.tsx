import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Briefcase,
  Calendar,
  Building2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Leadership = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.lead-header',
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            once: true,
          },
        }
      );

      // Accent line
      gsap.fromTo(
        '.lead-accent',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            once: true,
          },
        }
      );

      // Activity card cascade
      gsap.fromTo(
        '.lead-card',
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="relative min-h-screen w-full bg-slate-50 dark:bg-black py-28 lg:py-32 overflow-hidden transition-colors duration-300 scroll-mt-20 flex items-center justify-center"
    >
      {/* Anchor aliases */}
      <div id="activities" className="absolute top-0 left-0 scroll-mt-20 pointer-events-none" />
      <div id="experience" className="absolute top-0 left-0 scroll-mt-20 pointer-events-none" />

      {/* Dynamic Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid pointer-events-none" />

      {/* Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16 lg:mb-20">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-gradient-to-r from-red-950/80 via-black to-red-950/60 border border-red-500/40 rounded-full mb-2 shadow-sm">
              <Briefcase className="w-4 h-4 text-red" />
              <span className="text-xs text-red font-mono font-bold tracking-[0.2em] uppercase">
                Work & Experience
              </span>
            </div>
            <h2 className="lead-header font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 dark:text-white tracking-tight">
              LEADERSHIP & ACTIVITIES
            </h2>
            <div className="lead-accent w-24 h-1.5 bg-gradient-to-r from-[#ff3b30] via-[#881337] to-transparent rounded-full origin-left" />
          </div>
        </div>

        {/* Large Expansive Card Box Container (max-w-5xl) with Rich Hover Effects */}
        <div className="max-w-5xl mx-auto">
          <div className="lead-card group relative card-modern rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden">
            {/* Top Ambient Red Glow Bar on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red via-red/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Corner Decorative Accents with Hover Glow */}
            <div className="absolute top-4 right-4 w-20 h-20 border-r border-t border-red/20 rounded-tr-2xl pointer-events-none group-hover:border-red/60 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 w-20 h-20 border-l border-b border-red/20 rounded-bl-2xl pointer-events-none group-hover:border-red/60 transition-colors duration-300" />

            {/* Main Content Layout */}
            <div className="relative z-10 space-y-8 sm:space-y-10">
              {/* Top Row: Circular Logo + Org & Role Details + Status Badge */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
                {/* Organization & Role Info with Big Branded Avatar */}
                <div className="flex items-start sm:items-center gap-5 sm:gap-7">
                  {/* SWE Society Large Circular Logo Avatar with Hover Transition */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-white border-2 border-slate-200 dark:border-white/20 shadow-xl flex flex-col items-center justify-center shrink-0 select-none group-hover:border-red group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-red/30 transition-all duration-400 p-3 cursor-default">
                    <div className="text-center font-mono leading-tight">
                      <div className="text-base sm:text-lg lg:text-xl font-black tracking-tighter text-slate-950">
                        SW<span className="text-red">E</span>_
                      </div>
                      <div className="text-[11px] sm:text-xs lg:text-sm font-bold tracking-wider text-slate-600 -mt-0.5">
                        society
                      </div>
                    </div>
                  </div>

                  {/* Organization Title & Role */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-red shrink-0" />
                      <h3 className="font-outfit font-black text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white group-hover:text-red transition-colors duration-300 leading-tight">
                        SWE Society, SUST
                      </h3>
                    </div>
                    
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-red font-outfit">
                      Publication Secretary
                    </p>

                    <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base font-mono text-slate-600 dark:text-gray-300 pt-1">
                      <Calendar className="w-4 h-4 text-red shrink-0" />
                      <span>Jul 7, 2025 – Apr 1, 2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Role Overview Description with Subtle Hover Highlight */}
              <div className="pt-8 border-t border-slate-200/80 dark:border-white/10">
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/50 dark:bg-black/30 border border-slate-200/50 dark:border-white/10 group-hover:border-red/40 transition-all duration-300">
                  <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                    Serving as the Publication Secretary in the 6th Executive Committee of SWE Society, SUST. Leading publications, official event media, and coordinating departmental student activities and programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
