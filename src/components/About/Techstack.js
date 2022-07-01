import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoTableau } from "react-icons/io5";
import {
  DiJavascript1,
  DiTerminal,
  DiPython,
} from "react-icons/di";
import {
  SiFlask,
  SiScikitlearn,
  SiStreamlit,
  SiBootstrap,
  SiTensorflow
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
    </Row>
  );
}

export default Techstack;
