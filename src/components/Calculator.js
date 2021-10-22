import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
  }

  render() {
    const { result } = this.state;
    return (
      <div>
        <p className="result">{result}</p>
        <div className="button">
          <button type="button" className="grayBtn">AC</button>
          <button type="button" className="grayBtn">+/-</button>
          <button type="button" className="grayBtn">% </button>
          <button type="button" className="orangeBtn">÷</button>
          <button type="button" className="grayBtn">7</button>
          <button type="button" className="grayBtn">8</button>
          <button type="button" className="grayBtn">9</button>
          <button type="button" className="orangeBtn">x</button>
          <button type="button" className="grayBtn">4</button>
          <button type="button" className="grayBtn">5</button>
          <button type="button" className="grayBtn">6</button>
          <button type="button" className="orangeBtn">-</button>
          <button type="button" className="grayBtn">1</button>
          <button type="button" className="grayBtn">2</button>
          <button type="button" className="grayBtn">3</button>
          <button type="button" className="orangeBtn">+</button>
          <button type="button" className="grayBtn" id="zero">0</button>
          <button type="button" className="grayBtn">.</button>
          <button type="button" className="orangeBtn">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
