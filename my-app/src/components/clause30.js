import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function stringTimes(str, n) {
    
    if (n >= 0 && Number.isInteger(n)) {
      return str.repeat(n);
    } else {
      return "Invalid input for n";
    }
  }
  
  
  function Clause30() {
    const result1 = stringTimes("Hi", 2);
    const result2 = stringTimes("Hi", 3);
    const result3 = stringTimes("Hi", 1);
  
    return (
      <div className="centered-container">
        <Container>
            <Row className="justify-content-center">
                  <Col xs={12} md={4} className="border p-3">
                      <p>{result1}</p>
                      <p>{result2}</p>
                      <p>{result3}</p><br/>
                      <Button href="/">BackHome</Button>
                  </Col>
            </Row>
    </Container>
        
      </div>
    );
  }
  export default Clause30;
  