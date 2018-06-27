import React, { Component } from 'react'
import { connect } from 'react-redux'
import Track from '../components/Track'
import { CSSTransitionGroup } from 'react-transition-group'

class ActivePlaylist extends Component {

	render() {
		if(!this.props.tracks || !this.props.playlist){
			return <div className='app-container_outer-box app-container_outer-box_loading transform'><p className='app-container_header'>Select a playlist to get started</p></div>
		}

		const items = this.props.tracks.items.map((track, i) => {
			return <Track key={i} track={track} />
		});

		return (
			<div className='app-container_outer-box'>
				<p className='app-container_header-with-subtitle'>{this.props.valence}% happy<br/><span className='app-container_header_subtitle'>{this.props.playlist.name} | {this.props.tracks.total} tracks</span></p>
				<div className='app-container_inner-box'>
					<ul>
						{items}
					</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		tracks: state.activeTracks,
		playlist: state.activePlaylist,
		valence: state.valence
	}
}

	// <p ></p>

export default connect(mapStateToProps)(ActivePlaylist)
