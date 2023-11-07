import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Clause6() {
  const [integer, setInteger] = useState('');
  const [result, setResult] = useState('');

  const handleIntegerChange = (e) => {
    setInteger(e.target.value);
  };

  const processInteger = () => {
    const parsedInteger = parseInt(integer);

    if (parsedInteger > 0 && parsedInteger < 1000) {
      const a = parsedInteger % 10;
      const b = Math.floor(parsedInteger / 10);
      const c = b % 10;
      const d = Math.floor(b / 10);

      const sum = a + c + d;
      setResult(`Sum of digits: ${sum}`);
    } else {
      setResult('Out of range');
    }
  };

  return (
    <div className="centered-container">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="border p-3">
            <h1>Integer Processor</h1>
            <label>
              Enter an integer (between 1 and 999): &nbsp;
              
              <input type="number" value={integer} onChange={handleIntegerChange} />
            </label>
            &nbsp;
            <Button onClick={processInteger}>Process Integer</Button>
            <p>{result}</p>
            <Button href="/">BackHome</Button>
 		      </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Clause6;
