import React from 'react';
import ListofPlayers from './components/ListofPlayers.js';
import IndianPlayers from './components/IndianPlayers.js';

function App() {
  const flag = false; 
  return (
    <div className="App">
      <h1>🏏 Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
