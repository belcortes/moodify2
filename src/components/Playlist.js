import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPlaylist, fetchValence } from '../actions/index'

const Playlist = (props) => {

    return (
      <li
        className={props.active ? "app-container_playlist active" : "app-container_playlist"}
        onClick={(e) => {
          props.selectPlaylist(props.playlist)
          props.fetchValence(props.playlist)
          props.onToggle(props.index)
        }}
        >{props.playlist.name} <br/>
        <span className='app-container_playlist-subtitle'>{props.playlist.tracks.total} tracks</span>
      </li>

  	)
}

const mapDispatchToProps = { selectPlaylist, fetchValence };

export default connect(null, mapDispatchToProps)(Playlist);
