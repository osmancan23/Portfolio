import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiTrello,
  SiGitlab,
  SiGithub,
  SiSlack,
  SiAndroidstudio,
  SiXcode,
  SiOpenai,
} from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tool-icons-container">
        <div className="tool-icons">
          <SiVisualstudiocode />
        </div>
        <p className="tool-name">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tool-icons-container">
        <div className="tool-icons">
          <SiXcode />
        </div>
        <p className="tool-name">Xcode</p>
      </Col>
      <Col xs={4} md={2} className="tool-icons-container">
        <div className="tool-icons">
          <SiAndroidstudio />
        </div>
        <p className="tool-name">Android Studio</p>
      </Col>
      <Col xs={4} md={2} className="tool-icons-container">
        <div className="tool-icons">
          <SiPostman />
        </div>
        <p className="tool-name">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tool-icons-container">
        <div className="tool-icons">
          <SiSlack />
        </div>
        <p className="tool-name">Slack</p>
      </Col>
      <Col xs={4} md={2} className="tool-icons-container">
        <div className="tool-icons">
          <SiTrello />
        </div>
        <p className="tool-name">Trello</p>
      </Col>
      <Col xs={4} md={2} className="tool-icons-container">
        <div className="tool-icons">
          <SiGithub />
        </div>
        <p className="tool-name">Github</p>
      </Col>
      <Col xs={4} md={2} className="tool-icons-container">
        <div className="tool-icons">
          <SiGitlab />
        </div>
        <p className="tool-name">Gitlab</p>
      </Col>
      <Col xs={4} md={2} className="tool-icons-container">
        <div className="tool-icons">
          <BiCodeCurly style={{ fontSize: '1.2em' }} />
        </div>
        <p className="tool-name">Cursor</p>
      </Col>
      <Col xs={4} md={2} className="tool-icons-container">
        <div className="tool-icons">
          <SiOpenai />
        </div>
        <p className="tool-name">OpenAI</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
