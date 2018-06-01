import SpotifyWebApi from 'spotify-web-api-js';
import queryString from 'query-string';

const spotifyApi = new SpotifyWebApi();

let parsed = queryString.parse(window.location.search);
let accessToken = parsed.access_token;
spotifyApi.setAccessToken(accessToken);

let userId

export { spotifyApi, userId  };
