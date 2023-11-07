import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function FirstLast6(n){
    return n.includes(6)
}

function Clause33(){
    const x = [1,2,6];
    const y = [6,1,2,3];
    const z = [3,2,1];
    const result1 = FirstLast6(x);
    const result2 = FirstLast6(y);
    const result3 = FirstLast6(z);

    return(
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
    )
}
export default Clause33;