import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function FindPoint(x1, y1, x2, y2, x, y) { 
    return x > x1 && x < x2 && y > y1 && y < y2;
}

function Clause8(){
    const [x1, setX1] = useState('');
    const [y1, setY1] = useState('');
    const [x2, setX2] = useState('');
    const [y2, setY2] = useState('');
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [a, setA] = useState(''); 

    const handleCheckPoint = () => {
        const result = FindPoint(parseFloat(x1), parseFloat(y1), parseFloat(x2), parseFloat(y2), parseFloat(x), parseFloat(y));
        setA(result ? "Yes" : "No");
    }

    return (
        <div className="centered-container">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={4} className="border p-3">
                        <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>จุดเริ่มต้น</Form.Label>
                            <Form.Control type="text" placeholder="x" onChange={(e) => setX1(e.target.value)}/>
                            <Form.Control type="text" placeholder="y" onChange={(e) => setY1(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>ความกว้าง/ความยาว</Form.Label>
                            <Form.Control type="text" placeholder="ความกว้าง" onChange={(e) => setX2(e.target.value)}/>
                            <Form.Control type="text" placeholder="ความยาว" onChange={(e) => setY2(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>จุดที่สนใจ</Form.Label>
                            <Form.Control type="text" placeholder="x" onChange={(e) => setX(e.target.value)}/>
                            <Form.Control type="text" placeholder="y" onChange={(e) => setY(e.target.value)}/>
                        </Form.Group>
                        </Form>
                    <Button onClick={handleCheckPoint}>Check Point</Button><br/><br/>
                    <p>Result: {a}</p><br/>
                    <Button href="/">BackHome</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Clause8;
