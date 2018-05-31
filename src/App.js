import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Header from './components/Header'

import { fetchPlaylists } from './actions/index'
import PlaylistList from './containers/PlaylistList'
import ActivePlaylist from './containers/ActivePlaylist'

class App extends Component {
  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='app-container'>
          <PlaylistList playlists={this.props.playlists} />
          <ActivePlaylist />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchPlaylists };
const mapStateToProps = ({ playlists }) => {
  return { playlists };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
