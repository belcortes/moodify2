import SpotifyWebApi from 'spotify-web-api-js';
import queryString from 'query-string';

const spotifyApi = new SpotifyWebApi();

let parsed = queryString.parse(window.location.search);
let accessToken = parsed.access_token;
spotifyApi.setAccessToken(accessToken);

const userId = spotifyApi.getMe((err, data) => {
  if (err) {
    console.error(err)
  } else {
    return data.id
  }
})

export { spotifyApi, userId  };
