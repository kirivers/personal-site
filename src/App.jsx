import './css/App.css';
import './css/Profile.css';
import './css/Project.css';
import Bio from './components/Bio'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const skillColors = {
  Python: "#3572A5",
  Statistics: "#61DAFB",
  scikit: "#E76F00",
  Torch: "#E70000",
  'Node.js': "#7D32A8",
  JavaScript: "#32A885",
  React: "#66A832"
};

const projects = [
  { id: 1, name: 'Iris Recognition', path: '/projects/project1', skills:['Python', 'Statistics'], description:'Implementing Personal Identification Based on Iris Texture Analysis (2003)', githubLink: 'https://github.com/kirivers/IrisRecognition' },
  { id: 2, name: 'Stop Sign Detection', path: '/projects/project2', skills:['Python'], description:' Detecting the stop sign in an image using k-means algorithm', githubLink: 'https://github.com/kirivers/StopSignDetection'  },
  { id: 3, name: 'Face Recognition', path: '/projects/project3', skills:['Python', 'scikit'], description:'Performing image segmentation and facial recognition using knn ', githubLink: 'https://github.com/kirivers/FaceRecognition'  },
  { id: 4, name: 'SVHN CNN', path: '/projects/project4', skills:['Python', 'scikit', 'Torch'], description:'Parsing MATLAB\'s SVHN with a CNN built via PyTorch', githubLink: 'https://github.com/kirivers/SVHNCNN'  },
  { id: 5, name: 'GPT Model', path: '/projects/project5', skills:['Python', 'Torch' ], description:'Implementing a GPT style model for text generation using PyTorch at the character level', githubLink: 'https://github.com/kirivers/GPT-by-Character'  },
  { id: 6, name: 'This website', path: '/projects/project6', skills:['JavaScript', 'Node.js', 'React'], description:'My personal site.', githubLink: 'https://github.com/kirivers/personal-site'  }
];

const App = () => {
  return (
    <div className="App">
      {/* Main Page */}
      <main>
        
        <div className="header-container">
          <h2>kaylen rivers</h2>
          <ul className="social-container">
            <li>
              <a href="https://www.linkedin.com/in/kaylen-rivers/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                {/*<FontAwesomeIcon icon={faLinkedin} />*/}
              </a>
              <a href="https://github.com/kirivers" target="_blank" rel="noopener noreferrer" className="github-icon-top">
                {/*<FontAwesomeIcon icon={faGithub} />*/}
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
                  {/*<FontAwesomeIcon icon={faGithub} />*/}
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

export default App;
