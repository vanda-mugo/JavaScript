import React, { useEffect } from 'react';
import { SpotifyAuth } from './SpotifyAuth';

const authUrl = SpotifyAuth.getAuthUrl();

const Auth = () => {

    useEffect(() => {
        const accessToken= SpotifyAuth.getAccessToken();
        console.log(accessToken);
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