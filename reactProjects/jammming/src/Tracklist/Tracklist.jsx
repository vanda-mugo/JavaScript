import React,{ useEffect, useState } from "react";
import './Tracklist.css';

//implement the hardcoded track array, an array of track objects 

// the Tracklist should receive the prop that will contain the traclistobject as in the example 
// above 


const Tracklist = ({tracks, onAdd }) => {

    //content in the return statement 
    // use the map() method to iterate over arrays and render multiple components dynamically
    // so we need to add a new feature that adds a song to each song , the on add method will be sent
    // as a prop from the parent component 
    return (
        <main> 
            <h2 className="header">Results</h2>
            <ul>
                {tracks.map((track) => {
                    return (
                        <li key={track.id}>
                            <h3> {track.name}</h3>
                            <div className="detailsDiv">
                                <p>{track.artist} |  {track.album}</p>
                                <button className="addButton" onClick={() => {
                                    return onAdd(track);
                                }}>
                                    +
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    );
};

export default Tracklist;