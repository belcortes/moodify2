import React, { Component } from 'react'
import { connect } from 'react-redux'
import Track from '../components/Track'

class ActivePlaylist extends Component {

	render() {
		if(!this.props.playlist){
			return <div className='app-container_outer-box'><p className='app-container_header'>Select a playlist to get started</p></div>
		}

		return (
			<div className='app-container_outer-box'>
				<p className='app-container_header'>{this.props.valence}% positive{this.props.playlist.total} tracks</p>
				<div className='app-container_inner-box'>
					<ul>
						{
							this.props.playlist.items.map((track, i) => {
								return <Track key={i} track={track} />
							})
						}
					</ul>
				</div>
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
