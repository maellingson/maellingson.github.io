import React from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import MainImg from "../assets/keyboard.jpg"


const Home = () => (
  <div>
    <Container>
      <Row>
        <Col size="md-2">
        </Col>
        <Col size="md-8">
          <h1 style={{ textAlign: 'center', marginTop: 40}}><strong>Marissa Ellingson</strong></h1>
            <h5 style={{ textAlign: 'center' }}>Full Stack Web Developer | Technical Writer</h5>
        </Col>
        <Col size="md-2">
        </Col>
      </Row>

    </Container>

    <Jumbotron backgroundImage={MainImg}>
    </Jumbotron>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <br></br>
      </Row>
      <Row>
        <Col size="md-2">
        </Col>
        <Col size="md-8">
          <p>
            I am a full stack developer with demonstrated experience in the software industry, having worked in startups and established software companies. With a certification from the University of Minnesota's Coding Bootcamp, a Masters in Scientific and Technical Communication, and a BA in English and Art History, I bring a unique set of skills and experience to any project.
          </p>
          <br>
          </br>
          <Row>
            <Col size="md-3">
            </Col>
            <Col size="md-6">
            <h2 style={{ marginTop: 20, marginBottom: 40, textAlign: 'center'}}>Technical Skills</h2>
          <ul style={{fontSize: 25}}>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>mySQL</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
            
            </Col>
          </Row>
    

    

        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
