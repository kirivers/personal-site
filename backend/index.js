require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// Define Message Schema
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Simple Test Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my Node.js backend!' });
});

// Fetch projects
app.get('/api/projects', (req, res) => {
    const projects = [
        { id: 1, name: 'Iris Recognition', path: '/projects/project1', skills:['Python', 'Statistics'], description:'Implementing Personal Identification Based on Iris Texture Analysis (2003)', githubLink: 'https://github.com/kirivers/IrisRecognition' },
        { id: 2, name: 'Stop Sign Detection', path: '/projects/project2', skills:['Python'], description:' Detecting the stop sign in an image using k-means algorithm', githubLink: 'https://github.com/kirivers/StopSignDetection'  },
        { id: 3, name: 'Face Recognition', path: '/projects/project3', skills:['Python', 'scikit'], description:'Performing image segmentation and facial recognition using knn ', githubLink: 'https://github.com/kirivers/FaceRecognition'  },
        { id: 4, name: 'SVHN CNN', path: '/projects/project4', skills:['Python', 'scikit', 'Torch'], description:'Parsing MATLAB\'s SVHN with a CNN built via PyTorch', githubLink: 'https://github.com/kirivers/SVHNCNN'  },
        { id: 5, name: 'GPT Model', path: '/projects/project5', skills:['Python', 'Torch' ], description:'Implementing a GPT style model for text generation using PyTorch at the character level', githubLink: 'https://github.com/kirivers/GPT-by-Character'  },
        { id: 6, name: 'This website', path: '/projects/project6', skills:['JavaScript', 'Node.js', 'React'], description:'My personal site.', githubLink: 'https://github.com/kirivers/personal-site'  }
    ];
    res.json(projects);
});

// POST route to save contact form messages
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.status(200).json({ success: 'Message saved successfully!' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'Failed to save message' });
    }
});

// GET route to fetch messages (secure this in production)
app.get('/api/messages', async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
