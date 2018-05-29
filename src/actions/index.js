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
}

export function fetchValence(playlist) {
  const trackIds = []
  return (dispatch) => {
    spotifyApi.getPlaylistTracks(`${userId}`, playlist.id)
      .then((data) => {
        data.items.forEach((item) => {
          trackIds.push(item.track.id)
        })
        spotifyApi.getAudioFeaturesForTracks(trackIds)
          .then((trackData) => {
            dispatch({
              type: 'FETCH_VALENCE',
              payload: trackData.audio_features
            })
          })
          .catch((error) => dispatch({
            type: 'SELECT_PLAYLIST_FAILURE',
            error: error
          }))

      })
      .catch((error) => dispatch({
        type: 'SELECT_PLAYLIST_FAILURE',
        error: error
      }))
  }
}
