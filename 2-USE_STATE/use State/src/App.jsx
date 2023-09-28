import { useState } from "react";
import Sports from "./Sports";
import "./App.css";

function gerRandomSports() {
  const SportsArray = ["futbol", "basketbol", "voleybol", "hentbol"];
  return SportsArray[Math.floor(Math.random() * SportsArray.length)];
}

function App() {
  const [sports, setSports] = useState([]);

  const HandleClick = () => {
    setSports([...sports, gerRandomSports()]);
  };

  const sporList = sports.map((sport, index) => {
    return <Sports key={index} sportName={sport} />;
  });

  return (
    <div className="App">
      <button onClick={HandleClick}>SPOR EKLE</button>
      <div> {sporList}</div>
    </div>
  );
}

export default App;
