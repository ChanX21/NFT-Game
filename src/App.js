import './App.css';
import NavbarC from './Components/Navbar';
import React, { Component } from 'react';
import blank from './images2/blank.png';

const NumForFun=[1,2,3,4,5,6,7,8,9,10]
function App() {

 

  return (
    <div className="App">
      
     <NavbarC/>
     
     <div className='ListOfBlocks'>
     {NumForFun.map(name => <img src={blank} alt="Logo" width="120"/>)} <br/>
     {NumForFun.map(name => <img src={blank} alt="Logo" width="120"/>)}
     </div>
      

     
    </div>
  );
}

export default App;
