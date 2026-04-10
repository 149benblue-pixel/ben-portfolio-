import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Trophy, 
  Users, 
  Mail, 
  Phone, 
  Instagram, 
  Twitter, 
  ArrowUpRight,
  Award,
  Star,
  Zap,
  Layout,
  MessageSquare
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
}

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Data ---
const SKILLS = [
  { name: 'Leadership', level: 95, icon: <Users className="w-5 h-5" /> },
  { name: 'Teamwork', level: 98, icon: <Users className="w-5 h-5" /> },
  { name: 'Communication', level: 90, icon: <MessageSquare className="w-5 h-5" /> },
  { name: 'Organization', level: 92, icon: <Layout className="w-5 h-5" /> },
  { name: 'Creativity', level: 88, icon: <Zap className="w-5 h-5" /> },
];

const PROJECTS: Project[] = [
  {
    title: 'Olodo Hot Stars Management',
    description: 'Leading team operations, player coordination, and strategic planning for match days.',
    category: 'Team Management',
    image: 'https://picsum.photos/seed/football1/800/600',
  },
  {
    title: 'Match Organization',
    description: 'Coordinating local tournaments and friendly matches, ensuring logistics and officiating are top-notch.',
    category: 'Event Planning',
    image: 'https://picsum.photos/seed/football2/800/600',
  },
  {
    title: 'Brand Promotions',
    description: 'Creating digital posters and social media campaigns to increase team visibility and fan engagement.',
    category: 'Marketing',
    image: 'https://picsum.photos/seed/football3/800/600',
  },
];

const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Tournament Champions',
    description: 'Led Olodo Hot Stars to victory in the Regional Community Cup 2025.',
    icon: <Trophy className="w-6 h-6 text-brand-yellow" />,
  },
  {
    title: 'Community Leader Award',
    description: 'Recognized for outstanding contributions to youth sports development.',
    icon: <Award className="w-6 h-6 text-brand-yellow" />,
  },
  {
    title: 'Match MVP',
    description: 'Consistent high-performance player and strategic on-field leader.',
    icon: <Star className="w-6 h-6 text-brand-yellow" />,
  },
];

