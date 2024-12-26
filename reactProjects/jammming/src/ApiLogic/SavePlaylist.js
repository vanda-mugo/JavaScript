// to get the users id, we can use the following endpoint
// get request to https://api.spotify.com/v1/me fo useres spotify id
import { SpotifyAuth } from './SpotifyAuth';    

const getUserId = async (accessToken) => {
    try{
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if(!response.ok){
            throw new Error("Failed to fetch data from the Spotify API");
        }

        const data = await response.json();
        return data.id;
    }catch(error){
        console.error("Error fetching data from the Spotify API", error);
    }
};

// create a new playlist

const createPlaylist = async (userId, accessToken, playlistName, playlistDescription) => {
    const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: playlistName,
            description: playlistDescription,
            public: false
        })
    });

    if (!response.ok) {
        throw new Error('Failed to create playlist');
    }

    const data = await response.json();
    return data.id;
};


// add tracks to the playlist   
const addTracksToPlaylist = async (accessToken, playlistId, trackUris) => {
    try{
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uris: trackUris
            })
        });

        if(!response.ok){
            throw new Error("Failed to fetch data from the Spotify API");
        }

        const data = await response.json();
        return data.snapshot_id;
    }catch(error){
        console.error("Error fetching data from the Spotify API", error);
    }
}; 

const savePlaylist = async (playlistName, playlistDescription, trackUris) => {
    const accessToken = SpotifyAuth.getAccessToken();

    if (!accessToken) {
        window.location.href = SpotifyAuth.getAuthUrl();
        return;
    }

    try {
        const userId = await getUserId(accessToken);
        const playlistId = await createPlaylist(userId, accessToken, playlistName, playlistDescription);
        console.log(playlistId);
        await addTracksToPlaylist( accessToken, playlistId, trackUris);
        console.log('Playlist saved successfully!');
    } catch (error) {
        console.error('Error saving playlist:', error);
    }
};




export { savePlaylist };