import React,{ useState } from 'react'
import './App.css'
import Playlist from './Playlist/Playlist';
import Tracklist from './Tracklist/Tracklist';
import Auth from './ApiLogic/Auth';
import { SpotifyAuth } from './ApiLogic/SpotifyAuth';
import { savePlaylist } from './ApiLogic/SavePlaylist';
import { Nav } from './Nav/Nav';
import SearchBar from "./SearchBar/Search";


/*
example of a spotify url. point of saving the playlist 
https://open.spotify.com/track/3BxeETRRl0uA1GRrXvK05g?si=1d8151ebc3fd42ed

*/

function App() {
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [trackListResult, setTrackListResult] = useState([]);
  const [query, setQuery] = React.useState("");


  //note that we are keeping the playlist information on the App component 
  const addTrack = (track) => {
    console.log(track);
    //first check if the track is already in the playlist 
    if(!playlistTracks.find(trackname =>  trackname.id === track.id)){
      setPlaylistTracks([...playlistTracks, track]);
    }
    else{
      alert("The selected track is already in the playlist.")
    }
  };

  // function to remove track from playlist 
  const removeTrack = (track) => {
    // use this to remove the selected track 
    //check for its existence 
    if(playlistTracks.some((trackname) => trackname.name === track.name)){
      //in this case the song exist in the playlist
      const newArray = playlistTracks.filter((trackname) => {
        return trackname.name !== track.name;
      });
      // the new array should be set with the useState hook 
      setPlaylistTracks(newArray);
      //set an alert to inform the person that the track has been removed 
      alert(`removed the track with name ${track.name}`);
    }
  };

  const updateName = (name) => {
    // set the new name 
    setPlaylistName(name);
  }


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
            album: track.album.name,
            uri: track.uri
        }));

        setTrackListResult(tracks);
    
    }catch(error){
        console.error("Error fetching data from the Spotify API", error);
    }
    
};

// Example usage with a button click
const handleSavePlaylist = () => {
  const playlistname = playlistName;
  const playlistDescription = 'A playlist created in Jammming';
  const  playlistUrls = playlistTracks.map((track) => track.uri);
  console.log(`Saving Playlist to spotify with urls ${playlistUrls}`);

  savePlaylist(playlistname, playlistDescription, playlistUrls);
  // reset the playlist
  setPlaylistName("New Playlist");
  setPlaylistTracks([]);
};
  
  // within the return we shall return the tracklist component  
  return (
    <>
      <div  className='return'>
        <Nav/>
        <SearchBar setQuery={setQuery} query={query} handleSearch={handleSearch} />
        <div className='appReturn'>
          <Tracklist 
                    tracks={trackListResult} 
                    onAdd={addTrack} />

          <Playlist  
                    PlaylistName={playlistName} 
                    playlistTracks={playlistTracks} 
                    onRemove={removeTrack} 
                    onNameChange={updateName} 
                    onSave={handleSavePlaylist} 
          />
        </div>
        <div>
          <Auth />
        </div>
      </div>
    </>
  )
}

export default App;

