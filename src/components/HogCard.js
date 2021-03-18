import React, { useState } from "react";

const HogCard = ({
  id,
  name,
  weight,
  specialty,
  hma,
  greased,
  image,
  displayedKid,
  setDisplayedKid,
  displayAll,
  setDisplayAll,
}) => {
  function handleClick() {
    displayedKid === id ? setDisplayedKid(-1) : setDisplayedKid(id);
  }

  const [hidden, setHidden] = useState(false);
  function handleHide() {
    setHidden(!hidden);
    setDisplayAll(false);
  }

  return (
    <div
      className={
        !displayAll
          ? hidden
            ? "hiddenPig ui-eight-wide-column pigTile"
            : "ui-eight-wide-column pigTile"
          : "ui-eight-wide-column pigTile"
      }
    >
      <div onClick={handleClick}>
        <div className="image">
          <img src={image} alt={name} className="pigImage" />
        </div>
        <div className="content">
          <span className="header">{name}</span>
          <button onClick={handleHide}> Hide this hog!!</button>
          <div id="details" className={displayedKid === id ? "" : "hidden"}>
            <div className="meta">
              <span className="weight">Weight: {weight}</span>
            </div>
            <div className="meta">
              <span className="greased">{greased ? "Greased!" : ""}</span>
            </div>
            <div className="specialty">Specialty: {specialty}</div>
            <div className="highest-medal-achieved">
              Highest Medal Achieved: {hma}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HogCard;
