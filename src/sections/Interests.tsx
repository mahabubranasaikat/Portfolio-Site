import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Layers, Cpu, Server, Brain, Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Interests = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const interests = [
    {
      title: 'Core SWE',
      description: 'Foundational software engineering principles, algorithms, and full software lifecycle.',
      icon: Terminal,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'SWE Architecture',
      description: 'Designing maintainable system architecture, clean modular design, and robust structures.',
      icon: Layers,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Scalable Systems',
      description: 'Architecting distributed services, high-throughput systems, and performant backends.',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Backend',
      description: 'Building resilient APIs, database-backed architectures, and scalable server-side systems.',
      icon: Server,
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'AI/ML',
      description: 'Exploring intelligent algorithms, context-aware applications, and modern AI integration.',
      icon: Brain,
      color: 'from-rose-500 to-red-600',
    },
    {
      title: 'iOS Development',
      description: 'Crafting performant, intuitive mobile and native experiences with modern tools.',
      icon: Smartphone,
      color: 'from-violet-500 to-purple-600',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.interests-title',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
            once: true,
          },
        }
      );

      // Accent line
      gsap.fromTo(
        '.interests-accent',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.35,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
            once: true,
          },
        }
      );

       // Interest cards - clean and snappy
       gsap.fromTo(
         '.interest-card',
         { 
           y: 15, 
           opacity: 0,
         },
         {
           y: 0,
           opacity: 1,
           duration: 0.35,
           stagger: 0.06,
           ease: 'power2.out',
           scrollTrigger: {
             trigger: sectionRef.current,
             start: 'top 95%',
             once: true,
           },
         }
       );

      // Icon subtle scale
      gsap.fromTo(
        '.interest-icon',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          stagger: 0.06,
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
      id="interests"
      className="relative py-28 bg-slate-50 dark:bg-black overflow-hidden transition-colors duration-300"
    >
      {/* Dynamic Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-gradient-to-r from-red-950/80 via-black to-red-950/60 border border-red-500/40 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 bg-red rounded-full animate-ping" />
            <span className="text-xs text-red font-mono font-bold tracking-[0.2em] uppercase">
              Passions
            </span>
          </div>
          
          <h2 className="interests-title font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 dark:text-white mb-4 tracking-tight">
            INTERESTS
          </h2>
          <div className="interests-accent w-24 h-1.5 bg-gradient-to-r from-[#ff3b30] via-[#881337] to-transparent rounded-full origin-left" />
          <p className="text-slate-600 dark:text-gray-300 mt-4 max-w-2xl text-base font-medium leading-relaxed">
            Core areas that drive my passion for continuous learning and innovation
          </p>
        </div>

        {/* Interests Grid */}
        <div className="interests-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="interest-card group relative card-modern rounded-2xl p-7 overflow-hidden"
            >
              {/* Radial Glow on Hover */}
              <div className={`absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br ${interest.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red via-red/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className={`interest-icon w-12 h-12 rounded-xl bg-gradient-to-br ${interest.color} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 shadow-red/20`}>
                  <interest.icon className="w-5 h-5 text-white group-hover:rotate-6 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-outfit font-bold text-lg sm:text-xl text-slate-950 dark:text-white group-hover:text-red transition-all duration-300 tracking-tight">
                  {interest.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed font-normal">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
