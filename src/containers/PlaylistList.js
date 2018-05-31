import React, { Component } from 'react'
import Playlist from '../components/Playlist'

class PlaylistList extends Component  {
	state = {
    activePlaylist: undefined
  }

	handleToggle = (index) => {
		this.setState({ activePlaylist: index })
	}

	render(){
		if(!this.props.playlists) {
			return <div className='app-container_outer-box'>Loading...</div>
		}

		return (
			<div className='app-container_outer-box'>
				<p className='app-container_header'>{this.props.playlists.total} playlists</p>
				<ul className='app-container_inner-box'>
					{
						this.props.playlists.items.map((playlist, i) => {
							return <Playlist
												key={i}
												playlist={playlist}
												index={i}
												active={i === this.state.activePlaylist}
												onToggle={this.handleToggle} />
						})
					}
				</ul>
			</div>
		)
	}

}

export default PlaylistList
