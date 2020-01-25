import { useState } from "react";

export const useSearch = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChanges = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValues);
  };


  return [values, clearForm, handleChanges]
};