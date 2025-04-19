import React from "react";
import "./Academics.css";
import Particle from "../Particle";

const academicsData = [
  {
    title: "Bachelor of Science in Information Technology",
    institution: "Mumbai University, Mumbai",
    duration: "2023 - 2025",
    cgpa: "8.0",
    details: [
      "Key Subjects / Coursework:",
      "Web Development (HTML, CSS, JavaScript, PHP)",
      "Database Management Systems (MySQL, Oracle)",
      "Software Engineering",
      "Networking and Information Security",
      "Data Structures and Algorithms",
      "Operating Systems",
      "Python & Java Programming",
      "Mobile App Development (Android)"
    ]
  },
  {
    title: "Pre-University College",
    institution: "Prahladrai Dalmia Lions College, Mumbai",
    duration: "2021 - 2022",
    Percentage: "63%",
    details: [
     "Key Subjects:",
    "Accountancy",
    "Economics",
    "Business Studies",
    "Secretarial Practice",
    "Mathematics",
    "English"
    ],
  },
  {
    title: "Secondary High School",
    institution: "ST.Francis High School, Mumbai",
    duration: "2019 - 2020",
    Percentage: "75%",
    details: [
     "Key Subjects:",
    "English",
    "Mathematics",
    "Science",
    "Social Studies",
    "Marathi",
    "Hindi"
      
    ],
  },
];

function Academics() {
  return (
    <div className="academics-container">
      <Particle />
      <h1 className="academics-title">My Academic Journey</h1>
      <div className="academics-grid">
        {academicsData.map((edu, index) => (
          <div key={index} className="academic-card">
            <h2>{edu.title}</h2>
            <h3>{edu.institution}</h3>
            <p className="academic-duration">{edu.duration}</p>
            {edu.cgpa && <p className="academic-cgpa">CGPA: {edu.cgpa}</p>}
            {edu.Percentage && <p className="academic-cgpa">Percentage: {edu.Percentage}</p>}
            <ul>
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academics;
