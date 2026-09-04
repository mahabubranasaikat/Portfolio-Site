import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Cpu, Search, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      number: '01',
      title: 'Development',
      description: 'Building robust applications using modern technologies, frameworks, and best practices.',
      icon: Code2,
      rotation: -2,
    },
    {
      number: '02',
      title: 'Engineering',
      description: 'Designing and maintaining software systems with focus on architecture and quality.',
      icon: Cpu,
      rotation: 1,
    },
    {
      number: '03',
      title: 'Research',
      description: 'Exploring emerging technologies and analyzing complex problems for innovation.',
      icon: Search,
      rotation: -1,
    },
    {
      number: '04',
      title: 'Problem Solving',
      description: 'Analyzing challenges and implementing effective solutions to technical obstacles.',
      icon: Lightbulb,
      rotation: 2,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.services-title',
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

      // Red accent line
      gsap.fromTo(
        '.services-accent',
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

       // Cards entrance - clean and snappy
       gsap.fromTo(
         '.service-card',
         { y: 15, opacity: 0 },
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
         '.service-icon',
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
      id="services"
      className="relative py-28 bg-slate-50 dark:bg-black overflow-hidden transition-colors duration-300 scroll-mt-20"
    >
      {/* Dynamic Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-red/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-red-950/80 via-black to-red-950/60 border border-red-500/40 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 bg-red rounded-full animate-ping" />
            <span className="text-xs text-red font-mono font-bold tracking-[0.2em] uppercase">
              Services
            </span>
          </div>
          
          <h2 className="services-title font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 dark:text-white mb-4 tracking-tight">
            SERVICES
          </h2>
          <div className="services-accent w-24 h-1.5 bg-gradient-to-r from-[#ff3b30] via-[#881337] to-transparent rounded-full origin-left" />
          <p className="text-slate-600 dark:text-gray-300 mt-4 max-w-2xl text-base font-medium leading-relaxed">
            Comprehensive solutions leveraging modern technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div key={service.number} className="service-card group">
              <div className="relative card-modern rounded-2xl p-7 sm:p-8 h-full overflow-hidden">
                
                {/* Ambient Radial Hover Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-red/10 dark:bg-red/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <span className="font-outfit font-black text-3xl sm:text-4xl text-slate-300 dark:text-white/20 group-hover:text-red transition-colors duration-300 tracking-tight">
                      {service.number}
                    </span>
                    <div className="service-icon w-12 h-12 icon-badge">
                      <service.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-outfit font-bold text-xl sm:text-2xl text-slate-950 dark:text-white group-hover:text-red transition-colors duration-300 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Top Subtle Reddish-Black Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff3b30] via-[#881337] to-[#0a0a0a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
