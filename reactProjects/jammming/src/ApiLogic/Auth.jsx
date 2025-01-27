import React, { useEffect } from 'react';
import { SpotifyAuth } from './SpotifyAuth';
import './Auth.css';

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
        const accessToken = SpotifyAuth.getAccessToken();
        if(accessToken)
        {
            window.alert("Already Logged in");
        }else{
            window.location = authUrl;
        }
        
    };

    return (
        <div className='login'>
            <button onClick={handleLogin}>Login with Spotify</button>
        </div>
    );
};

export default Auth;