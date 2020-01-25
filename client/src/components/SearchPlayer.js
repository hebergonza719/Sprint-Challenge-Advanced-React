import React from "react";
import { useSearch } from "../hooks/useSearch"
import PlayerCard from "./PlayerCard";

const SearchPlayer = ({ players }) => {

  const [values, handleChanges, handleSubmit, searchValue] = useSearch("", players);
  
  console.log("this is values", values);

  return (
    <div>
      <form>
        <input
          type="text"
          value={values}
          onChange={handleChanges}
          name="searchBar"
        />
        <button onClick={handleSubmit}>Search Player Name</button>
      </form>
      
      {searchValue.length === 0 && 
        <div>
          {players.map(player => {
            return <PlayerCard player={player}/>
          })}
        </div>
      }

      {searchValue &&
        searchValue.map(player => {
          return <PlayerCard player={player}/>
        })
      }
    </div>
  )
}

export default SearchPlayer;