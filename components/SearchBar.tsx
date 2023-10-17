"use client";
import { useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar = () => {
    const [manufacturer, setManufacuturer] = useState('');
    const handleSearch = () => {

    };
  return (
  <form className='searchBar' onSubmit={handleSearch}>
    <div className="searchBar__item">
        <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacuturer}
        />
    </div>
  </form>
  )
}

export default SearchBar