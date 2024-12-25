import React from "react";
import {SpotifyAuth} from "../ApiLogic/SpotifyAuth";

const SearchBar = () => {
    const [query, setQuery] = React.useState("");
    const [tracks, setTracks] = React.useState([]);

    const handleSearch = async () => {
        const accessToken = SpotifyAuth.getAccessToken();

        if(!accessToken){
            //redirect to the login page
            window.location = SpotifyAuth.getAuthUrl();
            return;
        }

        try{
            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(query)}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            if(!response.ok){
                throw new Error("Failed to fetch data from the Spotify API");
            }

            const data = await response.json();
            const tracks = data.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name
            }));

            setTracks(tracks);
        
        }catch(error){
            console.error("Error fetching data from the Spotify API", error);
        }
        
    };

    return (
        <>
        <input 
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a song" />
        <button onClick={handleSearch}>Search</button>
        <ul>
            {tracks.map(track => (
                <li key={track.id}>
                    <p>{track.name}</p>
                    <p>by Artist: {track.artist}</p>  
                    <p>from the album: {track.album}</p>
                </li>
            ))}
        </ul>
        </>
    );
};

export default SearchBar;