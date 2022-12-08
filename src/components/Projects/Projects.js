import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medicos from "../../Assets/Projects/medicos.png";
import ejercicios from "../../Assets/Projects/ejercicios.png";


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
              imgPath={medicos}
              isBlog={false}
              title="Pro-Fy-App"
              description="A very useful mobile application to find health professionals depending on your location.
              "
              ghLink="https://github.com/GermanEH/Proyecto-Final-Pro-FY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ejercicios}
              isBlog={false}
              title="Fit-Focus"
              description="A web application to generate personalized exercise routines depending on your physical build and your age."
              ghLink="https://github.com/Final-Project-Henry/Fit-Focus"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
