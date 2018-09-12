import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import PortfolioItem from "../components/PortfolioItem";

const Portfolio = () => (
    <div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Marissa Ellingson's Portfolio</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <PortfolioItem>

        </PortfolioItem>

        </Col>

      <Col size="md-6">
      <PortfolioItem>
        </PortfolioItem>
      </Col>
      </Row>
    </Container>
  </div>
);




export default Portfolio;
