import React, { Component } from "react";
import "./App.css";
import TotalScore from "./TotalScore";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  decrement() {
    this.setState(state => {
      return {
        count: state.count - 1
      };
    });
  }

  increment() {
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  }

  render() {
    const {name} = this.props;
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>{name}</h1>
        <div id="main-counter">
          <button onClick={this.decrement.bind(this)}>-</button>
          {this.state.count}
          <button onClick={this.increment.bind(this)}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
