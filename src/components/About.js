import React from "react";
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
            <div className="tag">HTML</div>
            <div className="tag">CSS</div>
            <div className="tag">Java</div>
            <div className="tag">PHP</div>
            <div className="tag">JavaScript</div>
            <div className="tag">Python</div>
            <div className="tag">C</div>
            <div className="tag">MySQL</div>
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
            <div className="tag">React</div>
            <div className="tag">Laravel</div>
            <div className="tag">Bootstrap</div>
            <div className="tag">PyTorch</div>
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
            <div className="tag">GitHub</div>
            <div className="tag">Team-Work</div>
            <div className="tag">Figma</div>
            <div className="tag">Problem-Solving</div>
            <div className="tag">Microsoft Office</div>
          </div>
        </div>
      </div>
      <div className="curved-divider"></div>

      {/* project */}
      <div className="project">
        <h2>My Projects</h2>
        <div className="pc-container">
          <PC
            title="Jockey Conference Center"
            imageUrl="image/prj1.png" // Replace with actual image path
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
            imageUrl="image/prj7.png" // Replace with actual image path
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
            <br></br>you can contact me here!
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
