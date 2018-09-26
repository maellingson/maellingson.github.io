import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import PortfolioItem from "../components/PortfolioItem";
import StrangerFriends from "../assets/strangerfriends.png"

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
          <PortfolioItem backgroundImage="">
          <div>
            <a href="https://violetproject.herokuapp.com/index.html/"><h1>Frankly</h1></a>
            <a href="https://github.com/maellingson/Frankly">GitHub Code Repository</a>
            <p>An app that uses the IBM Watson Tone Analyzer and TwinWord APIs to detect overall sentiments and corporate jargon in texts.</p>
            </div>
          </PortfolioItem>
        </Col>

        <Col size="md-6">
        <PortfolioItem backgroundImage="">
            <a href="http://whiteboardstudio.herokuapp.com/"><h1>White Board Studio</h1></a>
            <a href="https://github.com/maellingson/ProjectTwoWhiteboard">GitHub Code Repository</a>
            <p>A collaborative White Board Studio where you can invite multiple people to draw at once. Options to create public and private studios. The app uses a mySQL database, Canvas, P5.js, and Flexbox.</p>
          </PortfolioItem>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <PortfolioItem backgroundImage= "">
            <a href="http://tunedup.herokuapp.com/"><h1>TunedUp</h1></a>
            <a href="https://github.com/maellingson/TunedUp">GitHub Code Repository</a>
            <p>A social networking site for musicians. Each musician has a profile created using Google authentication and can network with other musicians to make music. This application uses MongoDB to store users and postings.</p>
          </PortfolioItem>

        </Col>

        <Col size="md-6">
        <PortfolioItem backgroundImage="">
            <a href="https://strangerfriends.herokuapp.com/"><h1>Stranger Friends</h1></a>
            <a href="https://github.com/maellingson/FriendFinder">GitHub Code Repository</a>
            <p>A Friend Finder game based on Stranger Things. Find a friend to explore the Upside Down! Answer the questions to match with a Stranger Things character. This app utilizes API requests to GET and POST data.</p>
          </PortfolioItem>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <PortfolioItem backgroundImage="">
            <a href="https://maellingson.github.io/Clicky-Game/"><h1>Clicky Game</h1></a>
            <a href="https://github.com/maellingson/Clicky-Game">GitHub Code Repository</a>
            <p>A React.js app based on the TV show Bob's Burgers. Only click on character's image once. The images shuffle with each click, if an image is clicked twice, you lose the game.</p>
          </PortfolioItem>

        </Col>

        <Col size="md-6">
        <PortfolioItem backgroundImage="">
            <h1>BAmazon</h1>
            <a href="https://github.com/maellingson/BAmazon">GitHub Code Repository</a>
            <p>A command line app that utilizes mySQL database. This app keeps track of item types, inventory and prices.</p>
          </PortfolioItem>
        </Col>
      </Row>
    </Container>
  </div>
);




export default Portfolio;
