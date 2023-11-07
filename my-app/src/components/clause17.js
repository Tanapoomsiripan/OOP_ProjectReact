import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function findPossiblePaths(m, n) {
  
  const dp = Array.from(Array(m), () => Array(n).fill(0));

  
  dp[0][0] = 1;

  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      
      if (i > 0) {
        dp[i][j] += dp[i - 1][j];
      }
      
      if (j > 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }

  
  return dp[m - 1][n - 1];
}

function Clause17() {
  const [m, setM] = useState('');
  const [n, setN] = useState('');
  const [result, setResult] = useState(null);

  const calculatePaths = () => {
    const numPaths = findPossiblePaths(m, n);
    setResult(numPaths);
  };

  return (
    <div className="centered-container">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={3} className="border p-3">
            <h1>Blacktiger</h1>
            <input type="number" value={m} onChange={(e) => setM(parseInt(e.target.value))} /><br/><br/>
            <input type="number" value={n} onChange={(e) => setN(parseInt(e.target.value))} /><br/><br/>
            <Button onClick={calculatePaths}>Calculate</Button><br/><br/>
            {result !== null && <p>Number of possible paths: {result}</p>}
            <Button href="/">BackHome</Button>
 		      </Col>
        </Row>
      </Container>
        
    </div>
  );
}

export default Clause17;
