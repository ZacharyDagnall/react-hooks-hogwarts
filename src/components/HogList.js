import React, { useState } from "react";

import HogCard from "./HogCard";

import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

const HogList = ({ hogs, checked, sortby }) => {
  const pigpics = {
    "Piggy Smalls": piggy_smalls,
    Piglet: piglet,
    Porkchop: porkchop,
    Trouble: trouble,
    "Augustus Gloop": augustus_gloop,
    Babe: babe,
    Bailey: bailey,
    Cherub: cherub,
    "Galaxy Note": galaxy_note,
    "Leggo My Eggo": leggo_my_eggo,
    Peppa: peppa,
    "Truffle Shuffle": truffle_shuffle,
  };
  const [displayedKid, setDisplayedKid] = useState(-1);

  const filteredHogs = hogs.filter((hog) => (checked ? hog.greased : true));
  const sortedHogs = filteredHogs.sort((a, b) => {
    switch (sortby) {
      case "z":
        return b.name.localeCompare(a.name);
      case "high":
        return b.weight - a.weight;
      case "low":
        return a.weight - b.weight;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const [displayAll, setDisplayAll] = useState(true);
  function unhideHogs() {
    setDisplayAll(true);
  }

  return (
    <div className="ui-grid-container">
      <button id="unHideAll" onClick={unhideHogs}>
        unhide hogs
      </button>
      {sortedHogs.map((hog) => {
        return (
          <HogCard
            key={hog.name}
            id={hog.id}
            name={hog.name}
            greased={hog.greased}
            weight={hog.weight}
            specialty={hog.specialty}
            hma={hog["highest medal achieved"]}
            image={pigpics[hog.name] ? pigpics[hog.name] : babe}
            displayedKid={displayedKid}
            setDisplayedKid={setDisplayedKid}
            displayAll={displayAll}
            setDisplayAll={setDisplayAll}
          />
        );
      })}
    </div>
  );
};

export default HogList;
