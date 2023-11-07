import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Clause16 = () => {
  const [numbers, setNumbers] = useState([]);
  const [mean, setMean] = useState(0);
  const [standardDeviation, setStandardDeviation] = useState(0);

  const calculateStandardDeviation = () => {
    const n = numbers.length;

    // Calculate the mean
    const sum = numbers.reduce((total, number) => total + number, 0);
    const meanValue = sum / n;
    setMean(meanValue);

    // Calculate the standard deviation
    let sumOfSquares = 0;
    for (let i = 0; i < n; i++) {
      sumOfSquares += (numbers[i] - meanValue) ** 2;
    }
    const variance = sumOfSquares / (n - 1);
    const standardDeviationValue = Math.sqrt(variance);
    setStandardDeviation(standardDeviationValue);
  };

  return (
    <div className="centered-container">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="border p-3">
            <h1>Calculate Standard Deviation</h1>
            <label>Enter the number of elements: </label>
            <input
              type="number"
              onChange={(e) => setNumbers(new Array(Number(e.target.value)).fill(0))}
            />

            <div>
              {numbers.map((_, index) => (
              <input
                key={index}
                type="number"
                placeholder={`Enter number ${index + 1}`}
                onChange={(e) => {
                  const newNumbers = [...numbers];
                  newNumbers[index] = parseFloat(e.target.value);
                  setNumbers(newNumbers);
                }}
              />
              ))}
            </div>

            <Button onClick={calculateStandardDeviation}>Calculate</Button>

            <div>
              <p>Mean: {mean}</p>
              <p>Standard Deviation: {standardDeviation}</p>
            </div>
            <Button href="/">BackHome</Button>
          </Col>
        </Row>
    </Container>
    </div>
  );
};

export default Clause16;
