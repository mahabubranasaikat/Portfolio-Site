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
  Box,
  Wrench,
  MapPin
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
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST API', 'JWT'],
    },
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'VS Code', 'Postman'],
    },
    {
      title: 'Core CS',
      icon: Brain,
      skills: ['DSA', 'OOP', 'Problem Solving'],
    },
  ];

  const interestAreas = [
    { name: 'Backend Dev', icon: Server },
    { name: 'Full-Stack', icon: Globe },
    { name: 'API Design', icon: Zap },
    { name: 'Databases', icon: Database },
    { name: 'Scalable Systems', icon: Box },
    { name: 'Competitive Programming', icon: Target },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.about-title-char',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.02,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content fade in
      gsap.fromTo(
        '.about-content',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Skill categories
      gsap.fromTo(
        '.skill-item',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Interest areas
      gsap.fromTo(
        '.interest-tag',
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.interests-row',
            start: 'top 85%',
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
       id="about"
       className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden py-32"
     >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-100 to-black opacity-50" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red/5 rounded-full blur-[150px] pointer-events-none" />

       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
         <div 
           ref={contentRef}
           className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
         >
          
          {/* Left - Photo & Quick Info */}
          <div className="lg:col-span-4 about-content">
            <div className="relative group">
              {/* Photo */}
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <img
                  src="/hero-profile.jpg"
                  alt="Md Mahabub Rana Saikat"
                  className="w-full aspect-[3/4] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-2xl text-white">Md Mahabub Rana</h3>
                  <p className="text-red font-medium">Saikat</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>Sylhet, Bangladesh</span>
                  </div>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-red/30 rounded-xl -z-10" />
            </div>

             {/* Download CV Button */}
              <a 
                href="/CV.pdf" 
                download="Md_Mahabub_Rana_Saikat_CV.pdf"
                className="w-full mt-6 group flex items-center justify-center gap-2 px-6 py-3 bg-red text-black hover:bg-white transition-all duration-300 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-red/30"
              >
               <Download className="w-4 h-4 group-hover:animate-bounce" />
               <span>Download CV</span>
             </a>
          </div>

           {/* Right - Content */}
           <div className="lg:col-span-8 space-y-8">
            {/* Title */}
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-red" />
              <h2 className="font-display text-4xl sm:text-5xl text-white">
                {'ABOUT ME'.split('').map((char, i) => (
                  <span key={i} className="about-title-char inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h2>
            </div>

            {/* Bio */}
            <p className="about-content text-gray-400 text-sm leading-relaxed max-w-2xl">
              Software Engineering student at SUST, passionate about building scalable backend systems 
              and full-stack applications. Specialized in Node.js, Express, and database design with 
              strong problem-solving skills and competitive programming experience.
            </p>

            {/* Key Technical Skills */}
            <div className="about-content">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-red" />
                <h3 className="text-xs text-red font-medium uppercase tracking-wider">
                  Technical Skills
                </h3>
              </div>
              
               <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 gap-3">
                 {skillCategories.map((category) => {
                   const CategoryIcon = category.icon;
                   return (
                     <div
                       key={category.title}
                       className="skill-item group bg-dark-100/50 border border-white/10 rounded-lg p-4 hover:border-red/40 hover:shadow-lg hover:shadow-red/10 transition-all duration-500 hover:-translate-y-1"
                     >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded bg-red/10 flex items-center justify-center">
                          <CategoryIcon className="w-4 h-4 text-red" />
                        </div>
                        <h4 className="text-white text-xs font-medium">
                          {category.title}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-[10px] bg-dark-200 rounded text-gray-300"
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
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-red" />
                <h3 className="text-xs text-red font-medium uppercase tracking-wider">
                  Interest Areas
                </h3>
              </div>
              
               <div className="interests-row flex flex-wrap gap-3">
                 {interestAreas.map((interest) => {
                   const InterestIcon = interest.icon;
                   return (
                     <div
                       key={interest.name}
                       className="interest-tag flex items-center gap-2 px-4 py-2 bg-dark-100/50 border border-white/10 rounded-full text-xs text-gray-300 hover:border-red/40 hover:text-white hover:shadow-md hover:shadow-red/10 transition-all duration-300"
                     >
                      <InterestIcon className="w-3 h-3 text-red" />
                      <span>{interest.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Row */}
            <div className="about-content flex items-center gap-6 pt-2">
              <div className="text-center">
                <div className="font-display text-2xl text-red">5+</div>
                <div className="text-[10px] text-gray-400 uppercase">Projects</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="font-display text-2xl text-red">3+</div>
                <div className="text-[10px] text-gray-400 uppercase">Years Coding</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="font-display text-2xl text-red">B.Sc.</div>
                <div className="text-[10px] text-gray-400 uppercase">Software Eng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
