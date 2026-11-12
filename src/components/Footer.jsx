import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import '../styles/Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h4 className="footer-fullname">{personalInfo.fullName}</h4>
            <p className="footer-subtitle">{personalInfo.title}</p>
          </div>

          <div className="footer-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="footer-nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="footer-socials">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-btn"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-btn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </div>

          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
