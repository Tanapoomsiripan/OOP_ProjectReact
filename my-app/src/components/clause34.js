import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function SameFirstLast(ary) {
    if (ary.length >= 1) {
        const firstElement = ary[0];
        const lastElement = ary[ary.length - 1];
        return firstElement === lastElement;
    } else {
        return false; // Handle the case when the array is empty.
    }
}

function Clause34() {
    const x = [1, 2, 3];
    const y = [1, 2, 3, 1];
    const z = [1, 2, 1];
    const result1 = SameFirstLast(x);
    const result2 = SameFirstLast(y);
    const result3 = SameFirstLast(z);

    return (
        <div className="centered-container">
             <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={4} className="border p-3">
                            {result1.toString()} <br/><br/>
                            {result2.toString()} <br/><br/>
                            {result3.toString()}<br/><br/>
                            <Button href="/">BackHome</Button>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
}

export default Clause34;
