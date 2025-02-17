import { useState } from "react";
import "./App.css";
import rawData from "./dogsData.json";
import FishList from "./components/FishList";
import AddForm from "./components/AddForm";
import CreateAkvar from "./components/CreateAkvar";

function App() {
  const [ListOfFish, setListOfFish] = useState(rawData.fish);
  const [activeTab, setActiveTab] = useState(1);

  const handleDelete = (IdToDelete) => {
    const temp = ListOfFish.filter((item) => item.id !== IdToDelete);
    setListOfFish(temp);
  };
  const handleAdd = (newFish) => {
    setListOfFish([...ListOfFish, newFish]);
  };
  return (
    <>
      <div className="container my-4 ">
        <h3 className="text-center">Moje akvarium</h3>
        <div className="hlavni-stranka d-flex justify-content-around my-2 py-4">
          <button
            className="btn btn-warning"
            name="Rybicky"
            onClick={() => setActiveTab(1)}
          >
            Rybičky
          </button>
          <button
            className="btn btn-warning"
            name="Akvarium"
            onClick={() => setActiveTab(2)}
          >
            Akvarium
          </button>
        </div>
        {activeTab === 1 && (
          <div className="">
            <h4>Seznam rybiček</h4>
            <div className="rybicky">
              <FishList data={ListOfFish} handleDelete={handleDelete} />
            </div>
            <div className="">
              <AddForm data={ListOfFish} pridej={handleAdd} />
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="akvarium">
            <h4 className="text-center">Vytvoř akvarium</h4>
            <CreateAkvar data={ListOfFish} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
