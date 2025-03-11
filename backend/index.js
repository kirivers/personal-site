/*require('dotenv').config();*/
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple Test Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my Node.js backend!' });
});

app.get('/api/projects', (req, res) => {
    const projects = [
        { id: 1, name: 'Iris Recognition', path: '/projects/project1', skills:['Python', 'Statistics'], description:'Implementing Personal Identification Based on Iris Texture Analysis (2003)', githubLink: 'https://github.com/kirivers/IrisRecognition' },
        { id: 2, name: 'Stop Sign Detection', path: '/projects/project2', skills:['Python'], description:' Detecting the stop sign in an image using k-means algorithm', githubLink: 'https://github.com/kirivers/StopSignDetection'  },
        { id: 3, name: 'Face Recognition', path: '/projects/project3', skills:['Python', 'scikit'], description:'Performing image segmentation and facial recognition using knn ', githubLink: 'https://github.com/kirivers/FaceRecognition'  },
        { id: 4, name: 'SVHN CNN', path: '/projects/project4', skills:['Python', 'scikit', 'Torch'], description:'Parsing MATLAB\'s SVHN with a CNN built via PyTorch', githubLink: 'https://github.com/kirivers/SVHNCNN'  },
        { id: 5, name: 'GPT Model', path: '/projects/project5', skills:['Python', 'Torch' ], description:'Implementing a GPT style model for text generation using PyTorch at the character level', githubLink: 'https://github.com/kirivers/GPT-by-Character'  },
        { id: 6, name: 'Project', path: '/projects/project6', skills:[], description:''  }
    ];
    res.json(projects);
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         