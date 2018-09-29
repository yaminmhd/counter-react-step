import React, { Component } from "react";
import "./App.css";
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Counter user="Yamin"/>
      </div>
    );
  }
}

export default App;
