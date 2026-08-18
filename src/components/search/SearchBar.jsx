import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import "./SearchBar.css";

function SearchBar({ query, onQueryChange, placeholder }) {
  return (
    <div className="search-bar">
      <HiOutlineMagnifyingGlass className="search-bar-icon" />

      <input
        type="text"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Search glossary"
      />
    </div>
  );
}

export default SearchBar;