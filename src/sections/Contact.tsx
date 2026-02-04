import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface SubmitStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: 'idle' });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mahabubranasaikat@gmail.com', href: 'mailto:mahabubranasaikat@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Sylhet, Bangladesh', href: '#' },
    { icon: Phone, label: 'Phone', value: '+8801753610727', href: 'tel:+8801753610727' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
       // CTA Headline word-by-word with enhanced animation
       gsap.fromTo(
         '.cta-word',
         { y: 100, rotateX: 90, opacity: 0, scale: 0.8 },
         {
           y: 0,
           rotateX: 0,
           opacity: 1,
           scale: 1,
           duration: 0.8,
           stagger: 0.15,
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

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSubmitStatus({ type: 'loading' });

    try {
      // Using Formspree endpoint
      const formspreeId = 'xdkozbnq'; // Replace with your actual Formspree ID
      const response = await axios.post(
        `https://formspree.io/f/${formspreeId}`,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name}`,
          _replyto: formData.email,
        }
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: 'idle' });
        }, 5000);
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly via email.',
      });
      console.error('Form submission error:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
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
                 <span className="cta-word inline-block text-gradient animate-gradient-shift">LET'S</span>{' '}
                 <span className="cta-word inline-block">WORK</span>
               </h2>
               <h2 className="font-display text-display-2 sm:text-display-1 text-white leading-none">
                 <span className="cta-word inline-block text-stroke">TOGETHER</span>
               </h2>
             </div>

              <div className="contact-accent w-16 h-1 bg-gradient-to-r from-red via-red to-red/30 origin-left" />

              <p className="cta-subtext text-gray-400 text-lg max-w-md leading-relaxed hover:text-gray-300 transition-colors duration-300">
               Have a project in mind? Let's create something amazing together. 
               I'm always open to discussing new opportunities and ideas.
             </p>

             {/* Status Messages */}
             {submitStatus.type !== 'idle' && (
               <div className={`flex items-start gap-3 p-4 rounded-lg transition-all duration-300 ${
                 submitStatus.type === 'success'
                   ? 'bg-green-500/10 border border-green-500/30'
                   : submitStatus.type === 'error'
                   ? 'bg-red/10 border border-red/30'
                   : 'bg-blue-500/10 border border-blue-500/30'
               }`}>
                 {submitStatus.type === 'success' ? (
                   <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                 ) : submitStatus.type === 'error' ? (
                   <AlertCircle className="w-5 h-5 text-red flex-shrink-0 mt-0.5" />
                 ) : null}
                 <p className={`text-sm ${
                   submitStatus.type === 'success'
                     ? 'text-green-300'
                     : submitStatus.type === 'error'
                     ? 'text-red/80'
                     : 'text-blue-300'
                 }`}>
                   {submitStatus.message || 'Sending...'}
                 </p>
               </div>
             )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6 pt-8 border-t border-white/10">
               <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2 group">
                    <label className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-transparent border-b-2 py-3 text-white placeholder-gray-600 focus:outline-none transition-all duration-300 group-hover:border-red/20 ${
                        errors.name
                          ? 'border-red/50 focus:border-red'
                          : 'border-white/20 focus:border-red'
                      }`}
                      placeholder="Your name"
                      required
                    />
                    {errors.name && <p className="text-xs text-red mt-1 animate-pulse">{errors.name}</p>}
                 </div>
                  <div className="space-y-2 group">
                    <label className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-transparent border-b-2 py-3 text-white placeholder-gray-600 focus:outline-none transition-all duration-300 group-hover:border-red/20 ${
                        errors.email
                          ? 'border-red/50 focus:border-red'
                          : 'border-white/20 focus:border-red'
                      }`}
                      placeholder="your@email.com"
                      required
                    />
                    {errors.email && <p className="text-xs text-red mt-1 animate-pulse">{errors.email}</p>}
                 </div>
               </div>
                <div className="space-y-2 group">
                  <label className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full bg-transparent border-b-2 py-3 text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none group-hover:border-red/20 ${
                      errors.message
                        ? 'border-red/50 focus:border-red'
                        : 'border-white/20 focus:border-red'
                    }`}
                    placeholder="Tell me about your project..."
                    required
                  />
                  {errors.message && <p className="text-xs text-red mt-1 animate-pulse">{errors.message}</p>}
               </div>
                <button
                  type="submit"
                  disabled={submitStatus.type === 'loading'}
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red to-red/80 text-black font-medium hover:from-white hover:to-white/80 transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-red/50 disabled:opacity-50 disabled:cursor-not-allowed hover-lift"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-0 transition-transform" />
                  <span className="text-sm font-medium">
                    {submitStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
              </form>
           </div>

            {/* Right - Contact Info */}
            <div className="relative group">
              <div className="contact-card relative bg-gradient-to-br from-dark-100/70 to-dark-200/40 backdrop-blur-md border border-white/10 rounded-xl p-10 space-y-10 hover:border-red/40 hover:shadow-2xl hover:shadow-red/30 transition-all duration-500 hover-lift overflow-hidden">
               {/* Background glow */}
               <div className="absolute inset-0 bg-gradient-to-br from-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

               <h3 className="font-display text-2xl text-white relative z-10">Contact Information</h3>
               
               <div className="space-y-6 relative z-10">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="contact-item group flex items-start gap-4 cursor-pointer transition-all duration-300 hover:-translate-x-1"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-dark-200 to-dark-100 rounded-lg flex items-center justify-center group-hover:from-red/20 group-hover:to-red/5 transition-all duration-300 flex-shrink-0 group-hover:scale-110 hover-glow">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-red transition-all duration-300 group-hover:rotate-12" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">{label}</div>
                        <div className="text-white font-medium group-hover:text-red group-hover:translate-x-1 transition-all duration-300">{value}</div>
                      </div>
                    </a>
                  ))}
               </div>

               {/* Decorative Arrow */}
               <svg
                 className="absolute -bottom-4 -right-4 w-24 h-24 text-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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

               {/* Corner accents */}
               <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             </div>

             {/* Availability Badge */}
             <div className="mt-8 group flex items-center gap-3 px-4 py-3 bg-dark-100/50 border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all duration-300">
               <span className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
               </span>
               <span className="text-gray-400 group-hover:text-gray-300 text-sm transition-colors duration-300">Available for new projects</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

