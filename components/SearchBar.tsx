"use client";
import { useState } from "react";
import { SearchManufacturer } from ".";
const SearchButton = ({otherClasses}) => (
  <button type="submit" className={`-ml-3  z-10 ${otherClasses}`}>

  </button>
)

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
    <SearchButton/>
  </form>
  )
}

export default SearchBar