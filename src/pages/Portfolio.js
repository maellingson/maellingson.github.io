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
          <PortfolioItem backgroundImage="https://images.pexels.com/photos/884453/pexels-photo-884453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <div>
            <a href="https://violetproject.herokuapp.com/index.html/"><h1>Frankly</h1></a>
            <a href="https://github.com/maellingson/Frankly">GitHub Code Repository</a>
            <p>An app that uses the IBM Watson Tone Analyzer and TwinWord APIs to detect overall sentiments and corporate jargon in texts.</p>
            </div>
          </PortfolioItem>
        </Col>

        <Col size="md-6">
        <PortfolioItem backgroundImage="https://images.pexels.com/photos/884453/pexels-photo-884453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <a href="http://whiteboardstudio.herokuapp.com/"><h1>White Board Studio</h1></a>
            <a href="https://github.com/maellingson/ProjectTwoWhiteboard">GitHub Code Repository</a>
            <p>A collaborative White Board Studio where you can invite multiple people to draw at once. Options to create public and private studios.</p>
          </PortfolioItem>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <PortfolioItem backgroundImage="https://images.pexels.com/photos/884453/pexels-photo-884453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <a href="http://tunedup.herokuapp.com/"><h1>TunedUp</h1></a>
            <a href="https://github.com/maellingson/TunedUp">GitHub Code Repository</a>
            <p>A networking site for musicians. Each musician has a profile created using Google authentication and can network with other musicians to make music with.</p>
          </PortfolioItem>

        </Col>

        <Col size="md-6">
        <PortfolioItem backgroundImage={StrangerFriends}>
            <a href="https://strangerfriends.herokuapp.com/"><h1>Stranger Friends</h1></a>
            <a href="https://github.com/maellingson/FriendFinder">GitHub Code Repository</a>
            <p>A Friend Finder game based on Stranger Things. Find a friend to explore the Upside Down!</p>
          </PortfolioItem>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <PortfolioItem backgroundImage="https://images.pexels.com/photos/884453/pexels-photo-884453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <a href="https://maellingson.github.io/Clicky-Game/"><h1>Clicky Game</h1></a>
            <a href="https://github.com/maellingson/Clicky-Game">GitHub Code Repository</a>
            <p>A React.js app based on the TV show Bob's Burgers. Only click on character's image once. If you click twice, you lose the game...and the images shuffle on each click.</p>
          </PortfolioItem>

        </Col>

        <Col size="md-6">
        <PortfolioItem backgroundImage="https://images.pexels.com/photos/884453/pexels-photo-884453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <h1>BAmazon</h1>
            <a href="https://github.com/maellingson/BAmazon">GitHub Code Repository</a>
            <p>A command line app that utilizes mySQL database. The app keeps track of item types, inventory and prices.</p>
          </PortfolioItem>
        </Col>
      </Row>
    </Container>
  </div>
);




export default Portfolio;
