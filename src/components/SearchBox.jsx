import { FaSearchLocation } from "react-icons/fa";

function SearchBox({ handleCarparkSearch, searchVal, handleChange }) {
  const handleTextBoxChange = (e) => {
    handleChange(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleCarparkSearch(searchVal);
  };

  return (
    <form className=" flex justify-center" onSubmit={handleSearchSubmit}>
      <div className="rounded-full border-2 w-96 focus-within:border-stone-400 border-gray-600">
        <input
          type="text"
          value={searchVal}
          onChange={handleTextBoxChange}
          className="w-80 rounded-full pl-2 text-lg border-transparent focus-visible:outline-0 ml-2 mb-0.5 bg-fuchsia-400"
          enablespellcheck="false"
        />
        <span className="absolute top-6 right-auto ml-3">
          <FaSearchLocation
            className="mt-0.5 h-6 w-6 fill-gray-600 pb-0.5 cursor-pointer"
            onClick={handleSearchSubmit}
          />
        </span>
      </div>
    </form>
  );
}

export default SearchBox;
