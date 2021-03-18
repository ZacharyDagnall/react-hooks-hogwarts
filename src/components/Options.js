import React from "react";

const Options = ({ setSortby, setChecked }) => {
  function handleDropdown(e) {
    setSortby(e.target.value);
  }

  function handleCheck() {
    setChecked((checked) => !checked);
  }

  return (
    <div>
      <input
        type="checkbox"
        name="Greased"
        id="greased-check"
        onClick={handleCheck}
      />
      <label htmlFor="Greased">Show greased pigs only?</label>
      <br></br>
      <label htmlFor="dropdown">Sort by: </label>
      <select name="dropdown" onChange={handleDropdown}>
        <option value={"a"}>Name, A-Z</option>
        <option value={"z"}>Name, Z-A</option>
        <option value={"high"}>Weight, high to low</option>
        <option value={"low"}>Weight, low to high</option>
      </select>
    </div>
  );
};

export default Options;
