import React, { useState, setState } from 'react';
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import bgImage from './mainImage.jpg';
import data from './data';

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">JJ's Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Cart</Nav.Link>
          <Nav.Link href="#pricing">My Page</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function App() {
  const [obj, setObj] = useState(data);

  return (
    <div className="App">
      <Header />
      <div
        className="main-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <Container>
        <Row>
          {obj.map((item) => (
            <Col md={4}>
              <img
                src={process.env.PUBLIC_URL + item.src}
                alt={item.content}
                width="60%"
              />
              <h4>{item.title}</h4>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
