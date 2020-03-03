import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/utils/Button";
import Multiply from "./components/containers/multiplication";

class App extends React.Component {

  handleClick = () => {
    alert("Alert from class 99999");
  }

  render() {
    return (
      <div>
        <Multiply />
        <div style={{textAlign : "center"}}>
          <Button text="20" onClick={this.handleClick}/>
          <Button text="10" onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));