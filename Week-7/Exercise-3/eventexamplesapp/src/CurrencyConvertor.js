import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      rupees: "",
    };
  }

  handleChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const rupees = parseFloat(this.state.rupees);
    const conversionRate = 0.011; // INR to EUR (example rate)

    if (!isNaN(rupees)) {
      const euros = rupees * conversionRate;
      alert(`Equivalent Euro: €${euros.toFixed(2)}`);
    } else {
      alert("Please enter a valid number");
    }
  };

  render() {
    return (
      <div>
        <h2>💱 Currency Convertor (INR → EUR)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount in INR"
            value={this.state.rupees}
            onChange={this.handleChange}
          />
          <button type="submit">Convert</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