const GALLERY_IMAGES = [
  'https://picsum.photos/seed/match1/600/600',
  'https://picsum.photos/seed/match2/600/600',
  'https://picsum.photos/seed/match3/600/600',
  'https://picsum.photos/seed/match4/600/600',
  'https://picsum.photos/seed/match5/600/600',
  'https://picsum.photos/seed/match6/600/600',
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
      scrolled ? "bg-brand-black/90 backdrop-blur-md py-4 border-brand-white/10" : "bg-transparent py-6 border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display text-2xl tracking-tighter text-brand-yellow">
          BEN BLUE<span className="text-brand-white">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium uppercase tracking-widest hover:text-brand-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-black border-b border-brand-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium uppercase tracking-widest hover:text-brand-yellow"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-brand-yellow/30 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6">
            Available for new opportunities
          </span>
          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl leading-[0.85] mb-8">
            BEN <span className="text-brand-yellow">BLUE</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-brand-white/70 max-w-lg mb-10 leading-relaxed">
            Creative. Driven. Passionate about growth and success. Building communities and winning matches.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#work" 
              className="group relative px-8 py-4 bg-brand-yellow text-brand-black font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-12"
            >
              <span className="relative z-10">View My Work</span>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-brand-white/20 hover:border-brand-yellow hover:text-brand-yellow transition-all font-bold uppercase tracking-widest"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full"
        >
          <div className="absolute inset-0 border-2 border-brand-yellow/20 translate-x-4 translate-y-4 -z-10" />
          <div className="w-full h-full bg-brand-yellow/10 overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/benblue/1000/1200" 
              alt="Ben Blue" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8">
              <p className="font-display text-4xl text-brand-yellow">#FutaSikuZote</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-white text-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-[10rem] sm:text-[15rem] font-display text-brand-black/5 leading-none select-none">
              01
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl mb-8 relative z-10">
              BEYOND THE <span className="text-brand-yellow bg-brand-black px-4">PITCH</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-brand-black/80">
              <p>
                I am Ben Blue, a creative individual driven by a deep passion for growth, leadership, and community impact. My journey is defined by a relentless pursuit of excellence, whether I'm managing a football team or organizing community events.
              </p>
              <p>
                As a core member of <span className="font-bold text-brand-black">Olodo Hot Stars</span>, I've learned that success isn't just about individual talent—it's about teamwork, dedication, and the ambition to lift everyone around you.
              </p>
              <p>
                My approach combines strategic thinking with creative execution. I believe in the power of sports to unite people and foster leadership skills that transcend the field.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/sports1/400/500" alt="Sports" className="w-full h-48 sm:h-64 object-cover rounded-2xl" referrerPolicy="no-referrer" />
              <div className="p-4 sm:p-8 bg-brand-yellow rounded-2xl">
                <p className="font-display text-2xl sm:text-4xl mb-2">10+</p>
                <p className="text-[10px] sm:text-sm font-bold uppercase tracking-widest">Events Organized</p>
              </div>
            </div>
            <div className="space-y-4 pt-8 sm:pt-12">
              <div className="p-4 sm:p-8 bg-brand-black text-brand-white rounded-2xl">
                <p className="font-display text-2xl sm:text-4xl mb-2">5yrs</p>
                <p className="text-[10px] sm:text-sm font-bold uppercase tracking-widest">Leadership Exp</p>
              </div>
              <img src="https://picsum.photos/seed/sports2/400/500" alt="Sports" className="w-full h-48 sm:h-64 object-cover rounded-2xl" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-y border-brand-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl mb-4">CORE STRENGTHS</h2>
          <p className="text-brand-white/60 uppercase tracking-widest text-[10px] sm:text-sm">The foundation of my professional and personal success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-brand-white/10 hover:border-brand-yellow/50 transition-all group"
            >
              <div className="w-12 h-12 bg-brand-yellow/10 flex items-center justify-center mb-6 group-hover:bg-brand-yellow group-hover:text-brand-black transition-all">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{skill.name}</h3>
              <div className="h-1 w-full bg-brand-white/5 relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-0 left-0 h-full bg-brand-yellow"
                />
              </div>
              <p className="mt-2 text-right text-xs font-bold text-brand-yellow">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl leading-none">SELECTED<br/><span className="text-brand-yellow">WORKS</span></h2>
          </div>
          <p className="max-w-md text-brand-white/60 text-base sm:text-lg">
            A showcase of my management and creative efforts with Olodo Hot Stars and community initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center text-brand-black">
                    <ArrowUpRight />
                  </div>
                </div>
              </div>
              <p className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-yellow transition-colors">{project.title}</h3>
              <p className="text-brand-white/60 line-clamp-2">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  return (
    <section className="py-24 bg-brand-yellow text-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl sm:text-6xl mb-6 leading-none">MILESTONES &<br/>RECOGNITION</h2>
            <p className="font-bold uppercase tracking-widest text-xs sm:text-sm opacity-70">Proof of dedication and hard work</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.title} className="p-8 bg-brand-black text-brand-white rounded-3xl">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-brand-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-center">MOMENTS IN MOTION</h2>
      </div>
      
      <div className="flex gap-4 animate-marquee whitespace-nowrap">
        {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
          <div key={i} className="w-72 md:w-96 flex-shrink-0 aspect-square overflow-hidden rounded-2xl border-4 border-brand-white/5 hover:border-brand-yellow transition-all duration-500">
            <img 
              src={img} 
              alt={`Gallery ${i}`} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-white text-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl mb-8 leading-none">LET'S<br/><span className="text-brand-yellow bg-brand-black px-4">CONNECT</span></h2>
            <p className="text-lg sm:text-xl mb-12 text-brand-black/70">
              Whether you want to discuss a project, a match, or just say hello, I'm always open to new connections.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:149benblue@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-brand-black text-brand-white flex items-center justify-center rounded-full group-hover:bg-brand-yellow group-hover:text-brand-black transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-bold">149benblue@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-brand-black text-brand-white flex items-center justify-center rounded-full group-hover:bg-brand-yellow group-hover:text-brand-black transition-all">
                  <Phone size={20} />
                </div>
                <span className="text-lg font-bold">+234 XXX XXX XXXX</span>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 border-2 border-brand-black flex items-center justify-center rounded-full hover:bg-brand-black hover:text-brand-white transition-all">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-6 bg-brand-black/5 p-8 md:p-12 rounded-3xl border border-brand-black/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-brand-black/20 py-3 focus:border-brand-black outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-brand-black/20 py-3 focus:border-brand-black outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b-2 border-brand-black/20 py-3 focus:border-brand-black outline-none transition-all resize-none" placeholder="Tell me about your project..." />
            </div>
            <button className="w-full py-5 bg-brand-black text-brand-white font-bold uppercase tracking-widest hover:bg-brand-yellow hover:text-brand-black transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-brand-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-display text-2xl tracking-tighter">
          BEN BLUE<span className="text-brand-yellow">.</span>
        </div>
        <div className="text-sm text-brand-white/40 font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} Ben Blue. All Rights Reserved.
        </div>
        <div className="font-display text-xl text-brand-yellow">
          #FutaSikuZote
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
