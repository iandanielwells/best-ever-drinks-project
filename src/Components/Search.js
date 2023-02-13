import React from "react";

function Search({search, setSearch}) {
    function handleChange(event) {
        setSearch(event.target.value);
    }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Drinks</label>
      <input
        type="text"
        id="search"
        placeholder="Search by name or ingredients"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;