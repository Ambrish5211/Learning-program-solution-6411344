import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 98 },
    { name: "Gill", score: 50 },
    { name: "Dhoni", score: 199 },
    { name: "Hardik", score: 66 },
    { name: "Rahul", score: 72 },
    { name: "Surya", score: 61 },
    { name: "Shreyas", score: 78 },
    { name: "Jadeja", score: 49 },
    { name: "Ashwin", score: 91 },
    { name: "Bumrah", score: 67 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      {players.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}

      <h3>Players with score below 70:</h3>
      {below70.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
