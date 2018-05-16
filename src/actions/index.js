import axios from 'axios'
import queryString from 'query-string';
// import store from '../index.js'

const ROOT_URL = 'https://api.spotify.com/v1/me'

export function fetchPlaylists() {
  const url = `${ROOT_URL}/playlists`
  let parsed = queryString.parse(window.location.search);
  let accessToken = parsed.access_token;

  return (dispatch) => {
    axios.get(url, { headers: {'Authorization': 'Bearer ' + accessToken} })
      .then((response) => dispatch({
        type: 'FETCH_PLAYLISTS',
        payload: response.data
      }))
      .catch((response) => dispatch({
        type: 'FETCH_PLAYLISTS_FAILURE',
        error: response.error
      }))
  }
}

export function selectPlaylist(playlist) {
  let parsed = queryString.parse(window.location.search);
  let accessToken = parsed.access_token;

  return (dispatch) => {
    axios.get(playlist.tracks.href, { headers: {'Authorization': 'Bearer ' + accessToken} })
      .then((response) => dispatch({
        type: 'SELECT_PLAYLIST',
        payload: response.data
      }))
      .catch((response) => dispatch({
        type: 'SELECT_PLAYLIST_FAILURE',
        error: response.error
      }))
  }
}

// export function fetchValence(playlist) {
//   let parsed = queryString.parse(window.location.search);
//   let accessToken = parsed.access_token;
//   const url =
//   return (dispatch, getState) => {
//     axios.get(playlist.tracks.href, { headers: {'Authorization': 'Bearer ' + accessToken} })
//       .then((response) => dispatch({
//         type: 'SELECT_PLAYLIST',
//         payload: response.data
//       }))
//       .catch((response) => dispatch({
//         type: 'SELECT_PLAYLIST_FAILURE',
//         error: response.error
//       }))
//   }
// }
