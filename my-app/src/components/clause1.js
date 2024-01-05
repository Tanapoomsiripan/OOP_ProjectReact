import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Clause1() {
  const [x, setX] = useState(0);
  const [ans, setAns] = useState(0);

  const calculateAns = () => {
    const result = 3 * Math.pow(x, 4) + 2 * Math.pow(x, 3) - x + 10;
    setAns(result);
  };

  return (
    <div className="centered-container"> 
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="border p-3">
          <h1>Section 1</h1>
          <label>
            Enter a number: &nbsp;
          <input type="number" value={x} onChange={(e) => setX(parseInt(e.target.value))} />
          </label>
          &nbsp;<Button onClick={calculateAns}>Calculate</Button>
          <p>Result: {ans}</p>
      
       <Button href="/">BackHome</Button>
      </Col>
      </Row>
    </Container>
   </div>
  );
}

export default Clause1;
