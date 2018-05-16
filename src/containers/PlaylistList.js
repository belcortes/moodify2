import React from 'react'
// import { selectPlaylist, fetchActivePlaylistTracks, fetchValence } from '../actions/index'

// import Playlist from '../components/Playlist'

const PlaylistList = (props) => {
	if(!props.playlists) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<h2>{props.playlists.total} playlists</h2>
			<ul>
				{
					props.playlists.items.map((playlist) => {
						return (
							<li
							key={playlist.name}>{playlist.name}</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default PlaylistList

// onClick={() => {
// 	props.selectPlaylist(playlist)
// 	props.fetchActivePlaylistTracks(playlist)
  // props.fetchValence(playlist)
// }
