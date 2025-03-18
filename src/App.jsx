import React, { useEffect, useState } from 'react';

import './css/App.css';
import './css/Profile.css';
import './css/Project.css';
import Bio from './components/Bio'
import ContactForm from './components/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const skillColors = {
  Python: "#3572A5",
  Statistics: "#61DAFB",
  scikit: "#E76F00",
  Torch: "#E70000",
  'Node.js': "#7D32A8",
  JavaScript: "#32A885",
  React: "#66A832"

};

const Home = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://personal-site-production-9024.up.railway.app/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);


  return (
    <div className='App'>
      {/* Main Page */}
      <main>
        
        <div className="header-container">
          <h2>kaylen rivers</h2>
          <ul className="social-container">
            <li>
              <a href="https://www.linkedin.com/in/kaylen-rivers/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/kirivers" target="_blank" rel="noopener noreferrer" className="github-icon-top">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>

        <h1>Hi, I'm Kaylen</h1>
        <div className='profile'>
          <Bio />

        </div>

        <h1>Projects</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link" 
            >
              <div className="project-box">
                <div className="project-name">{project.name}</div>
                <div className="project-description">{project.description}</div>

                <div className="skills-container">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="skill-label" style={{ backgroundColor: skillColors[skill] || '#3498db' }}>
                      {skill}
                    </span>
                  
                  ))}
                </div>
              {/* GitHub icon (only if project has a GitHub link) */}
              {project.githubLink && (
                <div className="github-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
              )}
              
              </div>
            </a>
          ))}
        </div>

        </main>

        
    </div>
  );
};

export default Home;