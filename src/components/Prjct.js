import React from "react";
import "./prjct.css";

const ProjectCard = ({ title, imageUrl, githubUrl, liveUrl, description }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} className="project-image" />
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
      <p className="project-description">{description}</p>
    </div>
  );
};

const ProjectCard2 = ({ title, imageUrl, liveUrl, description }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="overlay">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="view-button"
          >
            View Figma
          </a>
        </div>
      </div>
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
};

const ProjectCard3 = ({ title, imageUrl, githubUrl, description }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="overlay">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="view-button"
          >
            View Github
          </a>
        </div>
      </div>
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
};

const Prjct = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="project-cards-container">
        <ProjectCard
          title="Jockey Conference Center"
          imageUrl="image/prj1.png"
          githubUrl="https://github.com/vanessacarlinsiaa/JCC-Project"
          liveUrl="https://jcc-project.vercel.app/"
          description="This is a Jockey Conference Center website, project individual from my University, which a project that I made by myself using HTML and CSS, then I publish to vercel app. This project is about a conference venue, total have 5 page."
        />
        <ProjectCard2
          title="Eatwell (design in figma)"
          imageUrl="image/prj2.png" 
          liveUrl="https://www.figma.com/proto/MbilsTFfBUbArayJ9RXQ0y/Eatwell--AI-Project-?node-id=14-723&starting-point-node-id=13%3A272&t=DBfIBlCl4kMUkYlY-1"
          description="This is a Eatwell, Group-Project from my University. This mobile app design by my self. Which I makedesign using Figma. This design include 8 pages; The first slide page have 3 slide, Login page, Sign in Page, chat with assistant page, the receipe page and the Homepage. It all can seen in my project on Figma."
        />
        <ProjectCard2
          title="Calm (design in figma)"
          imageUrl="image/prj3.png"
          liveUrl="https://www.figma.com/proto/ONrsEL0vnD2a0SBMxqR4Hu/MidExam_VanessaCarlinsiaTjong_2602052065?node-id=1-165&starting-point-node-id=1%3A234&scaling=scale-down-width&content-scaling=fixed&t=UeHOphFAhMRiVjDE-1"
          description="This is a Calm(Website for conseuling  with psychology or psychiatrist. This is project for mid exam and individual project from my University. The design of this project is made by myself, which I make using Figma. "
        />
        <ProjectCard
          title="Bad Code Smell web"
          imageUrl="image/prj4.png"
          githubUrl="https://github.com/vanessacarlinsiaa/BadCodeSmell"
          liveUrl="https://bad-code-smell-sigma.vercel.app/"
          description="This is a group project that build using html and css. This project is providing information  about bad code smell like change preventer and dispensables with refactoring solution to that smell. I contributed to the entire website development process and also I contributed for the design for this project. I handled the bugs and errors."
        />
        <ProjectCard3
          title="Tutoran"
          imageUrl="image/prj5.png"
          githubUrl="https://github.com/BernardBerenes/Tutoran"
          description="This website was the final project from my university that built using laravel(PHP framework) combined with tailwind css. This project using scrum for the agile methodology. I contributed as a design and development team. I also contributed for make 2 pages(Front-end) for the website. There are several challenge during this project and I(with team) handled it with daily scrum meeting and ask for the other opinions."
        />
        <ProjectCard3
          title="Helmet detection YOLOV5"
          imageUrl="image/prj6.png"
          githubUrl="https://github.com/vanessacarlinsiaa/YOLOV5-HelmetDetection"
          description="This project is a group project which I contributed to developing a helmet detection using YOLOv5 model. I worked on the coding in Python programming language and performed model training and testing on Google Colab. The dataset was taken from the Roboflow. The project aims to detect whether individuals are wearing helmets, with a focus on safety compliance. The final results and source code have been published on GitHub for further reference."
        />
        <ProjectCard
          title="Investorage"
          imageUrl="image/prj7.png" // Replace with actual image path
          githubUrl="https://github.com/madelinemily/laraVent"
          liveUrl=" https://investorage.wppp.xyz/register"
          description="Investorage is an innovative application that merges investment portfolio management with asset storage tracking into one platform. It allows users to monitor their financial investments, such as stocks, and manage physical or digital storage assets. Features include real-time performance analytics, storage optimization, and secure data handling. Designed to be intuitive, it provides a comprehensive solution for both individuals and businesses. The application is built with Laravel and Bootstrap, making it user-friendly for cashiers and administrators."
        />
        <ProjectCard3
          title="Checklist-Resign"
          imageUrl="image/prj8.png"
          githubUrl="https://github.com/vanessacarlinsiaa/ToolsMaintain-Checklistresign"
          description="This mini project was created during my internship to support the IT team. I added a new menu called 'Checklist Resign' to the internal app ToolsMaintain, which allows updating employee resignation or contract end dates directly to the database. I contributed to both the UI design and backend integration."
        />
      </div>
    </section>
  );
};

export default Prjct;
