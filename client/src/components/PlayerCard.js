import React from "react";

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h3>Name: {player.name}</h3>
      <h3>Country: {player.country}</h3>
      <h3>Searches: {player.searches}</h3>
    </div>
  )
}

export default PlayerCard;