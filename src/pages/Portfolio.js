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
          <h1>Portfolio</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <PortfolioItem backgroundImage="https://images.pexels.com/photos/884453/pexels-photo-884453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        <h1>Frankly</h1>
        </PortfolioItem>

        </Col>

      <Col size="md-6">
      <PortfolioItem backgroundImage="https://images.pexels.com/photos/884453/pexels-photo-884453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        <h1>White Board Studio</h1>
        </PortfolioItem>
      </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <PortfolioItem backgroundImage="https://images.pexels.com/photos/884453/pexels-photo-884453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        <h1>Frankly</h1>
        </PortfolioItem>

        </Col>

      <Col size="md-6">
      <PortfolioItem backgroundImage="https://images.pexels.com/photos/884453/pexels-photo-884453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        <h1>White Board Studio</h1>
        </PortfolioItem>
      </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <PortfolioItem backgroundImage="https://images.pexels.com/photos/884453/pexels-photo-884453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        <h1>Frankly</h1>
        </PortfolioItem>

        </Col>

      <Col size="md-6">
      <PortfolioItem backgroundImage="https://images.pexels.com/photos/884453/pexels-photo-884453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        <h1>White Board Studio</h1>
        </PortfolioItem>
      </Col>
      </Row>
    </Container>
  </div>
);




export default Portfolio;
