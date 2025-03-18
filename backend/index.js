require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(express.json());


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

/*
// POST route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Configure Nodemailer transporter (e.g., using Gmail)
    const transporter = nodemailer.createTransport({
        service: 'gmail',  // Replace with your email service
        auth: {
            user: process.env.EMAIL,  // Store your email address securely in .env
            pass: process.env.EMAIL_PASSWORD,  // Store your email password securely in .env
        },
    });

    // Email options
    const mailOptions = {
        from: email,  // User's email (from the form)
        to: process.env.EMAIL,  // Your email address where the message will be sent
        subject: 'New Contact Form Submission',
        text: `Message from ${name} (${email}):\n\n${message}`,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});
*/

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         