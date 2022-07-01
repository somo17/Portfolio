import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import placement from "../../Assets/Projects/placement.png";
import unisite from "../../Assets/Projects/unisite.png";
import suicide from "../../Assets/Projects/suicide.png";
import yousum from "../../Assets/Projects/yousum.png";

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
              imgPath={yousum}
              isBlog={false}
              title="YouTube Summariser"
              description="Web Application to summarize YouTube
              videos. Generates audio and text summary in various languages based on user’s preferred length of summary. It provides Abstractive as well as Extractive summary. "
              link="https://github.com/somanyadav/Youtube-Summariser"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unisite}
              isBlog={false}
              title="NU-Connect"
              description="NU Connect is a web portal that provides services and contains information regarding nearby places, cab appointments, virtual tour, food ordering from inner as well as outer food hubs of NIIT University."
              link="https://github.com/somanyadav/NU-Connect"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placement}
              isBlog={false}
              title="Placement Portal"
              description=" A placement portal for NIIT University that sends automated invitations to companies. Student details such as their placement applications and final selections are manifested using data visualisation."
              link="https://github.com/somanyadav/NU-Placement-Portal"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
