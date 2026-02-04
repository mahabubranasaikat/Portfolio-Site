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
      status: '3rd Year (Current)',
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
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Accent line
      gsap.fromTo(
        '.edu-accent',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Timeline line animation
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

       // Timeline items stagger animation with rotation
       gsap.fromTo(
         '.edu-item',
         { 
           x: (index) => (index % 2 === 0 ? -80 : 80), 
           opacity: 0,
           scale: 0.8,
           rotateX: 60,
         },
         {
           x: 0,
           opacity: 1,
           scale: 1,
           rotateX: 0,
           duration: 0.9,
           stagger: 0.25,
           ease: 'expo.out',
           scrollTrigger: {
             trigger: timelineRef.current,
             start: 'top 65%',
             toggleActions: 'play none none reverse',
           },
         }
       );

      // Timeline dots animation
      gsap.fromTo(
        '.edu-dot',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'elastic.out(1.3, 0.7)',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content cards animation
      gsap.fromTo(
        '.edu-card',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 60%',
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
      id="education"
      className="relative py-28 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-100/20 to-black opacity-40" />
      
      {/* Animated Red Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-dark-100/70 border border-white/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-red rounded-full animate-pulse" />
            <span className="text-xs text-red font-medium tracking-[0.2em] uppercase">
              Academic Journey
            </span>
          </div>
          
          <h2 className="edu-header font-display text-5xl sm:text-6xl text-white mb-4">
            EDUCATION
          </h2>
          <div className="edu-accent w-24 h-1 bg-gradient-to-r from-red via-red/50 to-transparent origin-left" />
        </div>

        {/* Modern Alternating Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Timeline Line - Center */}
          <div className="timeline-line hidden lg:block absolute left-1/2 -translate-x-1/2 top-6 bottom-0 w-1 bg-gradient-to-b from-red via-red/50 to-transparent" />

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
                   <div className="edu-card group relative bg-gradient-to-br from-dark-100/75 to-dark-200/40 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-500 hover:border-red/60 hover:shadow-2xl hover:shadow-red/30 hover:-translate-y-2 overflow-hidden hover-lift">
                     
                     {/* Highlight Badge - Positioned Inside Box */}
                     {edu.highlight && (
                       <div className="absolute top-3 right-3 px-2.5 py-1 bg-gradient-to-r from-red to-amber-700 text-black text-xs font-bold rounded-md shadow-lg text-center min-w-max animate-pulse-scale">
                         CURRENT
                       </div>
                     )}

                     {/* Background Glow Effect */}
                     <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                     {/* Animated Top border */}
                     <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red/0 to-transparent group-hover:via-red/80 transition-all duration-500" />

                     {/* Rotating corner accent */}
                     <div className="absolute -top-1 -right-1 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <div className="animate-spin" style={{ animationDuration: '6s' }}>
                         <div className="w-full h-full border-t-2 border-r-2 border-red/40 rounded-full" />
                       </div>
                     </div>

                     {/* Content */}
                     <div className="relative z-10 space-y-3">
                       {/* Degree */}
                       <div>
                         <h3 className="font-display text-lg sm:text-xl text-white group-hover:text-red transition-all duration-400 leading-snug">
                           {edu.degree}
                         </h3>
                       </div>

                       {/* Institution and Department */}
                       <div className="space-y-2">
                         <div className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300">
                           <div className="w-8 h-8 bg-red/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red/30 transition-all duration-300 group-hover:scale-110">
                             <School className="w-4 h-4 text-red" />
                           </div>
                           <div>
                             <p className="font-medium text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{edu.institution}</p>
                             <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">{edu.department}</p>
                           </div>
                         </div>
                         <div className="flex items-center gap-2 ml-0 group-hover:translate-x-1 transition-transform duration-300">
                           <div className="w-8 h-8 bg-red/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red/30 transition-all duration-300 group-hover:scale-110">
                             <MapPin className="w-4 h-4 text-red" />
                           </div>
                           <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">{edu.location}</p>
                         </div>
                       </div>

                       {/* Duration and Status - Horizontal Layout */}
                       <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
                         <div className="flex items-center gap-1.5 text-gray-300 group-hover:text-white transition-colors duration-300">
                           <Calendar className="w-4 h-4 text-red flex-shrink-0" />
                           <span className="font-medium">{edu.duration}</span>
                         </div>
                         
                         <div className="flex items-center gap-1.5 text-red font-medium group-hover:text-white transition-colors duration-300">
                           <Award className="w-4 h-4 flex-shrink-0" />
                           <span>{edu.status}</span>
                         </div>
                       </div>
                     </div>

                     {/* Corner Accents - Animated */}
                     <div className="absolute -bottom-0.5 -right-0.5 w-12 h-12 border-r-2 border-b-2 border-red/20 rounded-br-xl group-hover:border-red/70 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:w-16 group-hover:h-16" />
                     <div className="absolute -top-0.5 -left-0.5 w-10 h-10 border-l-2 border-t-2 border-red/10 rounded-tl-xl group-hover:border-red/50 transition-all duration-500 group-hover:w-14 group-hover:h-14" />
                   </div>
                </div>

                 {/* Center Timeline Dot - Desktop Only */}
                 <div className="hidden lg:flex lg:w-2/12 justify-center group">
                   <div className="edu-dot relative z-20">
                     {/* Main Dot */}
                     <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg transition-all duration-500 hover-lift hover-glow border-4 border-black group-hover:scale-125`}>
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
                     <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg border-4 border-black transition-all duration-500 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-red/50`}>
                       <edu.icon className="w-7 h-7 text-white" />
                     </div>
                   </div>
                 </div>
              </div>
            ))}
          </div>

          {/* Bottom Timeline Flourish */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -bottom-6 justify-center">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red to-amber-700 border-4 border-black shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
