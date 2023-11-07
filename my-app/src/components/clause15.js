import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Clause15() {
  
  const [sum, setSum] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [inputCount, setInputCount] = useState(0);
  const [inputValues, setInputValues] = useState([]);
  const [avg,setavg] = useState(0);
  const [max,setmax] = useState(0);
  const [min,setmin] = useState(0);
  const [sd,setsd] = useState(0);
  const [mean, setMean] = useState(0);
  const [standardDeviation, setStandardDeviation] = useState(0);
  const addInputFields = () => {
    const count = parseInt(inputCount);
    setInputValues(Array.from({ length: count }, () => '')); 
  };

  const calculateStandardDeviation = () => {
    const n = inputValues.length;
    if (n <= 1) {
      setStandardDeviation(0);
      return;
    }
  
    const numericValues = inputValues.map(value => parseFloat(value));
    
    
    const meanValue = numericValues.reduce((total, number) => total + number, 0) / n;
    setMean(meanValue);
  
    
    let sumOfSquares = 0;
    for (let i = 0; i < n; i++) {
      sumOfSquares += (numericValues[i] - meanValue) ** 2;
    }
    const variance = sumOfSquares / (n - 1);
    const standardDeviationValue = Math.sqrt(variance);
    setStandardDeviation(standardDeviationValue);
  };
  
  const handleSubmit = () => {
    
    const total = inputValues.reduce((acc, value) => acc + parseFloat(value || 0), 0);
    setSum(total); 
    const a = total / inputValues.length;
    setavg(a);
    const m = Math.max(...inputValues.map(Number));
    setmax(m);

    const n = Math.min(...inputValues.map(Number));
    setmin(n);
    calculateStandardDeviation();
    
  }

  return (
    <div className="centered-container">
       <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={4} className="border p-3">
                <h1>Array_Operation</h1><br></br>
                <input
                  type="text"
                  onChange={(e) => setInputCount(e.target.value)}
                />
        <Button onClick={addInputFields}>เพิ่ม Input Fields</Button><br/>
        {inputValues.map((value, index) => (
          <input
            key={index}
            value={value}
            onChange={(e) => {
              const newInputValues = [...inputValues];
              newInputValues[index] = e.target.value;
              setInputValues(newInputValues);
            }}
        />
      ))}
      <br/>
      <Button onClick={handleSubmit}>Submit</Button>
      <p>Avg: {avg}</p> {/* แสดงผลรวม */}
      <p>Max: {max}</p>
      <p>Min: {min}</p>
      <p>SD: {standardDeviation}</p>
      <Button href="/">BackHome</Button>
              </Col>
            </Row>
    </Container>
      
    </div>
  );
}

export default Clause15;
