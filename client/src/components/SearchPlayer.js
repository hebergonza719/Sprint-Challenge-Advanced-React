import React from "react";
import { useSearch } from "../hooks/useSearch"

const SearchPlayer = () => {

  const [values, clearForm, handleChanges] = useSearch("");
  
  return (
    <div>
      <form>
          <input
            type="text"
            value={}
            onChange={}
          />
          <button onClick={}>fetch dogs</button>
        </form>
    </div>
  )
}