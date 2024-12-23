import React,{ useState } from 'react'
import './App.css'
import Search from './SearchBar/Search';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import Track from './Track/Track';
import Tracklist from './Tracklist/Tracklist';

/*
example of a spotify url. point of saving the playlist 
https://open.spotify.com/track/3BxeETRRl0uA1GRrXvK05g?si=1d8151ebc3fd42ed

*/
const trackListObject = [
  {name:"Levels", artist:"Avicii", album: "Levels-album",id:6},
  {name:"inauma", artist:"bien", album: "macherie",id:7},
  {name:"used to be duke", artist:"Johnny hodges", album: "time on my hands",id:8},
  {name:"Champion", artist:"Kanye", album: "Graduation",id:9},
  {name:"American love", artist:"Qing Madi", album: "goosebumps",id:10}
]

const playListObject = [
  {name:"alone", artist:"alan walker", album: "alone",id:1},
  {name:"faded", artist:"bien", album: "macherie",id:2},
  {name:"Johhny takes lead to be duke", artist:"Johnny hodges", album: "time on my hands",id:3},
  {name:"Champion", artist:"Kanye", album: "Graduation",id:4},
  {name:"American love", artist:"Qing Madi", album: "goosebumps",id:5}
]


function App() {
  const [count, setCount] = useState(0);
  const [playlistName, setPlaylistName] = useState("my best");
  const [playlistTracks, setPlaylistTracks] = useState(playListObject);
  const [trackListResult, setTrackListResult] = useState(trackListObject)

  //note that we are keeping the playlist information on the App component 
  const addTrack = (track) => {
    //first check if the track is already in the playlist 
    if(!playlistTracks.find(trackname =>  trackname.name === track.name)){
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
  
  // within the return we shall return the tracklist component  
  return (
    <>
      <Tracklist tracks={trackListResult} onAdd={addTrack} />
      <Playlist  PlaylistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} 
      onNameChange={updateName} />
    </>
  )
}

export default App;

