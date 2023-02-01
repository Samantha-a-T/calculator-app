import React from "react";
import "./Calculator.css";

export default function Calculator() {
  return (
    <div className="Calculator">
      <div className="calculator-results">
        <h1 className="calculator-results-child" id="calculator-results">24</h1>
      </div>
      <div className="calculator-buttons">
        <div className="calculator-button"> 7</div>
        <div className="calculator-button"> 8</div>
        <div className="calculator-button"> 9</div>
        <div className="calculator-button operation"> x</div>
        <div className="calculator-button"> 4</div>
        <div className="calculator-button"> 5</div>
        <div className="calculator-button"> 6</div>
        <div className="calculator-button operation"> -</div>
        <div className="calculator-button"> 1</div>
        <div className="calculator-button"> 2</div>
        <div className="calculator-button"> 3</div>
        <div className="calculator-button operation"> +</div>
        <div className="calculator-button"> 0</div>
        <div className="calculator-button"> .</div>
        <div className="calculator-button operation"> /</div>
        <div className="calculator-button operation"> =</div>
      </div>
    </div>
  );
}
