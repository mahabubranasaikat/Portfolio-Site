import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Twitter, Mail, Phone, ArrowDown } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set('.hero-char', { y: 100, rotateX: 90, opacity: 0 });
      gsap.set(subtitleRef.current, { filter: 'blur(20px)', opacity: 0 });
      gsap.set(ctaRef.current, { scale: 0, opacity: 0 });
      gsap.set(imageRef.current, { rotateY: 90, z: -200, opacity: 0 });
      gsap.set('.social-link', { y: 30, opacity: 0 });
      gsap.set('.connect-line', { scaleX: 0 });

      // Entrance timeline
      const tl = gsap.timeline({ delay: 0.3 });

      // Headline character animation
      tl.to('.hero-char', {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.03,
        ease: 'expo.out',
      });

      // Subtitle blur reveal
      tl.to(subtitleRef.current, {
        filter: 'blur(0px)',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3');

      // CTA button bounce
      tl.to(ctaRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
      }, '-=0.2');

      // Image 3D flip
      tl.to(imageRef.current, {
        rotateY: 0,
        z: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'expo.out',
      }, '-=0.6');

      // Social links slide up
      tl.to('.social-link', {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: 'expo.out',
      }, '-=0.3');

      // Connect line draw
      tl.to('.connect-line', {
        scaleX: 1,
        duration: 0.5,
        ease: 'expo.out',
      }, '-=0.2');

      // Continuous floating animation for image
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headlineText = 'SOFTWARE ENGINEER';

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Enhanced Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-100 to-black opacity-60" />
      
      {/* Dynamic Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Enhanced Red Accent Glow with Multiple Layers */}
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-red/15 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-red/8 rounded-full blur-[120px] pointer-events-none" style={{ animationDelay: '1s' }} />

       {/* Main Content Container */}
       <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-16 lg:px-24 py-20">
        
         {/* Navigation */}
         <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 sm:px-16 lg:px-24 py-8">
          <div className="font-display text-2xl text-white tracking-wider">
            Saikat
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Education', 'Services', 'Works', 'Contact'].map((item) => (
               <a
                 key={item}
                 href={`#${item.toLowerCase()}`}
                 className="relative text-sm text-gray-300 hover:text-white transition-all duration-300 group pb-1"
               >
                 {item}
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </nav>

         {/* Hero Grid */}
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center max-w-7xl mx-auto w-full mt-12 lg:mt-0">
          
           {/* Left Content */}
           <div className="order-2 lg:order-1 space-y-6">
            {/* Name */}
            <div className="relative inline-block">
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-red/50" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-red/50" />
              
              <div className="bg-dark-100/50 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4">
                {/* Label */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-red rounded-full animate-pulse" />
                  <span className="text-xs text-red font-medium tracking-[0.2em] uppercase">
                    Developer
                  </span>
                </div>
                
                {/* Name */}
                <h1 className="font-body text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  <span className="block text-gray-300 font-light">Md Mahabub Rana</span>
                  <span className="block text-red">Saikat</span>
                </h1>
              </div>
            </div>

            {/* Headline - SOFTWARE ENGINEER */}
            <div ref={headlineRef} className="perspective-1000">
              <div className="relative inline-flex items-center gap-3 px-4 py-2 bg-dark-200/50 border border-white/10 rounded-full">
                {/* Decorative dots */}
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-red/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-red/30" />
                </div>
                
                {/* Text with gradient effect */}
                <h1 className="font-display text-sm sm:text-base lg:text-lg tracking-[0.25em] uppercase">
                  {headlineText.split('').map((char: string, i: number) => (
                    <span 
                      key={i} 
                      className="hero-char inline-block bg-gradient-to-b from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </h1>
                
                {/* Tech bracket decoration */}
                <span className="text-red/50 text-xs font-mono">&lt;/&gt;</span>
              </div>
            </div>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed"
            >
              Passionate about creating elegant solutions through code. 
              Specialized in building scalable applications that make a difference.
            </p>

             {/* CTA Button */}
             <button
               ref={ctaRef}
               onClick={scrollToAbout}
               className="group relative px-8 py-4 bg-red text-black font-medium text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red/50"
             >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000">
            <div
              ref={imageRef}
              className="relative w-64 sm:w-80 lg:w-96 aspect-[3/4] preserve-3d group"
            >
               {/* Image Frame */}
               <div className="absolute inset-0 border border-white/10 rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-500" />
              
              {/* Main Image */}
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src="/hero-profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Red Accent Corner */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-red" />
            </div>
          </div>
        </div>

         {/* Social Links Bar */}
         <div
           ref={socialsRef}
           className="absolute bottom-8 left-6 sm:left-16 lg:left-24 right-6 sm:right-16 lg:right-24"
         >
          <div className="flex items-center gap-6">
            {/* Connect Line */}
            <div className="connect-line hidden sm:block w-12 h-px bg-white/20 origin-left" />
            
            {/* Social Icons */}
            {[
              { icon: Github, href: 'https://github.com/mahabubranasaikat', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/mahabubranasaikat', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com/mahbubrnasaikat', label: 'Twitter' },
              { icon: Mail, href: 'mailto:mahabubranasaikat@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+88017533610727', label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="social-link group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="w-2 h-2 bg-red rounded-full transform group-hover:scale-150 transition-transform" />
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
