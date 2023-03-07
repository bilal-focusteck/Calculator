import React from "react";
import Addition from './Addition';
import Subtraction from './Subtraction';
import Multiplication from './Multiplication';
import Division from './Division';
import Mod from './Mod';

function Calculate(){
  return (
  <ol>
      <li>{Addition(10,10)}</li>
      <li>{Subtraction(20,10)}</li>
      <li>{Multiplication(10,10)}</li>
      <li>{Division(50,10)}</li>
      <li>{Mod(50,9)}</li>
    </ol>
  )  
}
export default Calculate;