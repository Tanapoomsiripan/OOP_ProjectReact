import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Clause2() {
  const [work, setWork] = useState(0);
  const [wage, setWage] = useState(0);

  const calculateWage = () => {
    if (work <= 40) {
      setWage(work * 120);
    } else if (work > 40) {
      const OTH = work - 40;
      setWage(40 * 120 + OTH * 20);
    }
  };

  return (
    <div className="centered-container">
      <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="border p-3">
      <h1>Wage Calculator</h1>
      <input
        type="number"
        placeholder="Enter hours worked"
        value={work}
        onChange={(e) => setWork(e.target.value)}
      />
       &nbsp;
       <Button onClick={calculateWage}>Calculate Wage</Button>
      <p>Wage: {wage}</p>
      <Button href="/">BackHome</Button>
      </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Clause2;
