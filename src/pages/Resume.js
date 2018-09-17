import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Resume = () => (
    <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Resume</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
Resume goes here
          </p>

        </Col>
      </Row>
    </Container>
  </div>
);




export default Resume;
