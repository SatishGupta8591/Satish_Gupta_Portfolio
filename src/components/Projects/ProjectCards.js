import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-image-container">
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="card-img" 
          className="project-image"
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center mb-3">{props.title}</Card.Title>
        <Card.Text style={{ 
          textAlign: "justify",
          flex: "1",
        }}>
          {props.description}
        </Card.Text>
        <div className="mt-auto text-center">
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            className="project-button"
          >
            <BsGithub /> &nbsp;GitHub
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
