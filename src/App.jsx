import React, { useEffect, useState } from 'react';

import './App.css';
import Bio from './components/Bio'
import ContactForm from './components/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const skillColors = {
  Python: "#3572A5",
  Statistics: "#61DAFB",
  scikit: "#E76F00",
  Torch: "#E70000",

};

const Home = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);


  return (
    <div className='App'>
      {/* Main Page */}
      <main>
        <h2>kaylen rivers</h2>
        <h1>Hi, I'm Kaylen</h1>

        {/* Profile Picture */}
        <div className="profile-container">
            <img src="/profile2.jpeg" alt="Kaylen's Profile" className="profile-pic" />
        </div>

        <Bio />

         {/* Social Media Links */}
         <ul className="social-container">
          <li>
            <a href="https://www.linkedin.com/in/kaylen-rivers/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>

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
        {/* Social Media Links */}
        <ul className="social-container">
          <li>
            <a href="https://github.com/kirivers" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>

        <h1>Get in Touch</h1>
        <p> Want to reach out? Please leave your name, email, and a message down below.</p>
        <ContactForm />
        </main>

        
    </div>
  );
};

export default Home;