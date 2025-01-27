import React,{useState, useEffect} from "react";
import './Playlist.css'

// create a mock string 
const Playlist = ({PlaylistName, playlistTracks, onRemove, onNameChange, onSave}) => {

    const onChange = (event) => {
        onNameChange(event.target.value);
    };

    return (
        <div className="playlistReturn">
            <div className="items">
                <input type="text" value={PlaylistName} onChange={onChange} className="inputBar" />
                <ul>
                    {playlistTracks.map((track) => {
                        return (
                            <li key={track.id}>
                                <div>
                                    <h3>{track.name}</h3>
                                    <p>{track.artist} : {track.album}</p>
                                </div>
                                <button className="removeTrack" onClick={() => {
                                    return onRemove(track);}}>
                                        -
                                </button>
                            </li>
                        )
                    })}

                </ul>
            </div>
            <>
                {
                    playlistTracks.length > 0 && (
                        <button className="saveButton" onClick={onSave}>Save to Spotify</button>
                    )
                }
            </>
        </div>
    );
};

export default Playlist;