import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsGooglePlay, BsApple } from "react-icons/bs";
import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-image-container">
        <Card.Img
          className="project-image"
          src={props.imgPath}
          alt="card-img"
        />
        <div className="project-overlay">
          <div className="project-links">
            {props.githubLink && (
              <Button variant="primary" href={props.githubLink} target="_blank" className="project-btn">
                <BsGithub /> GitHub
              </Button>
            )}
            {props.isGooglePlayLink && (
              <Button variant="primary" href={props.isGooglePlayLink} target="_blank" className="project-btn">
                <BsGooglePlay /> Play Store
              </Button>
            )}
            {props.appStoreLink && (
              <Button variant="primary" href={props.appStoreLink} target="_blank" className="project-btn">
                <BsApple /> App Store
              </Button>
            )}
          </div>
        </div>
      </div>
      <Card.Body>
        <Card.Title className="project-title">{props.title}</Card.Title>
        <Card.Text className="project-description">
          {props.description}
        </Card.Text>
        {props.technologies && (
          <div className="project-tech">
            <p className="tech-title">Technologies Used:</p>
            <div className="tech-tags">
              {props.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
