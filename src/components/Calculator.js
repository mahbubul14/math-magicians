import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div>
        <p className="result">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </p>
        <div className="button">
          <button type="button" className="grayBtn" name="AC" onClick={(e) => this.handleEvent(e.target.name)}>AC</button>
          <button type="button" className="grayBtn" name="+/-" onClick={(e) => this.handleEvent(e.target.name)}>+/-</button>
          <button type="button" className="grayBtn" name="%" onClick={(e) => this.handleEvent(e.target.name)}>%</button>
          <button type="button" className="orangeBtn" name="÷" onClick={(e) => this.handleEvent(e.target.name)}>÷</button>
          <button type="button" className="grayBtn" name="7" onClick={(e) => this.handleEvent(e.target.name)}>7</button>
          <button type="button" className="grayBtn" name="8" onClick={(e) => this.handleEvent(e.target.name)}>8</button>
          <button type="button" className="grayBtn" name="9" onClick={(e) => this.handleEvent(e.target.name)}>9</button>
          <button type="button" className="orangeBtn" name="x" onClick={(e) => this.handleEvent(e.target.name)}>x</button>
          <button type="button" className="grayBtn" name="4" onClick={(e) => this.handleEvent(e.target.name)}>4</button>
          <button type="button" className="grayBtn" name="5" onClick={(e) => this.handleEvent(e.target.name)}>5</button>
          <button type="button" className="grayBtn" name="6" onClick={(e) => this.handleEvent(e.target.name)}>6</button>
          <button type="button" className="orangeBtn" name="-" onClick={(e) => this.handleEvent(e.target.name)}>-</button>
          <button type="button" className="grayBtn" name="1" onClick={(e) => this.handleEvent(e.target.name)}>1</button>
          <button type="button" className="grayBtn" name="2" onClick={(e) => this.handleEvent(e.target.name)}>2</button>
          <button type="button" className="grayBtn" name="3" onClick={(e) => this.handleEvent(e.target.name)}>3</button>
          <button type="button" className="orangeBtn" name="+" onClick={(e) => this.handleEvent(e.target.name)}>+</button>
          <button type="button" className="grayBtn" id="zero" name="0" onClick={(e) => this.handleEvent(e.target.name)}>0</button>
          <button type="button" className="grayBtn" name="." onClick={(e) => this.handleEvent(e.target.name)}>.</button>
          <button type="button" className="orangeBtn" name="=" onClick={(e) => this.handleEvent(e.target.name)}>=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
