import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactTyped as Typed } from "react-typed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faCube, faTools } from "@fortawesome/free-solid-svg-icons";

import "./about.css";

const Divider = ({ icon }) => {
  return (
    <div className="divider">
      <span className="line"></span>
      {icon && <i className={`icon ${icon}`}></i>}
      <span className="line"></span>
    </div>
  );
};

const PC = ({ title, imageUrl, githubUrl, liveUrl, liveUrl2 }) => {
  return (
    <div className="pc">
      <div className="imagC">
        <img src={imageUrl} alt={title} className="pi" />
        <div className="overlay">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="view-button"
          >
            View Github
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="view-button"
          >
            View Live
          </a>
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

const About = () => {
  const [popupSkill, setPopupSkill] = useState(null);

  const skillDescriptions = {
    HTML: "HTML, which stands for HyperText Markup Language, is the standard markup language for creating web pages. It's the foundation upon which websites are built, defining the structure and content of online documents.",
    CSS: "CSS, which stands for Cascading Style Sheets, is a stylesheet language used to describe the presentation and styling of a document written in a markup language, most commonly HTML or XML. It is a cornerstone technology of the World Wide Web, working alongside HTML and JavaScript",
    Java: "Java is a high-level, object-oriented programming language developed by Sun Microsystems (now part of Oracle) and released in 1995. It is widely recognized for its [Write Once, Run Anywhere] capability, which means that Java code compiled into bytecode can be executed on any device or operating system that has the Java Virtual Machine (JVM) installed.",
    PHP: "PHP, which stands for PHP: Hypertext Preprocessor, is a widely-used, open-source, general-purpose scripting language primarily designed for web development. It is especially suited for creating dynamic and interactive websites.",
    JavaScript: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language primarily known as the scripting language for web pages. It is a fundamental technology for building interactive and dynamic web content, working alongside HTML (for structuring content) and CSS (for styling).",
    Python: "Python is a high-level, interpreted, object-oriented programming language with dynamic semantics. It was created by Guido van Rossum and first released in 1991.",
    C: "C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Laboratories in 1972. It is known for its efficiency, low-level memory access capabilities, and portability across various hardware platforms.",
    MySQL: "MySQL is an open-source relational database management system (RDBMS) that utilizes Structured Query Language (SQL) for managing and manipulating data. It is widely used in web applications and is known for its reliability, performance, and ease of use.",
    Typescript: "TypeScript is a strongly typed programming language that builds upon JavaScript. It is considered a superset of JavaScript, meaning that any valid JavaScript code is also valid TypeScript code.",
    React: "React (or React.js) is a JavaScript library for building user interfaces, primarily for single-page applications. While often referred to as a framework due to its widespread use in building complete applications, it is technically a library because it focuses specifically on the view layer and doesn't dictate a full application architecture.",
    "React-native": "React Native is an open-source JavaScript framework for building native mobile applications. It enables developers to create applications for both iOS and Android platforms using a single codebase, leveraging the popular React JavaScript library for user interface development.",
    Laravel: "Laravel is a popular, open-source PHP framework designed to simplify and accelerate web application development. It follows the Model-View-Controller (MVC) architectural pattern, which helps in organizing application logic and separating concerns.",
    Bootstrap: "Bootstrap is a free and open-source front-end framework for developing responsive and mobile-first websites and web applications. It is built upon HTML, CSS, and JavaScript.",
    PyTorch: "PyTorch is an open-source machine learning framework, primarily used for developing and training deep learning models based on neural networks. It was originally developed by Meta AI and is now managed by the independent PyTorch Foundation, part of the Linux Foundation.",
    GitHub: "Versi kontrol & kolaborasi.",
    "Team-Work": "Kemampuan kerja tim.",
    Figma: "Tools desain antarmuka.",
    "Problem-Solving": "Kemampuan analisis solusi.",
    "Microsoft Office": "Tools produktivitas (Word, Excel, dll)",
  };

  const handleTagClick = (name) => {
    setPopupSkill(name);
  };

  return (
    <section>
      <div className="container">
        <div className="hero">
          <h1>Vanessa Carlinsia</h1>
          <h2>
            I'm interested in{" "}
            <Typed
              className="typed-text"
              strings={["Developer", "Designer", "Builder"]}
              typeSpeed={100}
              backSpeed={90}
              loop
            />
          </h2>
          <p>
            I'm a creative personand I am a student from Bina Nusantara
            University with Computer Science Major I'm passionate software
            engineering with an experience on design website I enjoy combining
            creativity and technical skills to craft visually appealing and
            functional websites. I can also be responsible of my work. I always
            to do the best in everything. I am also a person who never gives up,
            if I fail I will try again until I succeed.
          </p>
          <p className="connect">
            Connect with me <span className="hand">👇</span>
          </p>
          <div className="social-links">
            <a
              href="https://www.github.com/vanessacarlinsiaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/vanessacarlinsia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <button
              className="download-btn"
              onClick={() => window.open("/assets/CV.pdf", "_blank")}
            >
              Download CV
            </button>
            <button
              className="contact-btn"
              onClick={() =>
                window.open("/assets/DesignPortofolio.pdf", "_blank")
              }
            >
              Design Portofolio
            </button>
            <div className="pic2">
              <img src="/image/p1.jpg" alt="vanes" />
            </div>
          </div>
        </div>
        <div className="pic">
          <img src="/image/p1.jpg" alt="vanes" />
        </div>
      </div>

      <div className="skills-section">
        <h2>My Skills</h2>

        {/* Languages Card */}
        <div className="card">
          <div className="card-header">
            <div className="icon languages-icon">
              <FontAwesomeIcon icon={faCode} size="1x" />
            </div>
            <h3>Languages</h3>
          </div>
          <div className="tags">
            {[
              "HTML",
              "CSS",
              "Java",
              "PHP",
              "JavaScript",
              "Python",
              "C",
              "MySQL",
              "Typescript",
            ].map((skill) => (
              <div
                key={skill}
                className="tag"
                onClick={() => handleTagClick(skill)}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks Card */}
        <div className="card">
          <div className="card-header">
            <div className="icon frameworks-icon">
              <FontAwesomeIcon icon={faCube} size="1x" />
            </div>
            <h3>Frameworks</h3>
          </div>
          <div className="tags">
            {["React", "React-native", "Laravel", "Bootstrap", "PyTorch"].map(
              (skill) => (
                <div
                  key={skill}
                  className="tag"
                  onClick={() => handleTagClick(skill)}
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>

        {/* Skills Card */}
        <div className="card">
          <div className="card-header">
            <div className="icon skills-icon">
              <FontAwesomeIcon icon={faTools} size="1.5x" />
            </div>
            <h3>Skills</h3>
          </div>
          <div className="tags">
            {[
              "GitHub",
              "Team-Work",
              "Figma",
              "Problem-Solving",
              "Microsoft Office",
            ].map((skill) => (
              <div
                key={skill}
                className="tag"
                onClick={() => handleTagClick(skill)}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup */}
      {popupSkill && (
        <div className="popup-overlay" onClick={() => setPopupSkill(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setPopupSkill(null)}>
              ✖
            </button>
            <h4>{popupSkill}</h4>
            <p>{skillDescriptions[popupSkill] || "Belum ada deskripsi."}</p>
          </div>
        </div>
      )}

      <div className="curved-divider"></div>

      {/* project */}
      <div className="project">
        <h2>My Projects</h2>
        <div className="pc-container">
          <PC
            title="Jockey Conference Center"
            imageUrl="image/prj1.png"
            githubUrl="https://github.com/vanessacarlinsiaa/JCC-Project"
            liveUrl="https://jcc-project.vercel.app/"
          />
          <PC
            title="Bad Code Smell web"
            imageUrl="image/prj4.png"
            githubUrl="https://github.com/vanessacarlinsiaa/BadCodeSmell"
            liveUrl="https://bad-code-smell-sigma.vercel.app/"
          />
          <PC
            title="Tutoran"
            imageUrl="image/prj5.png"
            githubUrl="https://github.com/BernardBerenes/Tutoran"
          />
          <PC
            title="Investorage"
            imageUrl="image/prj7.png"
            githubUrl="https://github.com/madelinemily/laraVent"
            liveUrl=" https://investorage.wppp.xyz/register"
          />
        </div>
        <Link to="/prjct" className="view-more-all">
          View More Projects...
        </Link>
        <span className="hand">👉</span>
      </div>

      <div className="animated-divider"></div>

      {/* get in touch */}
      <div className="get-in-touch">
        <div className="photo-container">
          <h2>Get in Touch with Me</h2>
          <img
            src="image/me.jpg"
            alt="Your Profile"
            className="profile-photo"
          />
        </div>
        <div className="text-container">
          <p>
            Let’s collaborate or just say hello!
            <br />
            you can contact me here!
          </p>
          <button
            className="download-btn"
            onClick={() => window.open("/contact", "_blank")}
          >
            contact
          </button>
          <div className="emoji-container">
            <span className="emoji">😊</span>
            <span className="emoji">📧</span>
            <span className="emoji">🤝</span>
          </div>
        </div>
      </div>

      <div className="animated-divider2"></div>
    </section>
  );
};

export default About;
