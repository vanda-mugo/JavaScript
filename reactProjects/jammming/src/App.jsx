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
  { name: "Levels", artist: "Avicii", album: "Levels-album", id: 6, uri: "spotify:track:3BxeETRRl0uA1GRrXvK05g" },
  { name: "inauma", artist: "bien", album: "macherie", id: 7, uri: "spotify:track:5n9E9RziLwDz3SFNH94J2q" },
  { name: "used to be duke", artist: "Johnny hodges", album: "time on my hands", id: 8, uri: "spotify:track:6u7jPi22kF8CTQ3rb9DHE7" },
  { name: "Champion", artist: "Kanye", album: "Graduation", id: 9, uri: "spotify:track:5tkTZX1vOagbFVg80m5mZ4" },
  { name: "American love", artist: "Qing Madi", album: "goosebumps", id: 10, uri: "spotify:track:7cJLc07CTW8eXx8H4B5bfj" }
];


const playListObject = [
  { name: "alone", artist: "alan walker", album: "alone", id: 1, uri: "spotify:track:1rfofaqEpACxVEHIZBJe6W" },
  { name: "faded", artist: "bien", album: "macherie", id: 2, uri: "spotify:track:7fBv7CLKzipRk6EC6TWHOB" },
  { name: "Johhny takes lead to be duke", artist: "Johnny hodges", album: "time on my hands", id: 3, uri: "spotify:track:3hHRUeG4fF5lnrvs9GnZwb" },
  { name: "Champion", artist: "Kanye", album: "Graduation", id: 4, uri: "spotify:track:3BxeETRRl0uA1GRrXvK05g" },
  { name: "American love", artist: "Qing Madi", album: "goosebumps", id: 5, uri: "spotify:track:2d8IDR4z53kZyiQJuKc4u6" }
];


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

  const savePlaylist = () => {
    const  playlistUrls = playlistTracks.map((track) => track.uri);
    console.log(`Saving Playlist to spotify with urls ${playlistUrls}`);

    // at the moment havent yet implemented the saving to be done on actual account 
    // api calls to be done here later 


    // reset the playlist
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  }
  
  // within the return we shall return the tracklist component  
  return (
    <>
      <Tracklist tracks={trackListResult} onAdd={addTrack} />
      <Playlist  
                PlaylistName={playlistName} 
                playlistTracks={playlistTracks} 
                onRemove={removeTrack} 
                onNameChange={updateName} 
                onSave={savePlaylist} 
      />
    </>
  )
}

export default App;

