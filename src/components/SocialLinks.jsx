import React from 'react';
import { ExternalLink, Share2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import '../styles/SocialLinks.css';

export default function SocialLinks() {
  return (
    <section className="social-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <Share2 size={14} />
            <span>Connect & Network</span>
          </div>
          <h2 className="section-title">
            Social <span className="gradient-text">Profiles</span>
          </h2>
          <p className="section-subtitle">
            Follow my technical contributions, open-source projects, and connect on professional networks.
          </p>
        </div>

        <div className="social-cards-grid">
          {/* GitHub Profile Card */}
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-profile-card github"
            title="Follow on GitHub: @2303A51740"
          >
            <div className="social-card-left">
              <div className="social-icon-wrapper">
                <GithubIcon size={26} />
              </div>
              <div className="social-info">
                <span className="social-name">GitHub</span>
                <span className="social-handle">@2303A51740</span>
              </div>
            </div>

            <div className="social-action-badge">
              <span>View Code</span>
              <ExternalLink size={14} />
            </div>
          </a>

          {/* Actual Personal LinkedIn Profile Card */}
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-profile-card linkedin"
            title="Connect on LinkedIn: Gullapudi Bhargav Guptha"
          >
            <div className="social-card-left">
              <div className="social-icon-wrapper" style={{ color: '#0ea5e9' }}>
                <LinkedinIcon size={26} />
              </div>
              <div className="social-info">
                <span className="social-name">LinkedIn Profile</span>
                <span className="social-handle">in/gullapudi-bhargav-guptha</span>
              </div>
            </div>

            <div className="social-action-badge">
              <span>Connect</span>
              <ExternalLink size={14} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
