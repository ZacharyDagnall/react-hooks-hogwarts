import React, { useState } from "react";

const HogForm = ({ addHog }) => {
  const [hogObj, setHogObj] = useState({
    name: "",
    weight: 0,
    specialty: "",
    greased: false,
    "highest medal achieved": "none",
  });

  function handleChange(e) {
    let key = e.target.name;
    let val = e.target.value;

    setHogObj({
      ...hogObj,
      [key]: val,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addHog(hogObj);
  }

  return (
    <form id="new-pig" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={hogObj.name}
        onChange={handleChange}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="specialty"
        name="specialty"
        value={hogObj.specialty}
        onChange={handleChange}
      ></input>
      <br></br>
      <input
        type="number"
        placeholder="weight"
        name="weight"
        value={hogObj.weight}
        onChange={handleChange}
      ></input>
      <br></br>
      <label htmlFor="greased">Is this pig greased? </label>
      <input
        type="checkbox"
        name="greased"
        value={hogObj.greased}
        onChange={handleChange}
      ></input>
      <br></br>
      <select
        type="text"
        placeholder="highest medal achieved"
        name="highest medal achieved"
        value={hogObj["highest medal achieved"]}
        onChange={handleChange}
      >
        <option value="Gold">Gold</option>
        <option value="Silver">Silver</option>
        <option value="Bronze">Bronze</option>
        <option value="Platinum">Platinum</option>
        <option value="None">None</option>
      </select>
      <br></br>
      <button type="submit">Log da hog!!</button>
    </form>
  );
};

export default HogForm;
