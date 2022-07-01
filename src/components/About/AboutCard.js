import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soman Yadav </span>
            from <span className="purple"> Gurugram, India. </span>
            I am a junior pursuing BTech in <span className="purple">Computer Science Engineering </span> from <span className="purple">NIIT
            University.</span>
            <br />
            <br />
            I love testing new frameworks in my domain. I don't get intimated by jargons now, a model is just a fancy word for 'recipe'.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Documentaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
