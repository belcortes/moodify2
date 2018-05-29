import store from '../index.js'
import { spotifyApi, userId } from '../utils/spotifyAuth'

export function fetchPlaylists() {
  return (dispatch) => {
    spotifyApi.getUserPlaylists()
      .then((data) => {
        dispatch({
          type: 'FETCH_PLAYLISTS',
          payload: data
        })
      })
      .catch((error) => dispatch({
        type: 'FETCH_PLAYLISTS_FAILURE',
        error: error
      }))
  }
}

export function selectPlaylist(playlist) {
  return (dispatch) => {
    spotifyApi.getPlaylistTracks(`${userId}`, playlist.id)
      .then((data) => {
        console.log(data)
        dispatch({
          type: 'SELECT_PLAYLIST',
          payload: data
        })
      })
      .catch((error) => dispatch({
        type: 'SELECT_PLAYLIST_FAILURE',
        error: error
      }))
  }

  // let parsed = queryString.parse(window.location.search);
  // let accessToken = parsed.access_token;
  //
  // return (dispatch) => {
  //   axios.get(playlist.tracks.href, { headers: {'Authorization': 'Bearer ' + accessToken} })
  //     .then((response) => dispatch({
  //       type: 'SELECT_PLAYLIST',
  //       payload: response.data
  //     }))
  //     .catch((response) => dispatch({
  //       type: 'SELECT_PLAYLIST_FAILURE',
  //       error: response.error
  //     }))
  // }
}

export function fetchValence() {
  console.log('hello!')
  // let parsed = queryString.parse(window.location.search);
  // let accessToken = parsed.access_token;
  // // console.log(store.getState().activePlaylist)
  // let trackIds = []
  // let tracks = store.getState().activePlaylist.items
  // tracks.forEach((track) => {
  //   trackIds.push(track.track.id)
  // })
  // let valenceArray = []
  // console.log(trackIds)
  // return (dispatch, getState) => {
  //   axios.get(`${ROOT_URL}/audio-features/?${trackIds}`, { headers: {'Authorization': 'Bearer ' + accessToken} })
  //     .then((response) => dispatch({
  //       type: 'FETCH_VALENCE',
  //       payload: response.data
  //     }))
  //     .catch((response) => dispatch({
  //       type: 'FETCH_VALENCE_FAILURE',
  //       error: response.error
  //     }))
  // }
}
