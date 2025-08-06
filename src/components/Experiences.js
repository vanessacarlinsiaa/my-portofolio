import React from "react";
import "./experiences.css";

const experiences = [
  {
    date: "December 2022 – January 2025",
    title: "Part-time Teacher – I-Smart Bimbel",
    description:
      "Taught students from elementary to middle school in a structured bimbel environment.",
    points: [
      "Teaching students varied from elementary school to middle school.",
      "Making teaching materials, exercises, and answer sheets.",
      "Organizing and managing files on Google Drive.",
      "Providing academic support to facilitate learning and improve performance.",
    ],
  },
  {
    date: "February 2025 – Present",
    title: "IT Support – BCA Finance",
    description:
      "Supporting IT Project Manager and handling IT infrastructure and tools development.",
    points: [
      "Assisting Project Manager with scheduling, healthcheck, and report compilation.",
      "Creating reports for BeyondTrust and monitoring server database usage.",
      "Developing mini tool (ToolsMaintain) to manage resignation checklists (full-stack).",
      "Handling data scrambling, backup/restore using SQL Server Management Studio (SSMS).",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Work Experience</h2>
      <p className="experience-quote">
        what you do makes a difference — and you have to decide what kind of
        difference you want to make.
      </p>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <span className="experience-date">{exp.date}</span>
            <h3 className="experience-role">{exp.title}</h3>
            <p className="experience-desc">{exp.description}</p>
            <ul className="experience-points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
