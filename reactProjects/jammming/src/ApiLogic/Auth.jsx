import React, { useEffect } from 'react';
import { SpotifyAuth } from './SpotifyAuth';

// uses the spotifyAuth object to return the authUrl
const authUrl = SpotifyAuth.getAuthUrl();

const Auth = () => {

    useEffect(() => {
        const accessToken= SpotifyAuth.getAccessToken();
        if(accessToken){
            // to check the access token which can be used to make Api requests
            console.log(accessToken);
        }
    }, []);

    const handleLogin = () => {
        window.location = authUrl;
    };

    return (
        <div>
            <h1>Login to Spotify</h1>
            <button onClick={handleLogin}>Login with Spotify</button>
        </div>
    );
};

export default Auth;