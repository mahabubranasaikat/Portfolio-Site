import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mahabubranasaikat@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Sylhet, Bangladesh' },
    { icon: Phone, label: 'Phone', value: '+8801753610727' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CTA Headline word-by-word
      gsap.fromTo(
        '.cta-word',
        { y: 80, rotateX: 60, opacity: 0 },
        {
          y: 0,
          rotateX: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
        '.contact-accent',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.4,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Subtext
      gsap.fromTo(
        '.cta-subtext',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA Button
      gsap.fromTo(
        '.cta-button',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 55%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Contact card
      gsap.fromTo(
        '.contact-card',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Contact items stagger
      gsap.fromTo(
        '.contact-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-card',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Arrow decoration
      gsap.fromTo(
        '.arrow-decoration',
        { strokeDashoffset: 100 },
        {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.contact-card',
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
     <section
       ref={sectionRef}
       id="contact"
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
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-red/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red/5 rounded-full blur-[100px] pointer-events-none" />

       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 lg:px-24">
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          
           {/* Left - CTA */}
           <div className="space-y-10">
            {/* Headline */}
            <div className="space-y-0 perspective-1000">
              <h2 className="font-display text-display-2 sm:text-display-1 text-white leading-none">
                <span className="cta-word inline-block">LET'S</span>{' '}
                <span className="cta-word inline-block">WORK</span>
              </h2>
              <h2 className="font-display text-display-2 sm:text-display-1 text-white leading-none">
                <span className="cta-word inline-block">TOGETHER</span>
              </h2>
            </div>

             <div className="contact-accent w-16 h-1 bg-red origin-left" />

             <p className="cta-subtext text-gray-400 text-lg max-w-md leading-relaxed">
              Have a project in mind? Let's create something amazing together. 
              I'm always open to discussing new opportunities and ideas.
            </p>

             {/* CTA Button */}
             <a
               href="mailto:hello@portfolio.com"
               className="cta-button group inline-flex items-center gap-3 px-8 py-4 bg-red text-black font-medium hover:shadow-lg hover:shadow-red/50 transition-all duration-300 hover:scale-105"
             >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>

             {/* Contact Form */}
             <form onSubmit={handleSubmit} className="space-y-6 pt-8 border-t border-white/10">
              <div className="grid sm:grid-cols-2 gap-4">
               <div className="space-y-2">
                   <label className="text-sm text-gray-500">Name</label>
                   <input
                     type="text"
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-red focus:outline-none transition-colors duration-300"
                     placeholder="Your name"
                     required
                   />
                </div>
                 <div className="space-y-2">
                   <label className="text-sm text-gray-500">Email</label>
                   <input
                     type="email"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-red focus:outline-none transition-colors duration-300"
                     placeholder="your@email.com"
                     required
                   />
                </div>
              </div>
               <div className="space-y-2">
                 <label className="text-sm text-gray-500">Message</label>
                 <textarea
                   value={formData.message}
                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                   rows={4}
                   className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-red focus:outline-none transition-colors duration-300 resize-none"
                   placeholder="Tell me about your project..."
                   required
                 />
              </div>
               <button
                 type="submit"
                 className="group flex items-center gap-2 px-8 py-3 border border-white/20 text-white hover:bg-red hover:text-black hover:border-red transition-all duration-300 font-medium"
               >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Send Message</span>
              </button>
            </form>
          </div>

           {/* Right - Contact Info */}
           <div className="relative">
             <div className="contact-card relative bg-dark-100 border border-white/10 rounded-xl p-10 space-y-10 hover:border-red/20 hover:shadow-lg hover:shadow-red/10 transition-all duration-500">
              <h3 className="font-display text-2xl text-white">Contact Information</h3>
              
              <div className="space-y-6">
                 {contactInfo.map(({ icon: Icon, label, value }) => (
                   <div key={label} className="contact-item flex items-start gap-4 group">
                     <div className="w-12 h-12 bg-dark-200 rounded-lg flex items-center justify-center group-hover:bg-red/10 transition-colors duration-300">
                       <Icon className="w-5 h-5 text-gray-400 group-hover:text-red transition-colors duration-300" />
                     </div>
                     <div>
                       <div className="text-sm text-gray-500">{label}</div>
                       <div className="text-white group-hover:text-red transition-colors duration-300">{value}</div>
                     </div>
                   </div>
                 ))}
              </div>

              {/* Decorative Arrow */}
              <svg
                className="absolute -bottom-4 -right-4 w-24 h-24 text-red/30"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  className="arrow-decoration"
                  d="M10 90 Q 50 90, 50 50 Q 50 10, 90 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="100"
                  fill="none"
                />
                <polygon
                  points="85,5 95,10 85,15"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Availability Badge */}
            <div className="mt-8 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-gray-400 text-sm">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
