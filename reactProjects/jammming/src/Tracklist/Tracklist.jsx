import React,{ useEffect, useState } from "react";
import SearchBar from "../SearchBar/Search";

//implement the hardcoded track array, an array of track objects 

// the Tracklist should receive the prop that will contain the traclistobject as in the example 
// above 


const Tracklist = ({tracks, onAdd, setQuery, query ,handleSearch}) => {

    //content in the return statement 
    // use the map() method to iterate over arrays and render multiple components dynamically
    // so we need to add a new feature that adds a song to each song , the on add method will be sent
    // as a prop from the parent component 
    return (
        <main>
            <SearchBar setQuery={setQuery} query={query} handleSearch={handleSearch} />   
            <ul>
            <h2>Results from Spotify</h2>
            {tracks.map((track) => {
                return (
                    <li key={track.id}>
                        <p>Song Name : {track.name}</p>
                        <p>Artist Name : {track.artist}</p>
                        <p>Album Name : {track.album}</p>
                        <button onClick={() => {
                            return onAdd(track);
                        }}>
                            +
                        </button>
                    </li>
                )
        })}
            </ul>
        
        </main>
    );
};

export default Tracklist;