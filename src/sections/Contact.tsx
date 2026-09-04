import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mahabubranasaikat@gmail.com', href: 'mailto:mahabubranasaikat@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Sylhet, Bangladesh', href: 'https://maps.google.com/?q=Sylhet,Bangladesh' },
    { icon: Phone, label: 'Phone', value: '+8801753610727', href: 'tel:+8801753610727' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Red accent
      gsap.fromTo(
        '.contact-accent',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 96%',
            once: true,
          },
        }
      );

      // Subtext
      gsap.fromTo(
        '.cta-subtext',
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 96%',
            once: true,
          },
        }
      );

      // Contact card
      gsap.fromTo(
        '.contact-card',
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 96%',
            once: true,
          },
        }
      );

      // Contact items stagger
      gsap.fromTo(
        '.contact-item',
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.25,
          stagger: 0.04,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 96%',
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
      id="contact"
      className="relative min-h-screen w-full bg-slate-50 dark:bg-black py-32 overflow-hidden transition-colors duration-300 flex items-center scroll-mt-20"
    >
      {/* Dynamic Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 tech-grid pointer-events-none" />

      {/* Red Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-red/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 lg:px-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left - CTA */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 dark:text-white tracking-tight leading-tight">
                LET'S WORK <span className="text-red">TOGETHER</span>
              </h2>
            </div>

            <div className="contact-accent w-20 h-1.5 bg-gradient-to-r from-[#ff3b30] via-[#881337] to-transparent rounded-full origin-left" />

            <p className="cta-subtext text-slate-600 dark:text-gray-300 text-base sm:text-lg max-w-lg leading-relaxed font-medium">
              Have a project in mind? Let's create something amazing together.
              I'm always open to discussing new opportunities, innovative projects, and creative ideas.
            </p>

            <div className="pt-2">
              <a
                href="mailto:mahabubranasaikat@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-email-btn group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Send an Email</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="relative group">
            <div className="contact-card relative card-modern rounded-2xl p-8 sm:p-10 space-y-8 overflow-hidden">
              {/* Radial background glow on hover */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-red/10 dark:bg-red/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <h3 className="font-outfit font-bold text-2xl text-slate-950 dark:text-white tracking-tight relative z-10">
                Contact Information
              </h3>

              <div className="space-y-6 relative z-10">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item group/item flex items-start gap-4 cursor-pointer transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-12 h-12 icon-badge flex-shrink-0">
                      <Icon className="w-5 h-5 group-hover/item:scale-110 transition-transform" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-medium text-slate-500 dark:text-gray-400 uppercase tracking-wider">{label}</div>
                      <div className="text-slate-950 dark:text-white font-semibold group-hover/item:text-red transition-colors text-base mt-0.5">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Top subtle red accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red via-red/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Availability Badge */}
            <div className="mt-6 group flex items-center gap-3 px-5 py-3.5 card-modern rounded-2xl border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-slate-900 dark:text-white font-medium text-sm">Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

