// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQB_VBj0tSq8dZqQOFO2X3i8B_2c_c9J8yB0EK5ifcGwN5loJBmtqf2QPUHFzKAFXTRYoGnEIn5Ti1duW8O8sfChv8j4QMDnVJQh-6jZI70GV9UoKS6eLukZPnmaWtg7MyXrt5LS99FB9mCNQWaayRDuZGztzqV5hjwoZNlBDPAQ5OzhYuOk0r8lW27LasSLKUOlHNDRCUl_Bd_B2RN71XitLNlAi-KnfDrGmtPpCKFdgplFO_6Jp1BPs5unI4D7GUzS_Qmvv_SYsqYAQbjH8wQPhurwj0jE';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

const tracksUri = [
  'spotify:track:1IF6qwYtYhM1oX40gzzk6G','spotify:track:4Aaz1Xbti3CiSMUwFdlblZ','spotify:track:1CgkKs5fgX1BiYyYZ6ZzZE','spotify:track:2Lje8XnxWrO5xOHk86aWVK','spotify:track:0LsYGVyyGCAvCX8bf2I2vO'
];

async function createPlaylist(tracksUri){
  const { id: user_id } = await fetchWebApi('v1/me', 'GET')

  const playlist = await fetchWebApi(
    `v1/users/${user_id}/playlists`, 'POST', {
      "name": "My top tracks playlist",
      "description": "Playlist created by the tutorial on developer.spotify.com",
      "public": false
  })

  await fetchWebApi(
    `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
    'POST'
  );

  return playlist;
}

const createdPlaylist = await createPlaylist(tracksUri);
console.log(createdPlaylist.name, createdPlaylist.id);
