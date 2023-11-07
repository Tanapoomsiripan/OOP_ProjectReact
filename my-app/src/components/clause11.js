import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Clause11() {
  
  const [sum, setSum] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [inputCount, setInputCount] = useState(0);
  const [inputValues, setInputValues] = useState([]);
  const [avg,setavg] = useState(0);
  const addInputFields = () => {
    const count = parseInt(inputCount);
    setInputValues(Array.from({ length: count }, () => '')); 
  };

  const handleSubmit = () => {
    // ดำเนินการคำนวณหรือดำเนินการอื่น ๆ ที่คุณต้องการที่นี่
    // ตัวอย่าง: นับผลรวมของค่าที่ป้อนใน Input Fields
    const total = inputValues.reduce((acc, value) => acc + parseFloat(value || 0), 0);
    setSum(total); // ตั้งค่าค่ารวมใน state sum
    const a = total / inputValues.length;
    setavg(a);
    console.log(inputValues.length);
  }

  return (
    <div>
       <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="border p-3">
        <h1>ค่าเฉลี่ย</h1>
        
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
      <p>Total Avg: {avg}</p> {/* แสดงผลรวม */}

      <Button href="/">BackHome</Button>
 		</Col>
      </Row>
    </Container>
      
    </div>
  );
}

export default Clause11;
