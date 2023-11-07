import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Square() {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [area, setArea] = useState(0);

    const calculateArea = () => {
        const squareArea = height * width;
        setArea(squareArea);
    }

    return (
        <div>
            <input
                type="number"
                placeholder="Enter height"
                onChange={(e) => setHeight(Number(e.target.value))}
            /><br/><br/>
            <input
                type="number"
                placeholder="Enter width"
                onChange={(e) => setWidth(Number(e.target.value))}
            /><br/><br/>
            <Button onClick={calculateArea}>Calculate Square Area</Button><br/><br/>
            <p>Area of Square: {area}</p>
        </div> 
    );
}

function Triangle() {
    const [base, setBase] = useState(0);
    const [height, setHeight] = useState(0);
    const [area, setArea] = useState(0);

    const calculateArea = () => {
        const triangleArea = 0.5 * base * height;
        setArea(triangleArea);
    }

    return (
        <div>
            <input
                type="number"
                placeholder="Enter base"
                onChange={(e) => setBase(Number(e.target.value))}
            /><br/><br/>
            <input
                type="number"
                placeholder="Enter height"
                onChange={(e) => setHeight(Number(e.target.value))}
            /><br/><br/>
            <Button onClick={calculateArea}>Calculate Triangle Area</Button><br/><br/>
            <p>Area of Triangle: {area}</p>
        </div>
    );
}

function Circle() {
    const [radian, setRadian] = useState(0);
    const [area, setArea] = useState(0);

    const calculateArea = () => {
        const circleArea = 3.14 * radian * radian;
        setArea(circleArea);
    }

    return (
        <div >
            <input
                type="number"
                placeholder="Enter radian"
                onChange={(e) => setRadian(Number(e.target.value))}
            /><br/><br/>
            <Button onClick={calculateArea}>Calculate Circle Area</Button><br/><br/>
            <p>Area of Circle: {area}</p>
        </div>
    );
}

function Clause24() {
    const [selectedShape, setSelectedShape] = useState(null);

    return (
        <div className="centered-container">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} className="border p-3">
                        <Button onClick={() => setSelectedShape('Square')}>Calculate Square Area</Button>&nbsp;
                        <Button onClick={() => setSelectedShape('Triangle')}>Calculate Triangle Area</Button>&nbsp;
                        <Button onClick={() => setSelectedShape('Circle')}>Calculate Circle Area</Button>&nbsp;
                        <br/><br/>

                        {selectedShape === 'Square' && <Square />}
                        {selectedShape === 'Triangle' && <Triangle />}
                        {selectedShape === 'Circle' && <Circle />}
                        <br/>
                        <Button href="/">BackHome</Button>
 		            </Col>
                 </Row>
            </Container>
        </div>
    );
}


export default Clause24;
