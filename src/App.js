import SearchBox from "./components/SearchBox";
import CarparkList from "./components/CarparkList";
import axios from "axios";
import { useState } from "react";
import "./index.css";
import PopUp from "./components/PopUp";

function App() {
  const [carparkList, setCarparkList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const handleCarparkSearch = async (location) => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await axios.post("/getCarparks", {
        searchLocation: location,
      });
      setCarparkList(response.data.carparks);
      setSearchVal(response.data.name);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeSearchBox = (input) => {
    setSearchVal(input);
  };

  const handlePopUp = () => {
    console.log(`this works`);
    setShowPopUp(true);
    setTimeout(() => {
      console.log(`timeout done`);
      setShowPopUp(false);
    }, 1200);
  };

  return (
    <div>
      <div className="bg-fuchsia-400 py-5 drop-shadow-lg w-full sticky top-0 z-20 mb-10">
        <SearchBox
          handleCarparkSearch={handleCarparkSearch}
          searchVal={searchVal}
          handleChange={handleChangeSearchBox}
        />
      </div>
      <CarparkList
        // className="mt-48"
        data={carparkList}
        isLoading={isLoading}
        isError={isError}
        handlePopUp={handlePopUp}
      />
      {showPopUp && <PopUp />}
    </div>
  );
}

// for testing of my loading screen only
// const pause = new Promise((resolve) => {
//   setTimeout(resolve, 10000);
// });

export default App;
