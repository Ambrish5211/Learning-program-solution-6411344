import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    // Binding for class methods
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleSyntheticEvent = this.handleSyntheticEvent.bind(this);
  }

  // Method to increment counter
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  // Method to say hello
  sayHello = () => {
    console.log("Hello! Welcome to React Events.");
  };

  // Method to handle Increment button click
  handleIncrementClick = () => {
    this.incrementCounter();
    this.sayHello();
  };

  // Decrement method
  handleDecrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  // Say Welcome with argument
  sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic event example
  handleSyntheticEvent(e) {
    e.preventDefault();
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ padding: "30px", fontFamily: "Arial" }}>
        <h1>🧪 React Event Handling Examples</h1>

        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome to the React Event Lab!")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.handleSyntheticEvent}>OnPress</button>

        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
