import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import {Document, Page} from "react-pdf";
import myResume from "../assets/Resume_Ellingson.pdf"

class Resume extends Component {
  state = {
    numPages: 3,
    pageNumber: 1,
  }
 
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
            <Container style={{ marginTop: 30 }}>
            <Row>
        <Col size="md-2">
        </Col>
        <Col size="md-8">
        <div style={{textAlign: 'center', justifyContent: 'center'}}>
        <h1>Resume</h1>
        <Document
          file={myResume}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        <button> 
        <a href={myResume} download="MarissaEllingson_Resume">Download Resume</a></button>
        </div>
        </Col>
        </Row>
        </Container>
      </div>
    );
  }
}



export default Resume;
