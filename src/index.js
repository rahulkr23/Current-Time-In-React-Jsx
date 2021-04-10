import React from 'react';
import ReactDom from 'react-dom';

const name = 'rahul';
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDom.render(
  <>

  <h1> Hello, my Name is {name} </h1>
  <p>Current Date is = {currDate} </p>
  <p>Current Time is = {currTime} </p>
  
 </> ,
  document.getElementById('root')
    
);
