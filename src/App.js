import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Calc from "./components/Calc/Calc";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0"
    };
  }

  render() {
    return (
      <div className='App'>
        <Calc />
      </div>
    );
  }
}

export default App;
