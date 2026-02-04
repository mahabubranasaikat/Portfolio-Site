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
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Red accent line
      gsap.fromTo(
        '.services-accent',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );

       // Cards entrance with rotation and scale
       gsap.fromTo(
         '.service-card',
         { y: 40, opacity: 0, scale: 0.9, rotateY: 45 },
         {
           y: 0,
           opacity: 1,
           scale: 1,
           rotateY: 0,
           duration: 0.8,
           stagger: 0.15,
           ease: 'expo.out',
           scrollTrigger: {
             trigger: cardsRef.current,
             start: 'top 75%',
             toggleActions: 'play none none reverse',
           },
         }
       );

       // Icon animation on scroll
       gsap.fromTo(
         '.service-icon',
         { scale: 0, rotate: -180 },
         {
           scale: 1,
           rotate: 0,
           duration: 0.7,
           stagger: 0.15,
           ease: 'back.out',
           scrollTrigger: {
             trigger: cardsRef.current,
             start: 'top 75%',
             toggleActions: 'play none none reverse',
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
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-100/20 to-black opacity-40" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-red/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-dark-100/50 border border-white/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-red rounded-full animate-pulse" />
            <span className="text-xs text-red font-medium tracking-[0.15em] uppercase">
              Services
            </span>
          </div>
          
          <h2 className="services-title font-display text-5xl sm:text-6xl text-white mb-4">
            SERVICES
          </h2>
          <div className="services-accent w-24 h-1 bg-gradient-to-r from-red via-red/50 to-transparent origin-left" />
          <p className="text-gray-400 mt-4 max-w-2xl text-sm">
            Comprehensive solutions leveraging modern technologies and best practices
          </p>
        </div>

        {/* Services Grid */}
         <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
           {services.map((service) => (
             <div key={service.number} className="service-card group">
               <div className="relative bg-gradient-to-br from-dark-100/70 to-dark-200/50 backdrop-blur-sm border border-white/8 rounded-xl p-6 h-full transition-all duration-500 hover:border-red/40 hover:shadow-2xl hover:shadow-red/20 overflow-hidden hover:-translate-y-2">
                 
                 {/* Background Glow */}
                 <div className="absolute inset-0 bg-gradient-to-br from-red/10 via-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                 {/* Animated Border Gradient */}
                 <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                   background: 'linear-gradient(45deg, rgba(211,47,47,0.3), transparent)',
                   animation: 'gradient-shift 3s ease-infinite',
                 }} />

                 {/* Content */}
                 <div className="relative z-10 space-y-4">
                   {/* Header */}
                   <div className="flex items-start justify-between">
                     <span className="font-display text-4xl text-white/10 group-hover:text-red/30 transition-all duration-300 text-stroke">
                       {service.number}
                     </span>
                     <div className="service-icon w-12 h-12 bg-gradient-to-br from-dark-200 to-dark-100 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-red/20 group-hover:to-red/5 transition-all duration-300 hover-lift hover-glow">
                       <service.icon className="w-6 h-6 text-gray-400 group-hover:text-red transition-all duration-300" />
                     </div>
                   </div>

                   {/* Title */}
                   <h3 className="font-display text-xl text-white group-hover:text-red transition-all duration-300">
                     {service.title}
                   </h3>

                   {/* Description */}
                   <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-all duration-300">
                     {service.description}
                   </p>

                   {/* Arrow */}
                   <div className="flex items-center gap-2 text-red text-sm font-medium pt-2 group-hover:translate-x-2 transition-all duration-300 opacity-60 group-hover:opacity-100">
                     <span>Learn More</span>
                     <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                   </div>
                 </div>

                 {/* Corner Accent - Animated */}
                 <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-red/20 rounded-tl-xl group-hover:border-red/60 group-hover:w-12 group-hover:h-12 transition-all duration-300" />
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default Services;
