import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Options from "./Options";
import HogList from "./HogList";
import HogForm from "./HogForm";

function App() {
  const [checked, setChecked] = useState(false);
  const [sortby, setSortby] = useState("a");
  const [hogsList, setHogsList] = useState(hogs);

  function addHog(hog) {
    setHogsList([...hogsList, hog]);
  }

  return (
    <div className="App">
      <Nav />
      <Options setChecked={setChecked} setSortby={setSortby} />
      <HogList hogs={hogsList} checked={checked} sortby={sortby} />
      <HogForm addHog={addHog} />
    </div>
  );
}

export default App;
