import { useState, useEffect } from "react";
import React from "react";

function CreateAkvar({ data }) {
  const [valid, setValid] = useState(false);
  const [akvarium, setAkvarium] = useState({
    vyska: "",
    sirka: "",
    delka: "",
  });
  const [akvarSize, setAkvarSize] = useState(0);
  const [smallFish, setSmallFish] = useState(0);
  const [bigFish, setBigFish] = useState(0);

  const handleSize = (item) => {
    const temp = (item.vyska * item.sirka * item.delka) / 1000;
    setAkvarSize(temp);
  };
  const handleChange = (e) => {
    const source = e.target.name;
    const val = Number(e.target.value);
    if (val < 0) return;
    let updatedItem;
    switch (source) {
      case "vyska": {
        updatedItem = { ...akvarium, vyska: val };
        break;
      }
      case "sirka": {
        updatedItem = { ...akvarium, sirka: val };
        break;
      }
      case "delka": {
        updatedItem = { ...akvarium, delka: val };
        break;
      }
      default:
        break;
    }
    setAkvarium(updatedItem);
    handleSize(updatedItem);
  };

  const smallNeeds = 10;
  const bigNeeds = 20;

  useEffect(() => {
    const smallCount = data.filter((item) => item.size === "mala").length;
    const bigCount = data.filter((item) => item.size === "velka").length;
    setSmallFish(smallCount);
    setBigFish(bigCount);

    const totalFishVolume = smallCount * smallNeeds + bigCount * bigNeeds;
    if (totalFishVolume > akvarSize) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [data, akvarSize]); // Akvarium se počítá podle změn data a akvarSize

  const resetAkvarium = () => {
    const temp = {
      vyska: 0,
      sirka: 0,
      delka: 0,
    };
    setAkvarium(temp);
  };

  return (
    <div className="">
      <div className="d-flex flex-column">
        <h5>Zadejte hodnoty nového akvária</h5>
        <label htmlFor="vyska">Vyška v cm</label>
        <input
          type="number"
          name="vyska"
          id="vyska"
          placeholder="výška (cm)"
          value={akvarium.vyska}
          onChange={handleChange}
        />
        <label htmlFor="sirka">Šiřka cm</label>
        <input
          type="number"
          name="sirka"
          id="sirka"
          placeholder="šířka (cm)"
          value={akvarium.sirka}
          onChange={handleChange}
        />
        <label htmlFor="delka">Dálka cm</label>
        <input
          type="number"
          name="delka"
          id="delka"
          placeholder="délka (cm)"
          value={akvarium.delka}
          onChange={handleChange}
        />
      </div>

      <button
        className={valid === false ? "btn btn-danger" : "btn btn-success"}
        disabled={!valid}
        onClick={() => {
          resetAkvarium();
        }}
      >
        Schválit
      </button>
      <div className="vypis">
        <p>Velikost kavária je {akvarSize} litru</p>
      </div>
    </div>
  );
}

export default CreateAkvar;
