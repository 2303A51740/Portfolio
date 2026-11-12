import React from 'react';
import { GraduationCap, MapPin, Award, Clock, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import '../styles/Education.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of my academic milestones, institutions, and scholastic achievements.
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((item) => (
            <div key={item.id} className="edu-card-wrapper">
              <div className={`edu-timeline-node ${item.isOngoing ? 'ongoing' : ''}`}>
                {item.isOngoing ? (
                  <Sparkles size={14} color="#10b981" />
                ) : (
                  <Award size={14} color="#a78bfa" />
                )}
              </div>

              <div className={`edu-card ${item.isOngoing ? 'ongoing' : ''}`}>
                <div className="edu-card-header">
                  <div className="edu-main-info">
                    <div className="edu-degree-row">
                      <h3 className="edu-degree">{item.degree}</h3>
                      {item.isOngoing && (
                        <span className="edu-badge-ongoing">
                          <Clock size={12} />
                          Currently Pursuing
                        </span>
                      )}
                      {item.highlight && (
                        <span className="edu-badge-ongoing" style={{ background: 'rgba(168, 85, 247, 0.15)', borderColor: 'rgba(168, 85, 247, 0.4)', color: '#c084fc' }}>
                          <Award size={12} />
                          {item.highlight}
                        </span>
                      )}
                    </div>

                    <div className="edu-branch">{item.branch}</div>

                    <div className="edu-institution">
                      <span>{item.institution}</span>
                      <span className="edu-location">
                        <MapPin size={13} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Score / GPA Display */}
                  <div className={`edu-score-pill ${item.isOngoing ? 'gpa' : item.score === '100%' ? 'perfect' : ''}`}>
                    <span className="score-label">{item.scoreType}</span>
                    <span className={`score-val ${item.isOngoing ? 'green' : item.score === '100%' ? 'purple' : 'highlight'}`}>
                      {item.score}
                    </span>
                  </div>
                </div>

                <p className="edu-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

