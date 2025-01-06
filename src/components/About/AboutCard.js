import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Osmancan Akagündüz</span>, 
            from <span className="purple">Istanbul, Turkey</span>.
            <br />
            <br />
            I'm a recent graduate in Software Engineering and currently working as a Flutter Developer at Craft Technology.
            <br />
            <br />
            Over the past four years, I've gained valuable experience working with four different companies in full-time, part-time, and freelance roles.
            <br />
            <br />
            I've contributed to more than 10 mobile application projects using Flutter and have 1.5 years of experience in iOS application development with Swift.           
            <br />
            <br />
            In my spare time, I enjoy exploring and utilizing new technologies. Recently, I have been developing backend applications using Java Spring Boot to further enhance my skills. 
            <br />
            <br />
            I am a team player who thrives in collaborative environments and consistently strives to complete assigned tasks efficiently. I am well-versed in Scrum and Agile methodologies, which I have frequently utilized in the companies I have worked for, ensuring a smooth and efficient software development process.
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
