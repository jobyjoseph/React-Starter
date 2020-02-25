import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/utils/Button";

const App = () => {
  return (
    <div>
      <Button />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));