import React from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Home = () => (
  <div>
    <Jumbotron backgroundImage="https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
    </Jumbotron>
    <Container style={{ marginTop: 30 }}>
      <Row>
      <Col size="md-2">
        </Col>
        <Col size="md-8">
          <h1>Marissa Ellingson</h1>
          <h3>Full Stack Web Developer</h3> 
        </Col>
        <br></br>
      </Row>
      <Row>
        <Col size="md-2">
        </Col>
        <Col size="md-8">
          <p>
          I am a full stack developer with demonstrated experience in the software industry, having worked in startups and established software companies. With a certification from the University of Minnesota's Coding Bootcamp, a Masters in Scientific and Technical Communication, and a BA in English and Art History, I bring a unique set of skills and experience to any project.
          </p>

        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
