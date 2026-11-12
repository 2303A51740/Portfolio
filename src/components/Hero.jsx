import React from 'react';
import { Mail, FolderGit2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import '../styles/Hero.css';

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-status-dot"></span>
            <span>B.Tech CSE Undergraduate &bull; SR University</span>
          </div>

          <p className="hero-greeting">Hello, I am</p>
          
          <h1 className="hero-name">
            <span className="gradient-text">{personalInfo.fullName}</span>
          </h1>

          <h2 className="hero-title">
            <span>Computer Science and Engineering Student</span>
            <span className="hero-title-separator">|</span>
            <span>Developer</span>
            <span className="hero-title-separator">|</span>
            <span>Technology Enthusiast</span>
          </h2>

          <p className="hero-description">
            {personalInfo.heroDescription}
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => handleScroll('projects')}
            >
              <span>View Projects</span>
              <FolderGit2 size={18} />
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => handleScroll('contact')}
            >
              <span>Contact Me</span>
              <Mail size={18} />
            </button>
          </div>

          {/* Quick Profile Links */}
          <div className="hero-socials">
            <a 
              href={personalInfo.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social-btn"
              title="GitHub Profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <a 
              href={personalInfo.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social-btn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Focus Area Badges */}
          <div className="hero-highlights">
            <div className="hero-highlight-card">
              <div className="hero-highlight-label">Primary Specialization</div>
              <div className="hero-highlight-val">Computer Science & Engineering</div>
            </div>
            <div className="hero-highlight-card">
              <div className="hero-highlight-label">Core Interests</div>
              <div className="hero-highlight-val">Game Dev, AI & Full-Stack</div>
            </div>
            <div className="hero-highlight-card">
              <div className="hero-highlight-label">Academic Institution</div>
              <div className="hero-highlight-val">SR University</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
