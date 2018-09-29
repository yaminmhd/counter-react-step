import React, { Component } from "react";
import "./Counter.css";
import Button from "./Button";
import Label from './Label';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
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
        <Label user={user}/>
        <Button onClickHandler={this.decrement}>-</Button>
        {this.state.count}
        <Button onClickHandler={this.increment}>+</Button>
      </div>
    );
  }
}

export default Counter;
