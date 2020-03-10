import React from "react";
import "./style.css";

function Multiply(props) {
  return (
    <>
      <div className="lineItem">{props.num1} x {props.num2}</div>
      <div className="lineItem">=</div>
    </>
  )
}

export default Multiply;