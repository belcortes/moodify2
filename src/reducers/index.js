import { combineReducers } from 'redux';

import fetchPlaylistsReducer from './FetchPlaylistsReducer'
import selectPlaylistReducer from './SelectPlaylistReducer'

const rootReducer = combineReducers({
  playlists: fetchPlaylistsReducer,
  activePlaylist: selectPlaylistReducer
});

export default rootReducer;
