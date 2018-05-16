import React from 'react'
import { connect } from 'react-redux'
import { selectPlaylist } from '../actions/index'

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
							  key={playlist.name}
                onClick={() => {
                  console.log('clicked')
              	  props.selectPlaylist(playlist)
                }}
              >{playlist.name}</li>
						)
					})
				}
			</ul>
		</div>
	)
}

const mapDispatchToProps = { selectPlaylist };

export default connect(null, mapDispatchToProps)(PlaylistList)
