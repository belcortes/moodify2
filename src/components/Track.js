import React from 'react'

const Track = (props) => {
	return (
    <li className='app-container_track'>
      {props.track.track.name}
      <br/><span className='app-container_playlist-subtitle'>{props.track.track.artists[0].name}</span>
    </li>
	)
}

export default Track
