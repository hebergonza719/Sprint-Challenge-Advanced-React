import { useState } from "react";

export const usePlayers = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleFetch = () => {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(response => {
        setValues(response);
      })
      .catch(err => {console.log("This is the error ", err);});
  }


  return [values, handleFetch];
};