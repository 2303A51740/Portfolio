import React from 'react';
import { User, Gamepad2, Brain, Code2, GraduationCap, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            An overview of my academic journey, passion for technology, and core technical pursuits.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Statement Card with exact requested introduction */}
          <div className="about-main-card">
            <div className="about-quote-mark">&ldquo;</div>
            <p className="about-paragraph">
              {personalInfo.aboutText}
            </p>

            <div className="about-meta-grid">
              <div className="about-meta-item">
                <span className="about-meta-label">Current Institution</span>
                <span className="about-meta-value">SR University</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-label">Degree Focus</span>
                <span className="about-meta-value">B.Tech in Computer Science</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-label">Primary Fields</span>
                <span className="about-meta-value">AI, NLP & Game Mechanics</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-label">Engineering Ethos</span>
                <span className="about-meta-value">Idea to Working Software</span>
              </div>
            </div>
          </div>

          {/* Pillars of Interest */}
          <div className="about-pillars">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Gamepad2 size={24} />
              </div>
              <div>
                <h3 className="pillar-title">Game Mechanics Design</h3>
                <p className="pillar-desc">
                  Designing engaging player experiences, responsive 3D locomotion, and challenging enemy AI algorithms with Unity and C#.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Brain size={24} />
              </div>
              <div>
                <h3 className="pillar-title">AI & Natural Language Processing</h3>
                <p className="pillar-desc">
                  Exploring machine learning models, text classification, and emotional sentiment analysis for practical, compassionate systems.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Code2 size={24} />
              </div>
              <div>
                <h3 className="pillar-title">Modern Software Development</h3>
                <p className="pillar-desc">
                  Building structured, performant web applications and backend APIs using React, Node.js, FastAPI, and robust DevOps workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

