import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Homework25() {
  const [number, setNumber] = useState(0);
  const [temp, setTemp] = useState(0);
  const [arr, setArr] = useState(Array(100).fill(0));

  const handleInputChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const handleArrayInput = (index, value) => {
    const newArr = [...arr];
    newArr[index] = Number(value);
    setArr(newArr);
  };

  const checkTemp = () => {
    let tempSum = 0;
    for (let i = 0; i < number; i++) {
      if (arr[i] === 2) {
        tempSum += 2;
      }
    }
    if (tempSum === 8) {
      alert("True");
    } else {
      alert("False");
    }
  };

  return (
      <div className="centered-container">
         <Container>
              <Row className="justify-content-center">
                  <Col xs={12} md={4} className="border p-3">
                    <h1>SSum2to8</h1>
                    <input
                      type="number"
                      placeholder="Enter a number"
                      onChange={handleInputChange}
                    /><br/><br/>
                    {number <= 2 || number > 100 ? (
                    <p>Out of range</p>
                    ) : (
                      <div>
                        {Array.from({ length: number }, (_, index) => (
                          <input
                            key={index}
                            type="number"
                            placeholder={`Enter number ${index + 1}`}
                            onChange={(e) => handleArrayInput(index, e.target.value)}
                          />
                          
                        ))}
                        <br/><br/>
                        <Button onClick={checkTemp}>Check</Button>
                      </div>
                    )
                    }
                    <br/>
                  <Button href="/">BackHome</Button>
                  </Col>
              </Row>
    </Container>
        
      </div>
    );
}

export default Homework25;
