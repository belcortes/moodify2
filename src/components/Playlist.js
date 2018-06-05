import React from 'react'
import { connect } from 'react-redux'
import { fetchTracks, fetchValence, selectPlaylist } from '../actions/index'

const Playlist = (props) => {

    return (
      <li
        className={props.active ? "app-container_playlist active" : "app-container_playlist"}
        onClick={(e) => {
          props.fetchTracks(props.playlist)
          props.fetchValence(props.playlist)
          props.selectPlaylist(props.playlist)
          props.onToggle(props.index)
        }}
        >{props.playlist.name} <br/>
        <span className='app-container_playlist-subtitle'>{props.playlist.tracks.total} tracks</span>
      </li>

  	)
}

const mapDispatchToProps = { fetchTracks, fetchValence, selectPlaylist };

export default connect(null, mapDispatchToProps)(Playlist);
