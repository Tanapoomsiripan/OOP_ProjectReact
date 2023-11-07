import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function DanceApp() {
  const [n, setN] = useState(0);
  const [data, setData] = useState([]);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(0);
  const [endY, setEndY] = useState(0);

  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === 'n') {
      setN(parseInt(inputValue, 10));
    } else if (inputName === 'data') {
      const dataArray = inputValue.split(' ').map(Number);
      setData(dataArray);
    } else if (inputName === 'startX') {
      setStartX(parseInt(inputValue, 10));
    } else if (inputName === 'startY') {
      setStartY(parseInt(inputValue, 10));
    }
  };

  const calculateDanceEndPoint = () => {
    let x = startX;
    let y = startY;

    for (const step of data) {
      if (step % 4 === 1) {
        x += 1;
      } else if (step % 4 === 2) {
        y -= 1;
      } else if (step % 4 === 3) {
        y += 1;
      } else {
        x -= 1;
      }
    }

    setEndX(x);
    setEndY(y);
  };

  return (
    <div className="centered-container">
      <Container>
          <Row className="justify-content-center">
              <Col xs={12} md={5} className="border p-3">
                <div>
                        <label>n (จำนวนข้อมูล):</label>
                        <input
                          type="number"
                          name="n"
                          value={n}
                          onChange={handleInputChange}
                        />
                      </div><br/>
                      <div>
                        <label>ข้อมูล (ตัวเลข n ตัว, แยกด้วยช่องว่าง):</label>
                        <input
                          type="text"
                          name="data"
                          value={data.join(' ')}
                          onChange={handleInputChange}
                        />
                      </div>
                      <br/>
                      <div>
                        <label>Start X: </label>&nbsp;
                        <input
                          type="number"
                          name="startX"
                          value={startX}
                          onChange={handleInputChange}
                        />
                      </div><br/>
                      <div>
                        <label>Start Y: </label>&nbsp;
                        <input
                          type="number"
                          name="startY"
                          value={startY}
                          onChange={handleInputChange}
                        />
                      </div>
                      <br/>
                      <Button onClick={calculateDanceEndPoint}>คำนวณจุดสุดท้าย</Button>
                      <br/><br/>
                      <div>
                        จุดสุดท้าย: X: {endX} {" "} Y: {endY}
                      </div>
                      <br/>
                  <Button href="/">BackHome</Button>
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default DanceApp;
