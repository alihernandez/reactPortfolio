import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NaviBar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Alí Hernandez</h1>
        </Col>
        <Col md ={5}>
          <h2>Search Bar</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <NaviBar />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>About Section Here</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Contact</h2>
          <p>Input form here</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Projects />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
