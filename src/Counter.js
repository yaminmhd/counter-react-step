import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.initialScore
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    console.log("This increment button was clicked!");

    const newValue = { ...this.state };
    newValue.count++;
    this.setState({
      count: newValue.count
    });
  }

  decrement() {
    console.log("This decrement button was clicked!");
    const newValue = { ...this.state };
    newValue.count--;
    this.setState({
      count: newValue.count
    });
  }

  render() {
    const { user } = this.props;
    return (
      <div id="main-counter">
        <div>Player: {user}</div>
        <button onClick={this.decrement}>-</button>
        {this.state.count}
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
