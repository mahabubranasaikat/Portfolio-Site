import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ExternalLink,
  ArrowUpRight,
  Puzzle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProblemSolving = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const platforms = [
    {
      name: 'LeetCode',
      handle: 'mahabubranasaikat',
      url: 'https://leetcode.com/u/mahabubranasaikat/',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607 2.6 2.6 0 0 1 .564-.472l4.277-4.577 4.548-4.872a1.38 1.38 0 0 0 .047-1.895A1.37 1.37 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
      description:
        'Practicing algorithmic problem solving, core data structures, and SQL query optimization.',
      tags: [
        'Top Interview 150',
        'LeetCode SQL 50',
        'Data Structures & Algorithms',
        'Database Queries',
      ],
    },
    {
      name: 'Codeforces',
      handle: 'mahabubranasaikat',
      url: 'https://codeforces.com/profile/mahabubranasaikat',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5zm7.5-4.5a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-3 0V4.5A1.5 1.5 0 0 1 12 3zm7.5 7.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-3 0V12a1.5 1.5 0 0 1 1.5-1.5z" />
        </svg>
      ),
      description:
        'Practicing competitive programming, speed, and algorithmic problem solving with C++.',
      tags: [
        'Competitive Programming',
        'C++ / STL',
        'Algorithms & Problem Solving',
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.ps-header',
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
        '.ps-accent',
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

      // Cards cascade
      gsap.fromTo(
        '.ps-card',
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.08,
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
      id="problem-solving"
      className="relative min-h-screen w-full bg-slate-50 dark:bg-black py-28 lg:py-32 overflow-hidden transition-colors duration-300 scroll-mt-20 flex items-center justify-center"
    >
      {/* Anchor alias */}
      <div id="cp" className="absolute top-0 left-0 scroll-mt-20 pointer-events-none" />

      {/* Dynamic Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid pointer-events-none" />

      {/* Red Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-gradient-to-r from-red-950/80 via-black to-red-950/60 border border-red-500/40 rounded-full mb-2 shadow-sm">
              <Puzzle className="w-4 h-4 text-red" />
              <span className="text-xs text-red font-mono font-bold tracking-[0.2em] uppercase">
                Problem Solving
              </span>
            </div>
            <h2 className="ps-header font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 dark:text-white tracking-tight">
              PROBLEM SOLVING
            </h2>
            <div className="ps-accent w-24 h-1.5 bg-gradient-to-r from-[#ff3b30] via-[#881337] to-transparent rounded-full origin-left" />
          </div>
        </div>

        {/* Platform Cards Grid with Rich Hover Effects */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="ps-card group relative card-modern rounded-3xl p-7 sm:p-10 overflow-hidden flex flex-col justify-between border border-slate-200/90 dark:border-white/10 hover:border-red/50 hover:shadow-2xl hover:shadow-red/20 hover:-translate-y-1 transition-all duration-400"
            >
              {/* Top Ambient Red Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red via-red/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header Info */}
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white group-hover:text-red group-hover:border-red/50 group-hover:scale-105 group-hover:bg-red/5 transition-all duration-300 shadow-sm">
                      {platform.icon}
                    </div>
                    <div>
                      <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-slate-950 dark:text-white group-hover:text-red transition-colors duration-300">
                        {platform.name}
                      </h3>
                      <p className="text-xs font-mono text-slate-500 dark:text-gray-400">
                        @{platform.handle}
                      </p>
                    </div>
                  </div>

                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-white hover:bg-red hover:border-red hover:scale-110 transition-all duration-300 shadow-sm"
                    aria-label={`Open ${platform.name} Profile`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                  {platform.description}
                </p>

                {/* Clean Tags with Smooth Hover */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {platform.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-white/80 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:border-red/60 hover:bg-red/10 dark:hover:bg-red/20 hover:text-red dark:hover:text-white hover:scale-105 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-white/10">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group/btn flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white dark:bg-white/10 dark:text-white hover:bg-red dark:hover:bg-red text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red/30 cursor-pointer"
                >
                  <span>View {platform.name} Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
