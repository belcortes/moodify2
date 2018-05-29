import axios from 'axios'
import queryString from 'query-string';
import store from '../index.js'

const ROOT_URL = 'https://api.spotify.com/v1'

export function fetchPlaylists() {
  const url = `${ROOT_URL}/me/playlists`
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

// export function fetchValence() {
//   // console.log('hello!')
//   let parsed = queryString.parse(window.location.search);
//   let accessToken = parsed.access_token;
//   // console.log(store.getState().activePlaylist)
//   let trackIds = []
//   let tracks = store.getState().activePlaylist.items
//   tracks.forEach((track) => {
//     trackIds.push(track.track.id)
//   })
//   let valenceArray = []
//   console.log(trackIds)
//   return (dispatch, getState) => {
//     axios.get(`${ROOT_URL}/audio-features/?${trackIds}`, { headers: {'Authorization': 'Bearer ' + accessToken} })
//       .then((response) => dispatch({
//         type: 'FETCH_VALENCE',
//         payload: response.data
//       }))
//       .catch((response) => dispatch({
//         type: 'FETCH_VALENCE_FAILURE',
//         error: response.error
//       }))
//   }
// }
