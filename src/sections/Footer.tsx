import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mahabubranasaikat', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mahabubranasaikat', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/mahbubrnasaikat', label: 'Twitter' },
    { icon: Mail, href: 'mailto:mahabubranasaikat@gmail.com', label: 'Email' },
  ];

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Services', href: '#services' },
    { label: 'Works', href: '#works' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer slide up
      gsap.fromTo(
        footerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Social links
      gsap.fromTo(
        '.footer-social',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-black border-t border-white/5"
    >
       {/* Main Footer */}
       <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24 py-20">
         <div className="grid md:grid-cols-3 gap-16 lg:gap-32">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="font-display text-3xl text-white tracking-wider">
              Saikat
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Software engineering student passionate about creating elegant solutions 
              through code. Let's build something amazing together.
            </p>
            
             {/* Social Links */}
             <div className="flex items-center gap-4">
               {socialLinks.map(({ icon: Icon, href, label }) => (
                 <a
                   key={label}
                   href={href}
                   className="footer-social group w-10 h-10 bg-dark-100 rounded-lg flex items-center justify-center hover:bg-red transition-colors duration-300 hover:shadow-lg hover:shadow-red/30"
                   aria-label={label}
                 >
                   <Icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                 </a>
               ))}
             </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="font-display text-lg text-white">Quick Links</h4>
             <nav className="space-y-4">
               {navLinks.map(({ label, href }) => (
                 <a
                   key={label}
                   href={href}
                   className="footer-social block text-gray-400 hover:text-red transition-colors duration-300 text-sm"
                 >
                   {label}
                 </a>
               ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-display text-lg text-white">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to get notified about new projects and articles.
            </p>
             <form className="flex gap-3">
               <input
                 type="email"
                 placeholder="your@email.com"
                 className="flex-1 bg-dark-100 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-red focus:outline-none transition-colors duration-300"
               />
               <button
                 type="submit"
                 className="px-4 py-3 bg-red text-black rounded-lg hover:shadow-lg hover:shadow-red/30 transition-all duration-300 font-medium"
               >
                <ArrowUp className="w-4 h-4 rotate-45" />
              </button>
            </form>
          </div>
        </div>
      </div>

       {/* Bottom Bar */}
       <div className="border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-24 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>© 2026 Md Mahabub Rana Saikat. Made with</span>
              <Heart className="w-4 h-4 text-red fill-red" />
              <span>and lots of coffee.</span>
            </div>
            
             {/* Back to Top */}
             <button
               onClick={scrollToTop}
               className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
             >
               <span className="text-sm">Back to top</span>
               <div className="w-8 h-8 bg-dark-100 rounded-lg flex items-center justify-center group-hover:bg-red transition-colors duration-300">
                 <ArrowUp className="w-4 h-4 group-hover:text-black transition-colors duration-300" />
               </div>
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
