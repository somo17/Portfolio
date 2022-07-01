import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillFileExcel } from "react-icons/ai";
import {
  SiLinux,
  SiVisualstudiocode,
  SiMysql,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import {
  DiGit,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillFileExcel />
      </Col>
    </Row>
  );
}

export default Toolstack;
