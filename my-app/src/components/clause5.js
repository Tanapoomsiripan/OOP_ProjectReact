import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Clause5() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const processNumber = () => {
    const parsedNumber = parseInt(number);

    if (parsedNumber >= 100 && parsedNumber <= 999) {
      const a = parsedNumber % 10;
      const b = Math.floor(parsedNumber / 10);
      const c = b % 10;
      const d = Math.floor(b / 10);

      setResult(`${a}${c}${d}`);
    } else {
      setResult('Out of range');
    }
  };

  return (
    <div className="centered-container">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="border p-3">
              <h1>Number Processor</h1>
              <label>
                Enter a number (between 100 and 999): &nbsp;
                <input type="number" value={number} onChange={handleNumberChange} />
              </label>
              &nbsp;
              <Button onClick={processNumber}>Process Number</Button>
              <p>Result: {result}</p>

              <Button href="/">BackHome</Button>
 		      </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Clause5;
