import React from 'react';

const IndianPlayers = () => {
  const team = ["Rohit", "Kohli", "Gill", "Surya", "Hardik", "Jadeja"];

  const [player1, player2, player3, player4, player5, player6] = team;
  const oddPlayers = [player1, player3, player5];
  const evenPlayers = [player2, player4, player6];

  const T20players = ["Rohit", "Kohli", "Gill"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Saha"];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players:</h2>
      {oddPlayers.map((player, i) => (
        <p key={i}>{player}</p>
      ))}

      <h2>Even Team Players:</h2>
      {evenPlayers.map((player, i) => (
        <p key={i}>{player}</p>
      ))}

      <h2>Merged Players (T20 + Ranji):</h2>
      {mergedPlayers.map((player, i) => (
        <p key={i}>{player}</p>
      ))}
    </div>
  );
};

export default IndianPlayers;
