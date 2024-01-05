import React, { Component, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CanvasJSReact from '@canvasjs/react-charts';
import 'chart.js/auto';
import { Bar, Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

function Clause4() {
  const [inputValues, setInputValues] = useState([]);
  const [rows,setRows]=useState(0);
  const [cols,setCols] = useState(2);
  const [max,setMax] = useState(0);
  const [inputCount, setInputCount] = useState(0);
  const [min,setMin] = useState(0);
  const [avg,setAvg] = useState(0)
  const [a,setA] = useState('');
  let x = [];
  let y = [];
  
  const numbers = [23, 58,88,16,27];
  let maxNumber = Number.NEGATIVE_INFINITY;

  fetch('http://localhost:3000/item',{
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error("Error fetching data:", error);
    });

  function showData() {
    fetch('http://localhost:3000/item',{
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        //console.log("Data from server:", data);
        //console.log(data);
        data.forEach(val => {
          let number = val.number;
          let xValues = val.x;
          let yValues = val.y;
        
          console.log("Number:", number);
          console.log("X Values:", xValues);
          console.log("Y Values:", yValues);
        
          document.getElementById("count").value = number
          const updatedInputValues = xValues.map((x, index) => [x, yValues[index]]);
          setInputValues(updatedInputValues)
          console.log(updatedInputValues)
          // สามารถทำอะไรก็ได้ที่นี่โดยใช้ number, xValues, และ yValues
        });
      
        //data.forEach(val => {
          //let a = `${val.number} `;
          //let b = `${val.x} `;
          //let c = `${val.y}`;
          //console.log(a);
          //console.log(b);
          //console.log(c);
          //console.log(val.x[0]);
          //const updatedInputValues = data.map(val => [val.x, val.y]);
          //console.log(updatedInputValues)
          //setInputValues(updatedInputValues);
          //document.getElementById("count").value = a
          //setInputCount(a)
          
        });

       
         
    //  })
      
  }
  
    
  const Findmax = () => {
    setMax(Math.max(...inputValues.flat()));
  

  
    setMin(Math.min(...inputValues.flat()));
  
    const numbers = inputValues.flat().map(value => parseFloat(value));
  
    
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
       sum = numbers[i]+ sum;
    }

    setAvg((sum / numbers.length).toFixed(2));
    
  }
  

  console.log(inputValues.flat())
  
    

  const handleInput = (rowIndex,colIndex,value) =>{
    const newArray = [...inputValues];
    newArray[rowIndex][colIndex] = value;
    setInputValues(newArray);
  }

  const addInputFields = () => {
    console.log("Input count:", inputCount);
    const count = parseInt(inputCount);
    setInputValues(Array.from({length: count},()=> Array(cols).fill()));
    console.log("Input values:", Array.from({length: count}, () => Array(cols).fill()));

  };
  
  for(let i = 0;i<inputValues.length;i++){
    x[i] = inputValues[i][0];
    y[i] = inputValues[i][1];
    
  }
   
  console.log(inputValues)
  console.log(x)
  console.log(y)
  return (
    <div className="centered-container">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={9} className="border p-3">
            <h1>Find the Maximum Number</h1>
              <input
                type="text"
                id="count"
                onChange={(e) => setInputCount(e.target.value)}
            />{" "}
            <Button onClick={addInputFields}>เพิ่ม Input Fields</Button><br/>
            <br/>

            {inputValues.map((row, rowIndex) => (
              <div key={rowIndex}>
                {row.map((col,colIndex)=>(
                  <input
                    key={colIndex}
                    type='text'
                    id ="num"
                    value={inputValues[rowIndex][colIndex]}
                    onChange={(e)=>handleInput(rowIndex,colIndex,e.target.value)
                  
                 }
                  />
                ))}
              </div>
              
           
               ))}
            <Button onClick={Findmax}>FindMax</Button>{"  "}
            <Button onClick={showData}>Data</Button>
            <p>Maximum Number: {max}</p>
            <p>Minimun Number: {min}</p>
            <p>AVerrage : {avg}</p>
            <Button href="/">BackHome</Button>
            

 		      </Col>
        </Row>
        
       </Container>
       


        <br/>
        <div style={{width: 700}}>
        <Bar
            datasetIdKey='id'
            data={{
              labels: ['Max', 'Min', 'Avg'],
              datasets: [
                {
                  id: 1,
                  label: 'Max Min Avg',
                  data: [max,min,avg],
                  fill: false,
                  borderColor: 'rgba(75,192,192,1)', // สีของเส้นกราฟ
                  borderWidth: 2, // ความหนาของเส้นกราฟ
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked: true,
                },
              },
              elements: {
                point: {
                  radius: 5,
                },
              },
              plugins: {
                legend: {
                  display: true,
                },
                tooltip: {
                  enabled: true,
                },
              },
              showLine: true, // เปิดใช้งานเส้นเชื่อม
            }}
/>


        </div>

        
       
    </div>
  );
}



export default Clause4 ;
