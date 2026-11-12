import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import '../styles/Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Feel free to reach out for project collaborations, software opportunities, or tech discussions.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card">
            <div>
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-desc">
                I am actively exploring technology opportunities and collaborative engineering projects. You can contact me via email or connect with me on GitHub and LinkedIn.
              </p>

              <div className="contact-methods">
                {/* Email Item (Editable Placeholder with copy button) */}
                <div 
                  className="contact-method-item"
                  style={{ cursor: 'pointer' }}
                  onClick={handleCopyEmail}
                  title="Click to copy email"
                >
                  <div className="contact-method-icon">
                    <Mail size={22} />
                  </div>
                  <div className="contact-method-details" style={{ flexGrow: 1 }}>
                    <span className="contact-method-label">Email Address (Editable Placeholder)</span>
                    <span className="contact-method-value">{personalInfo.email}</span>
                    <span className="editable-hint">Click to copy or edit in portfolioData.js</span>
                  </div>
                  <button 
                    type="button" 
                    className="btn-outline" 
                    style={{ padding: '0.4rem 0.75rem', fontSize: '0.78rem' }}
                    onClick={handleCopyEmail}
                  >
                    {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method-item"
                  title="Connect on LinkedIn"
                >
                  <div className="contact-method-icon" style={{ background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8' }}>
                    <LinkedinIcon size={22} />
                  </div>
                  <div className="contact-method-details">
                    <span className="contact-method-label">LinkedIn Profile</span>
                    <span className="contact-method-value">gullapudi-bhargav-guptha</span>
                  </div>
                  <ExternalLink size={16} style={{ marginLeft: 'auto', opacity: 0.7 }} />
                </a>

                {/* GitHub Item */}
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method-item"
                  title="View GitHub Profile"
                >
                  <div className="contact-method-icon" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#ffffff' }}>
                    <GithubIcon size={22} />
                  </div>
                  <div className="contact-method-details">
                    <span className="contact-method-label">GitHub Profile</span>
                    <span className="contact-method-value">2303A51740</span>
                  </div>
                  <ExternalLink size={16} style={{ marginLeft: 'auto', opacity: 0.7 }} />
                </a>
              </div>
            </div>

            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              &bull; Based in India &bull; Open to Remote & On-Site Opportunities
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-card">
            {submitted && (
              <div className="form-success-banner">
                <Check size={18} />
                <span>Thank you! Your email client has been prepared with your message.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="e.g. Project Discussion / Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
