import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Portfolio = () => (
    <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Marissa Ellingson's Portfolio</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
Portfolio items go here
          </p>

        </Col>
      </Row>
    </Container>
  </div>
);




export default Portfolio;
