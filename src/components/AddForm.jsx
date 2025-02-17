import { useState } from "react";
import React from "react";
import "./addFrom.css";

function AddForm({ data, pridej }) {
  const [valid, setValid] = useState(false);
  const [newItem, setNewItem] = useState({
    id: data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1,
    name: "",
    size: "Mala",
  });

  const handleChange = (e) => {
    const source = e.target.name;

    const val = e.target.value;
    let updatedItem;
    switch (source) {
      case "name": {
        updatedItem = { ...newItem, name: val };
        break;
      }
      case "size": {
        updatedItem = { ...newItem, size: val };
        break;
      }
      default:
        break;
    }

    setNewItem(updatedItem);
    setValid(updatedItem.name.trim() !== "");
  };
  const resetNewItem = () => {
    const temp = {
      id: newItem.id + 1,
      name: "",
      size: "Mala",
    };
    setNewItem(temp);
  };
  return (
    <div className="d-flex justify-content-around">
      <input
        className="form-control"
        type="text"
        name="name"
        id="name"
        placeholder="Jmeno"
        value={newItem.name}
        onChange={handleChange}
      />
      <select className="form-select mx-3" name="size" onChange={handleChange}>
        <option value="mala">Malá </option>
        <option value="velka">Velká </option>
      </select>
      <button
        className="btn btn-success tlacitko mx-3"
        disabled={!valid}
        onClick={() => {
          resetNewItem();
          pridej(newItem);
          setValid(false);
        }}
      >
        Přidej
      </button>
    </div>
  );
}

export default AddForm;
