import React, { Component } from 'react';

// Guest View Component
const GuestPage = () => (
  <div>
    <h2>✈️ Welcome Guest</h2>
    <p>You can browse flight details but need to log in to book tickets.</p>
    <ul>
      <li>IndiGo: Kolkata to Delhi – ₹4,500</li>
      <li>SpiceJet: Mumbai to Bengaluru – ₹3,800</li>
      <li>Air India: Delhi to Chennai – ₹5,200</li>
    </ul>
  </div>
);

// Logged-In User View Component
const UserPage = () => (
  <div>
    <h2>👤 Welcome, User!</h2>
    <p>You can now book your flight tickets.</p>
    <button onClick={() => alert("Ticket Booked Successfully!")}>Book Ticket</button>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let content;
    if (this.state.isLoggedIn) {
      content = <UserPage />;
    } else {
      content = <GuestPage />;
    }

    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>🛫 Ticket Booking App</h1>
        {this.state.isLoggedIn ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
        )}

        <hr />
        {content}
      </div>
    );
  }
}

export default App;
  