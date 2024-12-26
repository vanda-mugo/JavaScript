import React from "react";
import {SpotifyAuth} from "../ApiLogic/SpotifyAuth";

const SearchBar = ({handleSearch, query, setQuery}) => {


    return (
        <>
        <input 
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a song" />
        <button onClick={handleSearch}>Search</button>
        </>
    );
};

export default SearchBar;