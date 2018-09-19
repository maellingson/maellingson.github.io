import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import {Document, Page} from "react-pdf";
import myResume from "../assets/Resume_Ellingson.pdf"


// const Resume = () => (
//     <div>
//     <Container style={{ marginTop: 30 }}>
//       <Row>
//         <Col size="md-12">
//           <h1>Resume</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col size="md-12">
//           <p>
// Resume goes here
//           </p>

//         </Col>
//       </Row>
//     </Container>
//   </div>
// );

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
        <Document
          file={myResume}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}



export default Resume;
