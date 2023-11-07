import React, { useState } from "react";

function Clause13() {
  const initialWoodValues = [
    { a: 0, b: 0 },
    { a: 0, b: 0 },
    { a: 0, b: 0 },
    { a: 0, b: 0 },
    { a: 0, b: 0 },
    { a: 0, b: 0 }
  ];
  const [result,setresult] = useState('');

  const [woodValues, setWoodValues] = useState(initialWoodValues);

  const updateWoodValue = (index, field, value) => {
    const updatedWoodValues = [...woodValues];
    updatedWoodValues[index][field] = parseInt(value) || 0;
    setWoodValues(updatedWoodValues);
  };

  const compareab = () => {
    console.log(woodValues);

    // ตรวจสอบว่าสามารถประกอบกล่องได้หรือไม่
    let canAssemble = true;

    for (let i = 0; i < woodValues.length; i++) {
      
      const a1 = woodValues[i].a;
      const b1 = woodValues[i].b;

      for (let j = i + 1; j < woodValues.length; j++) {
        const a2 = woodValues[j].a;
        const b2 = woodValues[j].b;

        if((a1 && a2)==(b1 && b2)){

        }else if((a1 && a2)==(b2 && b1)){
          
        }else if((a2 && a1)==(b2 && b1)){

        }else if((a2 && a1)==(b1 && b2)){

        }

        
      }
    }

    if (canAssemble) {
      setresult("Y")
    } else {
      setresult("N")
    }
  };

  return (
    <div>
      {woodValues.map((wood, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`a${index + 1}`}
            onChange={(e) => updateWoodValue(index, "a", e.target.value)}
          />
          <input
            type="text"
            placeholder={`b${index + 1}`}
            onChange={(e) => updateWoodValue(index, "b", e.target.value)}
          />
        </div>
      ))}
      <button onClick={compareab}>Compare</button><br/>
      Result: {result}
    </div>
  );
}

export default Clause13;
