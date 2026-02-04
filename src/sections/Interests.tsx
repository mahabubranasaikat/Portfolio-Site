import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Code, BookOpen, Brain, Zap, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Interests = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const interests = [
    {
      title: 'Backend Dev',
      description: 'Building scalable systems with Node.js and Express',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Software Engineering',
      description: 'Clean architecture and design patterns',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Problem Solving',
      description: 'Competitive programming and algorithmic thinking',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Full-Stack Dev',
      description: 'Creating complete end-to-end solutions',
      icon: Zap,
      color: 'from-orange-500 to-amber-500',
    },
    {
      title: 'System Design',
      description: 'Designing robust distributed systems',
      icon: BookOpen,
      color: 'from-red-500 to-rose-500',
    },
    {
      title: 'Innovation',
      description: 'Exploring new technologies and frameworks',
      icon: Lightbulb,
      color: 'from-indigo-500 to-violet-500',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.interests-title',
        { y: 30, opacity: 0 },
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

      // Accent line
      gsap.fromTo(
        '.interests-accent',
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

      // Interest cards
      gsap.fromTo(
        '.interest-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.interests-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Icon animations
      gsap.fromTo(
        '.interest-icon',
        { scale: 0, rotate: -180 },
        {
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'elastic.out(1.2, 0.6)',
          scrollTrigger: {
            trigger: '.interests-grid',
            start: 'top 70%',
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
      id="interests"
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-100/20 to-black opacity-40" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-dark-100/50 border border-white/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-red rounded-full animate-pulse" />
            <span className="text-xs text-red font-medium tracking-[0.15em] uppercase">
              Passions
            </span>
          </div>
          
          <h2 className="interests-title font-display text-5xl sm:text-6xl text-white mb-4">
            INTERESTS
          </h2>
          <div className="interests-accent w-24 h-1 bg-gradient-to-r from-red via-red/50 to-transparent origin-left" />
          <p className="text-gray-400 mt-4 max-w-2xl text-sm">
            Core areas that drive my passion for continuous learning and innovation
          </p>
        </div>

        {/* Interests Grid */}
        <div className="interests-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="interest-card group relative bg-gradient-to-br from-dark-100/60 to-dark-200/40 backdrop-blur-sm border border-white/8 rounded-xl p-6 transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:shadow-red/10 overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10 space-y-3">
                {/* Icon */}
                <div className={`interest-icon w-12 h-12 rounded-lg bg-gradient-to-br ${interest.color} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110`}>
                  <interest.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg text-white group-hover:text-red transition-colors duration-300">
                  {interest.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {interest.description}
                </p>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-red/20 rounded-tl-xl group-hover:border-red/50 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-red/20 rounded-br-xl opacity-0 group-hover:opacity-100 group-hover:border-red/50 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
