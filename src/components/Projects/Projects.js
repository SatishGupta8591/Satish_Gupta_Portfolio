import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import oralcancer from "../../Assets/Projects/oralcancer.png";
//import paddle from "../../Assets/Projects/paddle.png";
import guess from "../../Assets/Projects/guess.png";
import diary from "../../Assets/Projects/diary.png";
//import ccfraud from "../../Assets/Projects/ccfraud.png";
import stylesense from "../../Assets/Projects/stylesense.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diary}
              isBlog={false}
              title="PenPaperDiary-(Mobile Application)"
              description="A full-stack productivity app built using React Native (Expo), Node.js, and MongoDB. It features secure JWT authentication, task management, and a private Learning Diary with optional password protection. Designed for smooth cross-platform use and self-growth tracking."
              ghLink="https://github.com/SatishGupta8591/PenPaperDiary"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stylesense}
              isBlog={false}
              title="StyleSense- Choose Your Daily Fashish  (Mobile Application) "
              description="A smart fashion app built using React Native (Expo) that offers AI-powered outfit suggestions based on weather, zodiac signs, and events. Key features include virtual try-on, wardrobe management, customization, style blogs, community polls, and sustainability tracking. The app supports animated UI components, dark/light themes, and delivers a smooth, responsive experience across devices."
              ghLink="https://github.com/SatishGupta8591/StyleSense"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guess}
              isBlog={false}
              title="Guess The Number Game"
              description="Guess the Number is an engaging Android app developed in Kotlin using Android Studio, where users guess a randomly generated number. The app provides instant feedback like Too High or Too Low, making it interactive and fun.It showcases essential Android development skills like UI design, input handling, and state management."
              ghLink="https://github.com/SatishGupta8591/Guess-the-Number"            
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oralcancer}
              isBlog={false}
              title=""
              description=""
              ghLink=""
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ccfraud}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paddle}
              isBlog={false}
              title=""
              description=""
              ghLink=""
                 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
