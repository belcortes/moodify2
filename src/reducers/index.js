import { combineReducers } from 'redux';

import fetchPlaylistsReducer from './fetchPlaylistsReducer'
import selectPlaylistReducer from './selectPlaylistReducer'
import fetchValenceReducer from './fetchValenceReducer'

const rootReducer = combineReducers({
  playlists: fetchPlaylistsReducer,
  activePlaylist: selectPlaylistReducer,
  valence: fetchValenceReducer
});

export default rootReducer;
