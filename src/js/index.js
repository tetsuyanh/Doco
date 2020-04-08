import React from "react";
import ReactDOM from "react-dom";

import MainScreen from "./components/MainScreen";

class App extends React.Component {
  render() {
    const message = "this is es6 style message!!!!";

    return (
      <div>
        <h2>This is React</h2>
        <p>I am React, nice to see you.</p>
        <p>You are human.</p>
        <p>insert message: {message}</p>
        <MainScreen />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
