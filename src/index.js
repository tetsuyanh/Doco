import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>This is React</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
