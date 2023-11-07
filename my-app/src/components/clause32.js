import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function ExtraEnd(str){
    let strlast = str.charAt(str.length - 1);
    let strbeforelast = str.charAt(str.length - 2);
    let strresult = strbeforelast+strlast;
    return strresult.repeat(3);
}


function Clause32(){

    const result1 = ExtraEnd("Hello");
    const result2 = ExtraEnd("ab");
    const result3 = ExtraEnd("Hi");

    return(
        <div className="centered-container">
        <Container>
            <Row className="justify-content-center">
                  <Col xs={12} md={4} className="border p-3">
                      <p>{result1}</p>
                      <p>{result2}</p>
                      <p>{result3}</p><br/>
                      <Button href="/">BackHome</Button>
                  </Col>
            </Row>
         </Container>
        </div>
    )
}
export default Clause32;