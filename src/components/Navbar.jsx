import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Sparkles } from 'lucide-react';
import '../styles/Navbar.css';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scrollspy logic
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a 
          href="#home" 
          className="nav-brand"
          onClick={(e) => handleNavClick(e, '#home')}
          title="Gullapudi Bhargava Subrahmanyam Guptha"
        >
          <div className="nav-brand-title">
            <span className="nav-brand-dot"></span>
            <span>G. Bhargava S. Guptha</span>
          </div>
          <span className="nav-brand-subtitle">Computer Science & Engineering</span>
        </a>

        {/* Desktop & Mobile Menu */}
        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="nav-cta-item">
              <a
                href="#contact"
                className="nav-cta-btn"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                <Send size={14} />
                <span>Get In Touch</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

