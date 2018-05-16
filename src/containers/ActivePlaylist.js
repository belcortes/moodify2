import React, { Component } from 'react'
import { connect } from 'react-redux'

class ActivePlaylist extends Component {
	render() {
		if(!this.props.playlist){
			return <div>Select a playlist to get started</div>
		}

		return (
			<div>
				<h2>Total tracks: {this.props.playlist.total}</h2>
        {console.log(this.props.playlist)}
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
		playlist: state.activePlaylist
	}
}

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchValence: () => { dispatch(fetchValence()); }
//   };
// }

export default connect(mapStateToProps)(ActivePlaylist)
