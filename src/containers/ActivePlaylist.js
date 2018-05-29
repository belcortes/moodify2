import React, { Component } from 'react'
import { connect } from 'react-redux'

class ActivePlaylist extends Component {

	render() {
		if(!this.props.playlist){
			return <div>Select a playlist to get started</div>
		}

		return (
			<div>
				<p>{this.props.valence}%</p>
				<h3>Total tracks: {this.props.playlist.total}</h3>
				{
					this.props.playlist.items.map((track) => {
						return (
							<p key={track.track.id}>{track.track.name}</p>
						)
					})
				}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		playlist: state.activePlaylist,
		valence: state.valence
	}
}

export default connect(mapStateToProps)(ActivePlaylist)
