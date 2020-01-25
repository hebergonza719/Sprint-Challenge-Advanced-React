import React from "react";
import { usePlayers } from "../hooks/usePlayers";

const FetchPlayers = () => {
  const [values, handleFetch] = usePlayers([]);

  handleFetch();
  return values;
}

export default FetchPlayers;