import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Brain, 
  Gamepad2, 
  Wrench, 
  Cpu 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import '../styles/Skills.css';

const iconMap = {
  code: Code2,
  layout: Layout,
  server: Server,
  brain: Brain,
  gamepad: Gamepad2,
  wrench: Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, tools, frameworks, and technologies I work with.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <div key={category.title} className="skill-category-card">
                <div className="skill-cat-header">
                  <div className="skill-cat-icon">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="skill-cat-title">{category.title}</h3>
                </div>

                <div className="skill-badges-wrap">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      <span className="skill-dot"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

