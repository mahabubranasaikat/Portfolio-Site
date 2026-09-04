import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Building2,
  Globe,
  Smartphone,
  Gamepad2,
  FolderGit2,
  Server,
  Orbit,
  Timer,
  Code2,
  Terminal
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  icon: typeof Orbit;
  tags: string[];
  link: string | null;
  color: string;
  image: string;
}

const Works = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects: ProjectItem[] = [
    {
      title: 'Odessey',
      category: 'Native macOS Productivity Suite',
      description: 'A sleek, high-performance native macOS productivity suite engineered for deep focus. Combines interactive timeline scheduling, modular task planning with milestone tracking, Pomodoro focus cycles and instant menu bar access.',
      icon: Timer,
      tags: ['Swift', 'SwiftUI', 'macOS', 'AppKit', 'Universal 2'],
      link: 'https://github.com/mahabubranasaikat/Odessey',
      color: 'from-amber-500 to-orange-600',
      image: '/Odessey.png',
    },
    {
      title: 'SWE Society Management System',
      category: 'Full-Stack Web Development',
      description: 'A complete platform for managing student society activities, events, and member records. Features JWT-based authentication, role management, and secure backend APIs.',
      icon: Building2,
      tags: ['Node.js', 'Express.js', 'MySQL', 'JWT Authentication'],
      link: 'https://github.com/mahabubranasaikat/SWE_Society',
      color: 'from-red to-red-dark',
      image: '/SWE_Society.png',
    },
    {
      title: 'Orbit',
      category: 'macOS Application / AI Context Companion',
      description: 'An ambient, floating AI context companion and glassmorphic browser for macOS. Floats as an interactive glowing chathead bubble, docks dynamically to screen quadrants, extracts instant deep system context across IDEs and browsers, and automatically injects formatted prompts into ChatGPT, Claude, and Gemini.',
      icon: Orbit,
      tags: ['Swift', 'SwiftUI', 'macOS', 'WebKit', 'AppKit'],
      link: 'https://github.com/mahabubranasaikat/Orbit',
      color: 'from-cyan-500 to-blue-600',
      image: '/Orbit.jpg',
    },
    {
      title: 'Climate Hope',
      category: 'Mobile Application Development',
      description: 'An OOP-based environmental awareness application focused on educating users about climate change, sustainability, and eco-friendly practices.',
      icon: Smartphone,
      tags: ['Dart', 'Flutter', 'MongoDB'],
      link: 'https://github.com/mahabubranasaikat/Project_SWE250',
      color: 'from-green-500 to-green-700',
      image: '/Climate Hope.jpeg',
    },
    {
      title: 'ProjecTra',
      category: 'Web Technologies',
      description: 'A web platform that enables students to create, manage, and discover projects. Designed to promote collaboration and project visibility among students.',
      icon: Globe,
      tags: ['JavaScript', 'Express.js', 'MySQL'],
      link: 'https://github.com/mahabubranasaikat/ProjecTra',
      color: 'from-blue-500 to-blue-700',
      image: '/Projectra.jpg',
    },
    {
      title: 'Snake Game',
      category: 'Game Development',
      description: 'A modern implementation of the classic Snake game built using structured programming concepts with smooth controls and gameplay.',
      icon: Gamepad2,
      tags: ['C++', 'SDL2'],
      link: 'https://github.com/Saikat-Sust/SDL_project_',
      color: 'from-purple-500 to-purple-700',
      image: '/snake_game.webp',
    },
  ];

  const projectStats = {
    total: '6+',
    domains: [
      { name: 'App Development', icon: Smartphone },
      { name: 'Web Development', icon: Globe },
      { name: 'iOS Development', icon: Code2 },
      { name: 'Game Development', icon: Gamepad2 },
      { name: 'Backend & API Development', icon: Server },
      { name: 'Core SWE & Systems', icon: Terminal },
    ],
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.works-header',
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

      // Red accent
      gsap.fromTo(
        '.works-accent',
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

      // Project cards cascade - clean, immediate and snappy
      gsap.fromTo(
        '[class*="project-card-"]',
        { 
          y: 18, 
          opacity: 0,
        },
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

      // Stats animation
      gsap.fromTo(
        '.stats-card',
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative min-h-screen w-full bg-slate-50 dark:bg-black py-28 lg:py-32 overflow-hidden transition-colors duration-300 scroll-mt-20"
    >
      {/* Anchor alias for #projects */}
      <div id="projects" className="absolute top-0 left-0 scroll-mt-20 pointer-events-none" />

      {/* Dynamic Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid pointer-events-none" />

      {/* Red Glow */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16 lg:mb-24">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-gradient-to-r from-red-950/80 via-black to-red-950/60 border border-red-500/40 rounded-full mb-2 shadow-sm">
              <FolderGit2 className="w-4 h-4 text-red" />
              <span className="text-xs text-red font-mono font-bold tracking-[0.2em] uppercase">
                Portfolio
              </span>
            </div>
            <h2 className="works-header font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 dark:text-white tracking-tight">
              FEATURED PROJECTS
            </h2>
            <div className="works-accent w-24 h-1.5 bg-gradient-to-r from-[#ff3b30] via-[#881337] to-transparent rounded-full origin-left" />
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className={`project-card-${index} group grid lg:grid-cols-12 gap-8 lg:gap-14 items-center`}
              >
                {/* Showcase Photo / Window Section (7 cols) */}
                <div className={`lg:col-span-7 relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 dark:border-white/10 bg-white dark:bg-slate-950 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:border-red/50 group-hover:shadow-2xl group-hover:shadow-red/20 transition-all duration-500">
                    {/* macOS App / Browser Window Titlebar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/90 dark:bg-zinc-900/90 border-b border-slate-200/80 dark:border-white/[0.08] select-none">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-sm" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-sm" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-sm" />
                      </div>
                      
                      <div className="text-[11px] font-mono text-slate-600 dark:text-gray-400 truncate max-w-[220px] flex items-center gap-1.5">
                        <IconComponent className="w-3 h-3 text-red shrink-0" />
                        <span className="truncate">{project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.app</span>
                      </div>
                      
                      <div className="w-10 flex justify-end items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                    </div>

                    {/* Screenshot Showcase Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900/80">
                      <img
                        src={project.image}
                        alt={`${project.title} project showcase photo`}
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                        loading="lazy"
                      />

                      {/* Subtle Ambient Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

                      {/* Interactive Hover Actions Overlay */}
                      <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-red-900 to-black hover:from-red-500 hover:via-red-800 hover:to-slate-950 border border-red-500/40 text-white text-xs font-mono font-bold transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-red/20 active:scale-95 cursor-pointer"
                          >
                            <Github className="w-4 h-4" />
                            <span>View Source Code</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="text-xs font-mono text-gray-300 px-4 py-2 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md">
                            Academic Project
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section (5 cols) */}
                <div className={`lg:col-span-5 space-y-5 ${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                  {/* Category Pill */}
                  <div className={`flex items-center gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
                    <span className="text-xs font-mono font-bold text-red tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-outfit font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white group-hover:text-red transition-all duration-300 leading-tight tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base font-medium">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="project-tag px-3 py-1 text-xs font-mono font-medium glass-liquid rounded-lg text-slate-700 dark:text-gray-300 group-hover:border-red/40 group-hover:text-red transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Source Code Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-red hover:text-slate-900 dark:hover:text-white transition-all duration-300 group/link font-medium ${
                        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      <Github className="w-4 h-4 group-hover/link:scale-125 transition-transform" />
                      <span className="text-xs sm:text-sm font-semibold">View Source Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Summary Stats */}
        <div className="stats-card mt-32 lg:mt-40">
          <div className="relative bg-white/85 dark:bg-dark-100/50 backdrop-blur-sm border border-slate-200/80 dark:border-white/10 rounded-2xl p-8 lg:p-14 hover:border-red/20 hover:shadow-lg hover:shadow-red/10 transition-all duration-500 shadow-lg dark:shadow-none">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-red/30 rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-red/30 rounded-br-2xl pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Total Projects */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-3">
                  <FolderGit2 className="w-6 h-6 text-red" />
                  <span className="text-xs text-slate-500 dark:text-gray-400 tracking-wider uppercase font-mono font-semibold">Project Summary</span>
                </div>
                <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                  <span className="font-display text-7xl sm:text-8xl text-red">
                    {projectStats.total}
                  </span>
                  <span className="text-slate-500 dark:text-gray-400 text-base sm:text-lg">Total Projects</span>
                </div>
                <p className="text-slate-600 dark:text-gray-400 mt-3 max-w-md text-sm sm:text-base">
                  Real-world problem based Projects with complete system architecture and modern UI.
                </p>
              </div>

              {/* Domains */}
              <div className="space-y-4">
                <h4 className="text-xs text-slate-500 dark:text-gray-400 tracking-wider uppercase font-mono font-semibold text-center lg:text-left">
                  Domains Covered
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {projectStats.domains.map((domain) => {
                    const DomainIcon = domain.icon;
                    return (
                      <div
                        key={domain.name}
                        className="flex items-center gap-2.5 p-2.5 bg-slate-100 dark:bg-dark-200/50 rounded-lg border border-slate-200/60 dark:border-white/5 hover:border-red/30 transition-colors group"
                      >
                        <DomainIcon className="w-4 h-4 text-red group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-xs text-slate-700 dark:text-gray-300 font-medium truncate">{domain.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
