import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ExternalLink, Github, Building2, Globe, Smartphone, Gamepad2, Cpu, FolderGit2, Code2, Server } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'SWE Society Management System',
      category: 'Full-Stack Web Development',
      description: 'A complete platform for managing student society activities, events, and member records. Features JWT-based authentication, role management, and secure backend APIs.',
      icon: Building2,
      tags: ['Node.js', 'Express.js', 'MySQL', 'JWT Authentication'],
      link: null,
      color: 'from-red to-red-dark',
    },
    {
      title: 'ProjecTra',
      category: 'Web Technologies',
      description: 'A web platform that enables students to create, manage, and discover projects. Designed to promote collaboration and project visibility among students.',
      icon: Globe,
      tags: ['JavaScript', 'Express.js', 'MySQL'],
      link: null,
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Climate Hope',
      category: 'Mobile Application Development',
      description: 'An OOP-based environmental awareness application focused on educating users about climate change, sustainability, and eco-friendly practices.',
      icon: Smartphone,
      tags: ['Dart', 'Flutter', 'MongoDB'],
      link: 'https://github.com/Saikat-Sust/SDL_project_',
      color: 'from-green-500 to-green-700',
    },
    {
      title: 'Snake Game',
      category: 'Game Development',
      description: 'A modern implementation of the classic Snake game built using structured programming concepts with smooth controls and gameplay.',
      icon: Gamepad2,
      tags: ['C++', 'SDL2'],
      link: 'https://github.com/mahabubranasaikat/Project_SWE250',
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Python Schemedraw',
      category: 'Circuit Design / Python Tool',
      description: 'A Python-based electrical circuit drawing and visualization tool for designing and documenting circuit schematics programmatically.',
      icon: Cpu,
      tags: ['Python', 'Schemedraw'],
      link: null,
      color: 'from-yellow-500 to-yellow-700',
    },
  ];

  const projectStats = {
    total: '6+',
    domains: [
      { name: 'Web Development', icon: Globe },
      { name: 'Mobile App Development', icon: Smartphone },
      { name: 'iOS Development', icon: Code2 },
      { name: 'Game Development', icon: Gamepad2 },
      { name: 'Circuit Design', icon: Cpu },
      { name: 'Backend & API Development', icon: Server },
    ],
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.works-header',
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
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
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Project cards cascade
      projects.forEach((_, index) => {
        const card = document.querySelector(`.project-card-${index}`);
        
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Tags stagger pop
        const tags = card?.querySelectorAll('.project-tag');
        if (tags) {
          gsap.fromTo(
            tags,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.3,
              stagger: 0.1,
              ease: 'elastic.out(1, 0.5)',
              scrollTrigger: {
                trigger: card,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });

      // Stats animation
      gsap.fromTo(
        '.stats-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.stats-card',
            start: 'top 80%',
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
       id="works"
       className="relative min-h-screen w-full bg-black py-32 overflow-hidden"
     >
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Red Glow */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red/5 rounded-full blur-[150px] pointer-events-none" />

       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
         {/* Header */}
         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-20">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <FolderGit2 className="w-5 h-5 text-red" />
              <span className="text-xs text-red font-medium tracking-[0.2em] uppercase">
                Portfolio
              </span>
            </div>
            <h2 className="works-header font-display text-5xl sm:text-6xl lg:text-7xl text-white">
              FEATURED PROJECTS
            </h2>
            <div className="works-accent w-24 h-1 bg-red origin-left" />
          </div>
        </div>

         {/* Projects */}
         <div className="space-y-32 lg:space-y-40">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className={`project-card-${index} group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
              >
                 {/* Icon/Image Section */}
                 <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                   <div className="relative aspect-[4/3] bg-dark-100 rounded-xl overflow-hidden border border-white/10 group-hover:border-red/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-red/20">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                    
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500`}>
                        <IconComponent className="w-12 h-12 text-white" />
                      </div>
                    </div>

                    {/* Hover Overlay with Source Code */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-red text-black font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-white"
                        >
                          <Github className="w-5 h-5" />
                          <span>View Source Code</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <div className="flex items-center gap-2 px-6 py-3 bg-dark-200 border border-white/20 text-gray-400 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <span className="text-sm">Source code available on request</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-red/30 rounded-br-xl" />
                </div>

                 {/* Content */}
                 <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                  {/* Category */}
                  <div className={`flex items-center gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
                    <span className="text-xs text-gray-400 tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white group-hover:text-red transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed max-w-lg text-base sm:text-lg">
                    {project.description}
                  </p>

                   {/* Tags */}
                   <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.tags.map((tag) => (
                       <span
                         key={tag}
                         className="project-tag px-4 py-2 text-xs bg-dark-100 border border-white/10 rounded-full text-gray-300 group-hover:border-red/30 group-hover:text-red transition-all duration-300 hover:shadow-md hover:shadow-red/10"
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
                      className={`inline-flex items-center gap-2 text-red hover:text-white transition-colors group/link ${
                        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-medium">View Source Code</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

         {/* Project Summary Stats */}
         <div className="stats-card mt-40 lg:mt-48">
           <div className="relative bg-dark-100/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-16 hover:border-red/20 hover:shadow-lg hover:shadow-red/10 transition-all duration-500">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-red/30 rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-red/30 rounded-br-2xl" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Total Projects */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <FolderGit2 className="w-8 h-8 text-red" />
                  <span className="text-sm text-gray-400 tracking-wider uppercase">Project Summary</span>
                </div>
                <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                  <span className="font-display text-7xl sm:text-8xl lg:text-9xl text-red">
                    {projectStats.total}
                  </span>
                  <span className="text-gray-400 text-lg">Total Projects</span>
                </div>
                <p className="text-gray-500 mt-4 max-w-md">
                  Clean architecture, practical learning, and real-world problem solving across multiple domains.
                </p>
              </div>

             {/* Domains */}
             <div className="space-y-6">
               <h4 className="text-sm text-gray-400 tracking-wider uppercase mb-6 text-center lg:text-left">
                 Domains Covered
               </h4>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {projectStats.domains.map((domain) => {
                    const DomainIcon = domain.icon;
                    return (
                      <div
                        key={domain.name}
                        className="flex items-center gap-3 p-3 bg-dark-200/50 rounded-lg border border-white/5 hover:border-red/30 transition-colors group"
                      >
                        <DomainIcon className="w-5 h-5 text-red group-hover:scale-110 transition-transform" />
                        <span className="text-xs text-gray-300">{domain.name}</span>
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
