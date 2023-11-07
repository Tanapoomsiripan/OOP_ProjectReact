import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Clause3() {
  const numbers = [23, 16, 27];
  let maxNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  return (
    <div className="centered-container">
      <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={5} className="border p-3">
          <h1>Find the Maximum Number</h1>
          <p>Array: {numbers.join(', ')}</p>
          <p>Maximum Number: {maxNumber}</p>
          <Button href="/">BackHome</Button>
 		  </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Clause3;
