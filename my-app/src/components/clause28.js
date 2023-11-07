import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Fac(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * Fac(n - 1);
  }
}

function Clause28() {
  const [inputValue, setInputValue] = useState(0);
  const [A, setA] = useState([]);
  
  const handleInputChange = (e) => {
    setInputValue(parseInt(e.target.value));
  };
  let n = Fac(inputValue);
  console.log(n)
  const primeFactors = () => {
    let a = [],
      f = 2;
    while (n > 1) {
      if (n % f === 0) {
        a.push(f);
        n /= f;
      } else {
        f++;
      }
    }
    setA(a);
  };

  return (
    <div className="centered-container">
      <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={5} className="border p-3">
          <h1>SFacPrime</h1>
          <input type="number" value={inputValue} onChange={handleInputChange} /> &nbsp; 
          <Button onClick={primeFactors}>Cal</Button><br/>
          Result: {A.join(', ')}<br/><br/>
          <Button href="/">BackHome</Button>
 		    </Col>
      </Row>
    </Container>
     
    </div>
  );
}

export default Clause28;
