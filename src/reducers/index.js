import { combineReducers } from 'redux';

import fetchPlaylistsReducer from './fetchPlaylistsReducer'
import fetchUserReducer from './fetchUserReducer'
import fetchTracksReducer from './fetchTracksReducer'
import fetchValenceReducer from './fetchValenceReducer'
import selectPlaylistReducer from './selectPlaylistReducer'

const rootReducer = combineReducers({
  playlists: fetchPlaylistsReducer,
  user: fetchUserReducer,
  activeTracks: fetchTracksReducer,
  activePlaylist: selectPlaylistReducer,
  valence: fetchValenceReducer
});

export default rootReducer;
