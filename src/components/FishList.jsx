import React from "react";
import "./fishList.css";
function FishList({ data, handleDelete }) {
  return (
    <div className="">
      {data.map((item) => {
        return (
          <div key={item.id} className="container ryby-list">
            <div className="d-flex justify-content-between">
              <span>
                Jméno rybky: {item.name}, Velikost rybky: {item.size}
              </span>
              <button
                onClick={() => handleDelete(item.id)}
                className="btn btn-success"
              >
                Smaž
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default FishList;
