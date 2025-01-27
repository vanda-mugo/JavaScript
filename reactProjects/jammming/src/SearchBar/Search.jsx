import React from "react";
import './SearchBar.css'


const SearchBar = ({handleSearch, query, setQuery}) => {

    return (
        <>
            <div className="searchBar">
                <input 
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Enter A Song Title"
                className="searchInput" />
                <button onClick={handleSearch} >Search</button>
            </div>
        </>
    );
};

export default SearchBar;