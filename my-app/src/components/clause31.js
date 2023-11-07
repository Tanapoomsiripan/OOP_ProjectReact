import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function FrontTimes(str,n){
    if (n >= 0 && Number.isInteger(n)) {
        const str3  = str.substr(0,3);
        return str3.repeat(n);
      } else {
        return "Invalid input for n";
      }


}

function Clause31(){
    const result1 = FrontTimes("Chocolate",2);
    const result2 = FrontTimes("Chocolate",3);
    const result3 = FrontTimes("Abc",2);
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
export default Clause31;