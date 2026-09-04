import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, School, BookOpen, Calendar, MapPin, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const educationData = [
    {
      degree: 'B.Sc. in Software Engineering',
      institution: 'Shahjalal University of Science and Technology (SUST)',
      department: 'Institute of Information and Communication Technology (IICT)',
      location: 'Sylhet, Bangladesh',
      duration: '2023 – Present',
      status: '4th Year (Current)',
      icon: GraduationCap,
      color: 'from-red to-amber-700',
      highlight: true,
    },
    {
      degree: 'Higher Secondary Certificate (H.S.C.)',
      institution: 'Government Shah Sultan College',
      department: 'Science Group',
      location: 'Bogra, Bangladesh',
      duration: '2019 – 2021',
      status: 'GPA: 5.0',
      icon: BookOpen,
      color: 'from-red to-orange-700',
      highlight: false,
    },
    {
      degree: 'Secondary School Certificate (S.S.C.)',
      institution: 'Naogaon Zilla School',
      department: 'Science Group',
      location: 'Naogaon, Bangladesh',
      duration: '2014 – 2019',
      status: 'GPA: 5.0',
      icon: School,
      color: 'from-red to-amber-800',
      highlight: false,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.edu-header',
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
        '.edu-accent',
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

      // Timeline line animation
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            once: true,
          },
        }
      );

       // Timeline items stagger animation
       gsap.fromTo(
         '.edu-item',
         { 
           y: 15, 
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

      // Timeline dots animation
      gsap.fromTo(
        '.edu-dot',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
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
      id="education"
      className="relative py-28 lg:py-32 bg-slate-50 dark:bg-black overflow-hidden transition-colors duration-300 scroll-mt-20"
    >
      {/* Dynamic Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid pointer-events-none" />
      
      {/* Animated Red Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-slate-950 text-white dark:bg-dark-100/90 border border-red/40 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 bg-red rounded-full animate-ping" />
            <span className="text-xs text-red font-mono font-bold tracking-[0.2em] uppercase">
              Academic Journey
            </span>
          </div>
          
          <h2 className="edu-header font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 dark:text-white mb-4 tracking-tight">
            EDUCATION
          </h2>
          <div className="edu-accent w-24 h-1.5 bg-gradient-to-r from-red via-red/60 to-transparent rounded-full origin-left" />
        </div>

        {/* Modern Alternating Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Timeline Line - Center */}
          <div className="timeline-line hidden lg:block absolute left-1/2 -translate-x-1/2 top-6 bottom-0 w-0.5 bg-gradient-to-b from-red via-red/40 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-14 lg:space-y-16">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`edu-item relative flex items-center gap-6 lg:gap-0 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card - Wider and Shorter */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                   <div className="edu-card group relative card-modern rounded-2xl p-7 sm:p-8 overflow-hidden">
                     
                     {/* Highlight Badge - Positioned Inside Box */}
                     {edu.highlight && (
                       <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-slate-950 to-red-600 dark:from-red-600 dark:to-red-700 text-white text-[11px] font-mono font-bold rounded-full shadow-md tracking-wider">
                         CURRENT
                       </div>
                     )}

                     {/* Top Ambient Red Line on Hover */}
                     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red via-red/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                     {/* Content */}
                     <div className="relative z-10 space-y-4">
                       {/* Degree */}
                       <div>
                         <h3 className="font-outfit font-bold text-xl sm:text-2xl text-slate-950 dark:text-white group-hover:text-red transition-colors duration-300 leading-snug tracking-tight">
                           {edu.degree}
                         </h3>
                       </div>

                       {/* Institution and Department */}
                       <div className="space-y-2.5">
                         <div className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
                           <div className="w-8 h-8 rounded-xl bg-red/10 dark:bg-red/15 flex items-center justify-center text-red flex-shrink-0 group-hover:bg-red group-hover:text-white transition-all duration-300">
                             <School className="w-4 h-4" />
                           </div>
                           <div>
                             <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-red transition-colors duration-300">{edu.institution}</p>
                             <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm font-medium">{edu.department}</p>
                           </div>
                         </div>
                         <div className="flex items-center gap-3 ml-0 group-hover:translate-x-1 transition-transform duration-300">
                           <div className="w-8 h-8 rounded-xl bg-red/10 dark:bg-red/15 flex items-center justify-center text-red flex-shrink-0 group-hover:bg-red group-hover:text-white transition-all duration-300">
                             <MapPin className="w-4 h-4" />
                           </div>
                           <p className="text-slate-600 dark:text-gray-300 text-sm font-medium">{edu.location}</p>
                         </div>
                       </div>

                       {/* Duration and Status - Horizontal Layout */}
                       <div className="flex flex-wrap items-center gap-5 text-xs pt-2 font-mono">
                         <div className="flex items-center gap-1.5 text-slate-600 dark:text-gray-300 font-medium">
                           <Calendar className="w-4 h-4 text-red flex-shrink-0" />
                           <span>{edu.duration}</span>
                         </div>
                         
                         <div className="flex items-center gap-1.5 text-red font-bold">
                           <Award className="w-4 h-4 flex-shrink-0" />
                           <span>{edu.status}</span>
                         </div>
                       </div>
                     </div>
                   </div>
                </div>

                 {/* Center Timeline Dot - Desktop Only */}
                 <div className="hidden lg:flex lg:w-2/12 justify-center group">
                   <div className="edu-dot relative z-20">
                     {/* Main Dot */}
                     <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg transition-all duration-500 hover-lift hover-glow border-4 border-slate-50 dark:border-black group-hover:scale-125`}>
                       <edu.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />
                     </div>

                     {/* Outer Pulsing Ring */}
                     <div className="absolute inset-0 rounded-full border-2 border-red/20 group-hover:border-red/60 scale-110 transition-all duration-500 group-hover:scale-140 group-hover:animate-pulse" />

                     {/* Inner rotating ring */}
                     <div className="absolute inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                       border: '2px solid rgba(211, 47, 47, 0.3)',
                       animation: 'spin 4s linear infinite',
                     }} />
                   </div>
                 </div>

                 {/* Mobile Timeline Dot */}
                 <div className="lg:hidden flex-shrink-0 group">
                   <div className="edu-dot relative z-20">
                     <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg border-4 border-slate-50 dark:border-black transition-all duration-500 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-red/50`}>
                       <edu.icon className="w-7 h-7 text-white" />
                     </div>
                   </div>
                 </div>
              </div>
            ))}
          </div>

          {/* Bottom Timeline Flourish */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -bottom-6 justify-center">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red to-amber-700 border-4 border-slate-50 dark:border-black shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
