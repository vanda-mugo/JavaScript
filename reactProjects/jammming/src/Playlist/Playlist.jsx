import React,{useState, useEffect} from "react";
import styles from "./playlist.module.css";

// create a mock string 
const Playlist = ({PlaylistName, playlistTracks, onRemove, onNameChange, onSave}) => {

    const onChange = (event) => {
        onNameChange(event.target.value);
    };

    return (
        <>
        <h2>From Playlist</h2>
        <input type="text" value={PlaylistName} onChange={onChange} className={styles.playlistInput} />
        <ul>
            {playlistTracks.map((track) => {
                return (
                    <li key={track.id}>
                        <p>{track.name} : artist {track.artist}</p>
                        <button onClick={() => {
                            return onRemove(track);}}>
                                -
                        </button>
                    </li>
                )
            })}

        </ul>
        <>
        {
            playlistTracks.length > 0 && (
                <button onClick={onSave}>Save to Spotify</button>
            )
        }
        </>
        </>
    );
};

export default Playlist;