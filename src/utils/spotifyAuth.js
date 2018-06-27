import SpotifyWebApi from 'spotify-web-api-js';
import qs from 'qs';

const spotifyApi = new SpotifyWebApi();

let qsParsed = qs.parse(window.location.search);
let accessToken = qsParsed['?access_token'];
spotifyApi.setAccessToken(accessToken);

let userId

export { spotifyApi, userId  };
