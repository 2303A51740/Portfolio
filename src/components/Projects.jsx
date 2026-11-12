import React from 'react';
import { 
  FolderGit2, 
  FileText, 
  PlayCircle, 
  ExternalLink, 
  Sparkles, 
  Gamepad2, 
  BrainCircuit 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import '../styles/Projects.css';

export default function Projects() {
  const [zombieRunner, careMinds] = projectsData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Highlighting core development projects spanning interactive game mechanics design and natural language processing.
          </p>
        </div>

        <div className="projects-grid">
          {/* Project 1: Game Mechanics Design and Development – Zombie Runner */}
          <article className="project-card">
            <div>
              <div className="project-badge-row">
                <span className="project-category-tag">
                  <Gamepad2 size={13} />
                  Game Development & Design
                </span>
                <span className="project-status-tag">
                  Completed Project
                </span>
              </div>

              <h3 className="project-title">
                {zombieRunner.title}
              </h3>

              <p className="project-desc">
                {zombieRunner.description}
              </p>

              <div className="project-tags-wrap">
                {zombieRunner.tags.map((tag) => (
                  <span key={tag} className="project-tech-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Three buttons in exact required order */}
            <div className="project-buttons-column">
              {/* Button 1: GitHub Repository */}
              <a 
                href="https://github.com/2303A51740/Zombie-Runner"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn btn-github"
                title="View Zombie Runner on GitHub"
              >
                <GithubIcon size={18} />
                <span>GitHub Repository</span>
                <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.7 }} />
              </a>

              {/* Button 2: Project Documentation */}
              <a 
                href="https://drive.google.com/drive/folders/1hZuKMarMQcq74tY_K3V2H7eeV4MRm1F_?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn btn-docs"
                title="View Zombie Runner Project Documentation"
              >
                <FileText size={18} />
                <span>Project Documentation</span>
                <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.7 }} />
              </a>

              {/* Button 3: Watch Gameplay Video */}
              <a 
                href="https://lnkd.in/p/gRS2iNiR"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn btn-video"
                title="Watch Zombie Runner Gameplay Video"
              >
                <PlayCircle size={18} />
                <span>Watch Gameplay Video</span>
                <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.7 }} />
              </a>
            </div>
          </article>

          {/* Project 2: CareMinds – NLP Project */}
          <article className="project-card">
            <div>
              <div className="project-badge-row">
                <span className="project-category-tag" style={{ color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.25)', background: 'rgba(59, 130, 246, 0.12)' }}>
                  <BrainCircuit size={13} />
                  AI & Natural Language Processing
                </span>
                <span className="project-status-tag" style={{ color: '#a78bfa', borderColor: 'rgba(167, 139, 250, 0.3)', background: 'rgba(167, 139, 250, 0.1)' }}>
                  Active NLP Initiative
                </span>
              </div>

              <h3 className="project-title">
                {careMinds.title}
              </h3>

              <p className="project-desc">
                {careMinds.description}
              </p>

              <div className="project-tags-wrap">
                {careMinds.tags.map((tag) => (
                  <span key={tag} className="project-tech-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Clean status notice - Strictly NO fake links or dummy buttons */}
            <div className="careminds-notice">
              <Sparkles size={18} color="#a78bfa" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#ffffff', display: 'block', marginBottom: '2px' }}>Project Phase</strong>
                <span>Currently in active architecture and model fine-tuning stage. Repository & documentation will be made public upon release.</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
