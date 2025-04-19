import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I’m <span className="purple">Satish Gupta</span> from{" "}
            <span className="purple">Maharashtra, India</span>.
            <br />
            I’m a passionate developer currently pursuing my B.Sc. IT from
            Presidency University, graduating in 2025.
            <br />
            I specialize in building full-stack applications with modern tech like{" "}
            <strong className="purple">React, Node.js, MongoDB, and React Native (Expo)</strong>.
            <br />
           {/*  I'm also diving deep into <strong className="purple">UI/UX design</strong> and exploring the world of{" "}
            <strong className="purple">Machine Learning</strong>. */}
            <br />
            <br />
            When I’m not coding, you’ll find me doing things that keep my mind sharp and inspired:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Explore New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Using ChatGPT for Learning & Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for progress, not perfection."
          </p>
          <footer className="blockquote-footer">Satish ✨</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
