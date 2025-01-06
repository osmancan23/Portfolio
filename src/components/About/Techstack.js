import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiJava,
  DiSwift,
  DiGit,
} from "react-icons/di";
import { 
  SiFlutter, 
  SiFirebase, 
  SiSpring, 
  SiDart,
  SiSwift,
  SiGooglecloud
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <SiFlutter />
        </div>
        <p className="tech-name">Flutter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <SiDart />
        </div>
        <p className="tech-name">Dart</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <DiSwift />
        </div>
        <p className="tech-name">Swift</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <SiSwift />
        </div>
        <p className="tech-name">SwiftUI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <DiJava />
        </div>
        <p className="tech-name">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <SiSpring />
        </div>
        <p className="tech-name">Spring Boot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <DiJavascript1 />
        </div>
        <p className="tech-name">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <DiNodejs />
        </div>
        <p className="tech-name">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <SiFirebase />
        </div>
        <p className="tech-name">Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons-container">
        <div className="tech-icons">
          <DiGit />
        </div>
        <p className="tech-name">Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
