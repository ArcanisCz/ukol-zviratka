import React from "react";
import "./style.css";

const Search = ({ setInputValue, inputValue }) => {
  return (
    <>
      <label>Hledej:</label>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

export default Search;
