# Md Mahabub Rana Saikat - Professional Portfolio Website

A modern, animated portfolio website built with React, TypeScript, Vite, Tailwind CSS, and GSAP animations. Showcasing projects, skills, education, and professional experience of a Software Engineering student from SUST.

**Live Demo**: [Visit Portfolio](https://mahabubranasaikat.com) (Coming Soon)

---

## 🎯 Features

### 🎨 Modern Design
- **Sleek Dark Theme**: Black background with red accent colors
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Responsive Layout**: Fully responsive design for mobile, tablet, and desktop
- **Professional UI**: Clean, minimalist interface with modern typography

### 📱 Sections
1. **Hero Section**: Eye-catching landing with profile image and social links
2. **About Me**: Professional profile, skills, and interests
3. **Education**: Interactive timeline with full academic information
   - B.Sc. Software Engineering (SUST - IICT, Current)
   - H.S.C. (Govt. Shah Sultan College, 2021)
   - S.S.C. (Naogaon Zilla School, 2019)
4. **Services**: 4 service cards highlighting expertise areas
5. **Works**: Portfolio of featured projects with descriptions
6. **Interests**: 6 passion areas in tech and development
7. **Contact**: Contact form with validation and Formspree integration
8. **Footer**: Navigation and social media links

### ✨ Advanced Features
- **Form Validation**: Real-time validation with error messages
- **Email Integration**: Formspree-powered contact form
- **SEO Optimized**: Meta tags, Open Graph, JSON-LD structured data
- **Scroll Animations**: Timeline animations and element reveals
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized bundle size and fast load times

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animations library

### Libraries & Tools
- **Lucide React** - Beautiful SVG icons
- **Axios** - HTTP client for form submission
- **ScrollTrigger** - GSAP plugin for scroll animations

### Development & Build
- **TypeScript** - Static type checking
- **ESLint** - Code quality
- **PostCSS** - CSS preprocessing
- **Git** - Version control

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm
- Git

### Clone & Install
```bash
# Clone the repository
git clone https://github.com/mahabubranasaikat/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development
```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Project Structure
```
portfolio/
├── src/
│   ├── sections/           # Page sections (Hero, About, Education, etc.)
│   ├── components/
│   │   └── ui/            # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # React entry point
│   └── index.css          # Global styles
├── public/                # Static assets
│   └── hero-profile.jpg   # Profile image
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies
```

---

## 🎨 Design System

### Color Palette
- **Blackish-Red (Primary)**: `#d32f2f` - Main accent color throughout
- **Dark Red Range**: `#1f0606` to `#4a0e0e` - Subtle dark variations
- **Orange-Dark**: `#d97706` - Secondary accent
- **Amber-Dark**: `#b45309` - Tertiary accent
- **Black Background**: `#0a0a0a` - Main background
- **Dark Variants**:
  - `dark-100`: `#1a1a1a` - Card backgrounds
  - `dark-200`: `#2a2a2a` - Element backgrounds

### Color Gradients
- **Primary Gradient**: Blackish-Red → Orange-Dark
- **Secondary Gradients**: Red → Amber/Orange variations
- **Hover Effects**: All use blackish-red (#d32f2f) with transparency

### Typography
- **Display Font**: Bebas Neue (headings)
- **Body Font**: Poppins/Inter (content)

### Spacing & Layout
- **Section Padding**: `py-28` to `py-32`
- **Horizontal Padding**: `px-6 sm:px-12 lg:px-20`
- **Gap Spacing**: `gap-6` to `gap-12`

### Hover Effects
```css
/* Standard card hover */
border border-white/10
→ hover:border-red/50 (blackish-red)
→ hover:shadow-2xl hover:shadow-red/25
→ hover:-translate-y-1
```

---

## 📧 Contact Form Setup

### Formspree Integration
The contact form uses Formspree for email delivery.

**Setup Steps:**
1. Visit [Formspree.io](https://formspree.io)
2. Create a new form (free account)
3. Get your form ID
4. Update `src/sections/Contact.tsx` line 155:
   ```typescript
   const formspreeId = 'xdkozbnq'; // Replace with your actual ID
   ```

### Form Features
- **Real-time Validation**: Name, email, message validation
- **Error Messages**: Clear feedback for invalid inputs
- **Loading State**: Disabled button during submission
- **Success/Error Notifications**: User feedback after submission
- **Field Clearing**: Form clears on successful submission

---

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set branch to `main` and folder to `/(root)`

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Deploy automatically on push

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` (default)
- **Tablet**: `640px - 1024px` (sm, md)
- **Desktop**: `> 1024px` (lg)

All sections are optimized for each breakpoint with proper spacing and layout adjustments.

---

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Focusable elements
- **Color Contrast**: WCAG AA compliant
- **Reduced Motion**: Respects `prefers-reduced-motion`

---

## 🔍 SEO Features

### Meta Tags
- Descriptive title and meta description
- Open Graph tags for social sharing
- Twitter Card tags for Twitter preview
- Canonical URL to prevent duplicate content

### Structured Data
- JSON-LD schema for person/professional profile
- Indexed social media profiles
- Contact information structure

### Performance
- Optimized images with preload hints
- DNS prefetch for external resources
- Minified CSS and JavaScript
- Fast load times (< 2s)

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# If 5173 is in use, Vite will automatically try:
# 5174, 5175, 5176, etc.
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
```bash
# Regenerate TypeScript cache
rm -rf tsconfig.*.tsbuildinfo
npm run build
```

---

## 📝 Environment Variables

Currently, no environment variables are required. However, for Formspree:

```bash
# Optional: Configure form ID in Contact.tsx
VITE_FORMSPREE_ID=your-form-id
```

---

## 🎓 Academic Information

### Current Education
- **Degree**: B.Sc. in Software Engineering
- **University**: Shahjalal University of Science and Technology (SUST)
- **Department**: Institute of Information and Communication Technology (IICT)
- **Location**: Sylhet, Bangladesh
- **Year**: 3rd Year (2023–Present)

### Previous Education
- **H.S.C.**: Government Shah Sultan College, Bogra (2019–2021) | GPA: 5.0
- **S.S.C.**: Naogaon Zilla School, Naogaon (2014–2019) | GPA: 5.0

---

## 📞 Contact Information

- **Email**: mahabubranasaikat@gmail.com
- **Phone**: +8801753610727
- **Location**: Sylhet, Bangladesh
- **GitHub**: [mahabubranasaikat](https://github.com/mahabubranasaikat)
- **LinkedIn**: [mahabubranasaikat](https://linkedin.com/in/mahabubranasaikat)
- **Twitter**: [@mahbubrnasaikat](https://twitter.com/mahbubrnasaikat)

---

## 📄 CV/Resume

Download CV: [CV.pdf](./CV.pdf)

---

## 🤝 Contributing

This is a personal portfolio. However, feel free to fork and customize for your own use!

---

## 📜 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **GSAP** for amazing animations
- **Tailwind CSS** for utility-first styling
- **React Community** for excellent tooling
- **Formspree** for email handling

---

## 📈 Future Enhancements

Planned features for upcoming updates:

- [ ] Dark/Light mode toggle
- [ ] Blog section
- [ ] Project filtering by technology
- [ ] Testimonials section
- [ ] Achievement badges
- [ ] Newsletter subscription
- [ ] Advanced analytics
- [ ] Progressive Web App (PWA) support

---

## 🎯 Performance Metrics

- **Build Size**: ~370 KB (gzipped: ~120 KB)
- **Load Time**: < 2 seconds
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices)

---

## 📧 Support

For questions or feedback, reach out via email or social media links above.

---

**Last Updated**: February 2025

Made with ❤️ by Md Mahabub Rana Saikat
