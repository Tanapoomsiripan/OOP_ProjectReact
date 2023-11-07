import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Clause26() {
  const [n, setN] = useState(0);
  const [data, setData] = useState([]);
  const [comp,setComp] = useState(" ");
  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === 'n') {
      setN(parseInt(inputValue, 10));
    } else if (inputName === 'data') {
      const dataArray = inputValue.split(' ').map(Number);
      setData(dataArray);
    } 
    
  };

  const S1More4=()=>{
    
    let countfor1 = 0;
    let countfor4 = 0;
    for(const step of data){
      if(step === 1){
        countfor1++;
      }
      if(step === 4){
        countfor4++;
      }
    }
    if(countfor1 > countfor4){
      setComp("True");
    }else setComp("False");
  }
  

  return (
    <div className="centered-container">
       <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={4} className="border p-3">
                  <h1>S1More4</h1>
                    <div>
                        <label>n (จำนวนข้อมูล):</label>{" "}<br/>
                        <input
                            type="number"
                            name="n"
                            value={n}
                            onChange={handleInputChange}
                        />
                    </div>
                    <br/>
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
                    <Button onClick={S1More4}>Submit</Button>
                    <br/><br/>
                    Output {comp}<br/><br/>
                    <Button href="/">BackHome</Button>

 		            </Col>
            </Row>
    </Container>
     
    </div>
  );
}

export default Clause26;
