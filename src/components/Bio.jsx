import React, { useState } from "react";

const Bio = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bio-container">
      <div className="bio-content">
        {/* Bio Text */}
        <p>
          I recently graduated with my Masters from Columbia University, where I specialized in Data Science and Machine Learning. I grew up on the north shore of Massachusetts, and I love the outdoors, art, and my computers.
        </p>

        {/* "More about me" toggle button */}
        <button className="more-about-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "More About Me"}
        </button>

        {/* Expandable content */}
        <div className={`expanded-text ${expanded ? "show" : ""}`}>
          <p>
            I worked briefly as a Junior Software Engineer at DEKA Research and Development. There I constructed the frontend for several medical devices in use by thousands of patients. I ensured that both the patients, and the device engineers at DEKA could monitor performance, as any malfunction could have been life-threatening.
          </p>
          <p>
            I often code in Python, and I also use R, SQL, Java, Javascript, and Typescript. At Columbia, I took courses like Machine Learning, Applied Machine Learning, Natural Language Processing, and Computer Vision; now I can pick the right model for the job, build it from scratch or with libraries, tune it to perfection, and solve any problem you can throw at me.
          </p>
          <p>
            I received my undergraduate degree in Computer Science from Middlebury College, so my coding background is robust. I also majored in English at Middlebury, which improves the clarity of my documentation and to become an adept technical communicator. Consequently, I taught numerous Middlebury faculty how to use platforms like Zoom, Panopto, and Canvas during the COVID transition online.
          </p>
          <p>
            I like to say that my biggest strength is my humility (oxymoron, I know). The more knowledge and skills I accrue, the more I learn just how little I know. I am always seeking to improve my methods and my results, and I never believe that I already have all of the answers.
          </p>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="profile-container">
        <img src="/profile2.jpeg" alt="Kaylen's Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default Bio;
