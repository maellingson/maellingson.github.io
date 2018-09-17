import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Contact = () => (
    <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Contact</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
Contact info here
          </p>

        </Col>
      </Row>
    </Container>
  </div>
);




export default Contact;
