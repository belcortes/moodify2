import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchValence } from '../actions/index'

class ActivePlaylist extends Component {
	// componentDidMount(){
	//
	// }
	render() {
		if(!this.props.playlist){
			return <div>Select a playlist to get started</div>
		}

		return (
			<div>
				{this.props.fetchValence()}
				<h2>Total tracks: {this.props.playlist.total}</h2>
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
const mapDispatchToProps = { fetchValence };

export default connect(mapStateToProps, mapDispatchToProps)(ActivePlaylist)
