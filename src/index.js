import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/utils/Button";
import Multiply from "./components/containers/multiplication";

class App extends React.Component {

  // Calculate product and store in a variable
  // We need to display the right product in one of the buttons and some wrong values in the other button.
  // Need to take the text of clicked button and verify its correctness
  constructor(){
    super();
    this.num1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.num2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    this.state = {
      num1 : 0,
      num2 : 0,
      product : 0
    }
  }

  componentDidMount = () => {
    this.loadNewQuestion();
  }

  loadNewQuestion = () => {
    const num1 = this.num1Array[this.generateRandomNumber()];
    const num2 = this.num2Array[this.generateRandomNumber()];
    const product = num1 * num2;

    this.setState({
      num1: num1,
      num2: num2,
      product: product
    });

  }

  generateRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  }

  handleClick = () => {
    alert("Alert from class 99999");
  }

  render() {
    let btn1Text = this.state.product + this.generateRandomNumber() + 1;
    let btn2Text = this.state.product;
    if(this.generateRandomNumber() % 2 == 1) {
      btn1Text = this.state.product;
      btn2Text = this.state.product + this.generateRandomNumber() + 1;
    }

    return (
      <div>
        <Multiply num1={this.state.num1} num2={this.state.num2}/>
        <div style={{textAlign : "center"}}>
          <Button text={btn1Text} onClick={this.handleClick}/>
          <Button text={btn2Text} onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));