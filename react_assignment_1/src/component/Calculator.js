import React, { useState } from "react";

const Calculator = () => {
  const [N1, putN1] = useState("");
  const [N2, putN2] = useState("");
  const [result, putResult] = useState("");

  const handleInt1Change = (e) => {
    putN1(e.target.value);
  };

  const handleInt2Change = (e) => {
    putN2(e.target.value);
  };

  const solve = (op) => {
    const num1 = parseFloat(N1);
    const num2 = parseFloat(N2);

    if (isNaN(num1) || isNaN(num2)) {
      putResult("Enter Numeber");
      return;
    }

    let calcResult;

    switch (op) {
      case "+":
        calcResult = num1 + num2;
        break;
      case "-":
        calcResult = num1 - num2;
        break;
      case "*":
        calcResult = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          putResult("Can't divide by zero");
          return;
        }
        calcResult = num1 / num2;
        break;
      default:
        putResult("Invalid op");
        return;
    }

    putResult(` ${calcResult}`);
  };

  return (
    <div className="calc-container">
      <br/><br/>
      <input
        type="number"
        className="int-field"
        value={N1}
        onChange={handleInt1Change}
        placeholder="Enter number"
      />
      <br/><br/>
      <input
        type="number"
        className="int-field"
        value={N2}
        onChange={handleInt2Change}
        placeholder="Enter number"
      />
      <br/><br/><br/>
      <div > <input placeholder="Result" className="output"type="text" value={result} readOnly /></div>
      
      
      <hr style={{ marginBottom: '50px' }}/>
      <div className="btn-container">
        <button onClick={() => solve("+")}>Addition (+)</button>
        <button onClick={() => solve("-")}>Subtraction (-)</button>
      </div>
      <div className="btn-container">
        <button onClick={() => solve("*")}>Multiplication (*)</button>
        <button onClick={() => solve("/")}>Division (/)</button>
      </div>
      
    </div>
  );
};

export default Calculator;
