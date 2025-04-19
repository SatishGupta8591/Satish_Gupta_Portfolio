import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <span className="purple">Satish</span> — a passionate full-stack developer who turns ideas into reality 
              with clean code and creative design.
              <br /><br />
              I love building mobile apps with <b className="purple">React Native</b> and crafting high-performance 
              websites using <b className="purple">Next.js, Node.js, and MongoDB</b>. 
              From UI to backend logic, I create digital experiences that are fast, functional, and future-ready.
              <br />
              <br />
              I believe in writing meaningful code that solves real-world problems and enhances user lives. 
              <i>
                <b className="purple"> Constant learning, consistency, and a touch of creativity </b>
              </i> drive everything I build.
              <br />
              <br />
              Whether it's{" "}
              <i>
                <b className="purple">
                  performance, design, or scalability
                </b>
              </i>
              {" "}— I aim for excellence in every line.
              <br />
              Tech is not just my career, it's my canvas.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="photo" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SatishGupta8591"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_satish_gupta_02?igsh=MWNld21zNmpzZ241bw=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/satish-gupta-5a886a253/ "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
