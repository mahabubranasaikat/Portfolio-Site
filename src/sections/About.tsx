import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Download,
  Code2,
  Database,
  Server,
  Globe,
  Terminal,
  Brain,
  Target,
  Zap,
  Wrench,
  MapPin,
  Smartphone,
  Layers,
  Cpu
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['JavaScript', 'C++', 'Python'],
    },
    {
      title: 'App Development',
      icon: Smartphone,
      skills: ['Flutter', 'Swift (iOS, macOS)'],
    },
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'Core Data'],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST API', 'JWT'],
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'Copilot', 'Claude Code', 'Antigravity', 'Postman'],
    },
    {
      title: 'Core CS',
      icon: Brain,
      skills: [
        'DSA',
        'OOP',
        'Problem Solving',
        'Design Patterns',
        'System Design',
        'Database',
        'Testing',
        'SDLC',
        'SRE',
        'Documentation',
      ],
    },
  ];

  const interestAreas = [
    { name: 'Core SWE', icon: Terminal },
    { name: 'SWE Architecture', icon: Layers },
    { name: 'Scalable Systems', icon: Cpu },
    { name: 'Backend', icon: Server },
    { name: 'AI/ML', icon: Brain },
    { name: 'IOS Dev', icon: Smartphone },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.about-title-char',
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.01,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            once: true,
          },
        }
      );

      // Content fade in
      gsap.fromTo(
        '.about-content',
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            once: true,
          },
        }
      );

      // Skill categories
      gsap.fromTo(
        '.skill-item',
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          stagger: 0.02,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            once: true,
          },
        }
      );

      // Interest areas
      gsap.fromTo(
        '.interest-tag',
        { y: 8, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.25,
          stagger: 0.02,
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
      id="about"
      className="relative min-h-screen w-full bg-slate-50 dark:bg-black flex items-center justify-center overflow-hidden py-32 transition-colors duration-300 scroll-mt-20"
    >
      {/* Dynamic Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
        <div
          ref={contentRef}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Left - Content */}
          <div className="lg:col-span-8 space-y-8 order-2 lg:order-1">
            {/* Title */}
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-red" />
              <h2 className="font-outfit font-extrabold text-4xl sm:text-5xl text-slate-950 dark:text-white tracking-tight">
                {'ABOUT ME'.split('').map((char, i) => (
                  <span key={i} className="about-title-char inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h2>
            </div>

            {/* Bio */}
            <p className="about-content text-slate-600 dark:text-gray-300 text-base leading-relaxed max-w-2xl font-medium">
              Hi,I am a Software Engineering student at SUST, passionate about building scalable, reliable, and real-world modern systems that create a meaningful impact on society.
            </p>

            {/* Key Technical Skills */}
            <div className="about-content">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-3.5 h-3.5 text-red" />
                <h3 className="text-[11px] text-red font-mono font-bold uppercase tracking-wider">
                  Technical Skills
                </h3>
              </div>

              <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {skillCategories.map((category) => {
                  const CategoryIcon = category.icon;
                  const isCoreCS = category.title === 'Core CS';
                  return (
                    <div
                      key={category.title}
                      className={`skill-item group skill-card-compact rounded-xl p-2.5 sm:p-3 flex flex-col justify-start cursor-default ${
                        isCoreCS ? 'col-span-1 sm:col-span-2 lg:col-span-3' : 'col-span-1'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-4 h-4 rounded bg-red/10 dark:bg-red/15 flex items-center justify-center text-red shrink-0 group-hover:bg-red/30 transition-colors">
                          <CategoryIcon className="w-2.5 h-2.5" />
                        </div>
                        <h4 className="text-slate-950 dark:text-white text-[11.5px] sm:text-xs font-outfit font-bold group-hover:text-red-400 dark:group-hover:text-white transition-colors truncate">
                          {category.title}
                        </h4>
                      </div>

                      <div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto no-scrollbar">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="shrink-0 whitespace-nowrap px-2 py-0.5 text-[9.5px] sm:text-[10px] bg-slate-100/90 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/[0.12] rounded-md text-slate-700 dark:text-gray-200 font-mono font-medium leading-tight shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] group-hover:border-red/40 group-hover:bg-black/50 group-hover:text-white transition-all duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interest Areas */}
            <div className="about-content">
              <div className="flex items-center gap-2 mb-2.5">
                <Zap className="w-3.5 h-3.5 text-red" />
                <h3 className="text-[11px] text-red font-mono font-bold uppercase tracking-wider">
                  Interest Areas
                </h3>
              </div>

              <div className="interests-row flex flex-wrap items-center gap-2">
                {interestAreas.map((interest) => {
                  const InterestIcon = interest.icon;
                  return (
                    <div
                      key={interest.name}
                      className="interest-tag shrink-0 flex items-center gap-1.5 px-3 py-1.5 glass-liquid rounded-lg text-xs font-semibold text-slate-700 dark:text-gray-200 border border-slate-200/60 dark:border-white/[0.13] hover:border-red/70 hover:bg-gradient-to-r hover:from-red-950/90 hover:via-red-900/50 hover:to-black hover:text-white hover:shadow-[0_4px_20px_rgba(255,59,48,0.4)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      <InterestIcon className="w-3.5 h-3.5 text-red shrink-0" />
                      <span className="whitespace-nowrap">{interest.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Stats, Photo & CV */}
          <div className="lg:col-span-4 about-content order-1 lg:order-2 space-y-6">
            {/* Stats Row - Horizontally aligned with ABOUT ME, on upside of Photo */}
            <div className="flex items-center justify-between px-2 pt-1 pb-1">
              <div className="flex flex-col items-center text-center">
                <div className="font-outfit font-black text-3xl sm:text-4xl text-red leading-none">6+</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider font-semibold mt-1">Projects</div>
              </div>
              <div className="w-px h-10 bg-slate-300 dark:bg-white/15" />
              <div className="flex flex-col items-center text-center">
                <div className="font-outfit font-black text-3xl sm:text-4xl text-red leading-none">3+</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider font-semibold mt-1">Years in Learning SWE</div>
              </div>
              <div className="w-px h-10 bg-slate-300 dark:bg-white/15" />
              <div className="flex flex-col items-center text-center">
                <div className="font-outfit font-black text-3xl sm:text-4xl text-red leading-none">B.Sc.</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider font-semibold mt-1">Software Eng</div>
              </div>
            </div>

            {/* Photo - Clicking downloads CV */}
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Md_Mahabub_Rana_Saikat_CV.pdf"
              className="block relative group cursor-pointer"
              title="Click to Download CV"
              aria-label="Click photo to download CV"
            >
              {/* Photo */}
              <div className="relative overflow-hidden rounded-xl border border-slate-300/80 dark:border-white/10 shadow-xl dark:shadow-none group-hover:border-red/60 group-hover:shadow-2xl group-hover:shadow-red/25 transition-all duration-500">
                <img
                  src="/hero-profile.jpg"
                  alt="Md Mahabub Rana Saikat - Click to Download CV"
                  className="w-full aspect-[3/4] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating Hover Badge indicating click to download */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <Download className="w-3 h-3 text-red animate-bounce" />
                  <span>Download CV</span>
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-2xl text-white group-hover:text-red transition-colors duration-300">Md Mahabub Rana</h3>
                  <p className="text-red font-medium">Saikat</p>
                  <div className="flex items-center gap-1 text-xs text-gray-300 mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>Sylhet, Bangladesh</span>
                  </div>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-red/30 group-hover:border-red/60 rounded-xl -z-10 transition-colors duration-500" />
            </a>

            {/* Download CV Button */}
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Md_Mahabub_Rana_Saikat_CV.pdf"
              className="w-full group flex items-center justify-center gap-2 px-6 py-3 bg-red text-white dark:text-black hover:bg-slate-900 dark:hover:bg-white transition-all duration-300 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-red/30 shadow-md"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
