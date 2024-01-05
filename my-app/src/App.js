import React, { Component } from 'react';
import "./App.css"; 
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  BrowserRouter, 
} from "react-router-dom"; 
import Home from './option/Home';
import Clause1 from './components/clause1';
import Clause2 from './components/clause2';
import Clause3 from './components/clause3';
import Clause5 from './components/clause5';
import Clause6 from './components/clause6';
import Clause7 from './components/clause7';
import Clause24 from './components/clause24';
import Homework25 from './components/clause25';
import Clause11 from './components/clause11';
import Clause28 from './components/clause28';
import Clause26 from './components/clause26';
import Clause15 from './components/clause15';
import Clause8 from './components/clause8';
import Clause9 from './components/clause9';
import Clause13 from './components/clause13';
import Clause16 from './components/clause16';
import Clause30 from './components/clause30';
import Clause31 from './components/clause31';
import Clause32 from './components/clause32';
import Clause33 from './components/clause33';
import Clause34 from './components/clause34';
import Clause17 from './components/clause17';
import Clause4 from './components/clause4';
import 'bootstrap/dist/css/bootstrap.min.css';





 function App (){
 
  

  
  
  return (
    <div>
    <BrowserRouter>
    
      <Routes>
        
          <Route path='/' element={<Home/>}/>
          <Route path='clause1' element={<Clause1/>}/>
          <Route path='clause2' element={<Clause2/>}/>
          <Route path='clause3' element={<Clause3/>}/>
          <Route path='clause5' element={<Clause5/>}/>
          <Route path='clause6' element={<Clause6/>}/>
          <Route path='clause24' element={<Clause24/>}/>
          <Route path='clause25' element={<Homework25/>}/>
          <Route path='clause11' element={<Clause11/>}/>
          <Route path='clause7' element={<Clause7/>}/>
          <Route path='clause28' element={<Clause28/>}/>
          <Route path='clause26' element={<Clause26/>}/>
          <Route path='clause15' element={<Clause15/>}/>
          <Route path='clause8' element={<Clause8/>}/>
          <Route path='clause9' element={<Clause9/>}/>
          <Route path='clause13' element={<Clause13/>}/>
          <Route path='clause16' element={<Clause16/>}/>
          <Route path='clause30' element={<Clause30/>}/>
          <Route path='clause31' element={<Clause31/>}/>
          <Route path='clause32' element={<Clause32/>}/>
          <Route path='clause33' element={<Clause33/>}/>
          <Route path='clause34' element={<Clause34/>}/>
          <Route path='clause17' element={<Clause17/>}/>
          <Route path='clause4' element={<Clause4 />}/>
      </Routes>
    </BrowserRouter>
    
    
    </div>
  );
}



export default App;


