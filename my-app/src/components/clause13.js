import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Clause13() {
  const initialWoodValues = [
    { a: 0, b: 0 },
    { a: 0, b: 0 },
    { a: 0, b: 0 },
    { a: 0, b: 0 },
    { a: 0, b: 0 },
    { a: 0, b: 0 }
  ];
  const [result,setresult] = useState('');

  const [woodValues, setWoodValues] = useState(initialWoodValues);

  const updateWoodValue = (index, field, value) => {
    const updatedWoodValues = [...woodValues];
    updatedWoodValues[index][field] = parseInt(value) || 0;
    setWoodValues(updatedWoodValues);
  };

  const compareab = () => {
    console.log(woodValues);
    
    console.log();
    console.log((woodValues[1].a === woodValues[5].a) && (woodValues[1].b === woodValues[5].b));
    let count = 0;
    
  
    for (let i = 0; i < woodValues.length - 1; i++) {
      for(let j =0; j < woodValues.length -1 ;j++){
        if ((woodValues[i].a === woodValues[j+1].a) && (woodValues[i].b === woodValues[j+1].b)) {
          count++;
        } 
        if ((woodValues[i].a === woodValues[j+1].b) && (woodValues[i].b === woodValues[j + 1].a)) {
          count++;
        }
      }
       
      
    }
    console.log(count);
  
    if (count === 8) {
      setresult("Yes");
    } else {
      setresult("No");
    }
  
   
  };
  

  return (
    <div className="centered-container">
      <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="border p-3">
        {woodValues.map((wood, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`a${index + 1}`}
            onChange={(e) => updateWoodValue(index, "a", e.target.value)}
          />
          <input
            type="text"
            placeholder={`b${index + 1}`}
            onChange={(e) => updateWoodValue(index, "b", e.target.value)}
          />
        </div>
      ))}
      <br/>
      <Button onClick={compareab}>Compare</Button><br/><br/>
      Result: {result} <br/><br/>
      <Button href="/">BackHome</Button>

 		</Col>
      </Row>
    </Container>
    </div>
  );
}

export default Clause13;
