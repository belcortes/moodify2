import { combineReducers } from 'redux';

import fetchPlaylistsReducer from './FetchPlaylistsReducer'

const rootReducer = combineReducers({
  playlists: fetchPlaylistsReducer
});

export default rootReducer;
