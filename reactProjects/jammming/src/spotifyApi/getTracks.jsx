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

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);