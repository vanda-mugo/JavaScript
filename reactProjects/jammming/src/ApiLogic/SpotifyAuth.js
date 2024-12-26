import React, { useEffect } from 'react';

const clientId = import.meta.env.VITE_CLIENT_ID;
const redirectUri = import.meta.env.VITE_REDIRECT_URI;
const scopes = [
    'playlist-modify-public',
    'playlist-modify-private',
    // Add other scopes as needed
];


// Construct the auth url
// has the client_idm redirect_uri, scopes, response_type and show_dialog
// the redirect_uri should be the same as the one in the spotify dashboard
const authEndpoint = 'https://accounts.spotify.com/authorize';
const response_type = 'token';
const authUrl = 
`${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=${response_type}&show_dialog=true`;


let accessToken;
let expiresIn;

export const SpotifyAuth = {
    // function to return the authorization url 
    getAuthUrl: () => {
        return authUrl;
    },

    // function to get the access token from the url
    getAccessToken(){
        if(accessToken){
            return accessToken;
        }

        // check if the access token is in the url
        //creates a URLSearchParams object from the URL's hash fragment, excluding the leading #.
        // window.location.hash : This property returns the part of the URL that follows the # symbol. For example, in the URL http://localhost:5173/
        // #access_token=YOUR_ACCESS_TOKEN&token_type=Bearer&expires_in=3600, window.location.hash returns 
        //The substring(1) method removes the leading # from the hash fragment. So, window.location.hash.substring(1) returns 
        // access_token=YOUR_ACCESS_TOKEN&token_type=Bearer&expires_in=3600
        const urlParams = new URLSearchParams(window.location.hash.substring(1));
        console.log(urlParams);
        accessToken = urlParams.get('access_token');
        expiresIn = urlParams.get('expires_in');

        if(accessToken && expiresIn){
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }
        
    }
};