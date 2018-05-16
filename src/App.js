import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchPlaylists } from './actions/index'
import PlaylistList from './containers/PlaylistList'

class App extends Component {
  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {
    return (
      <div className="App">
        moodify
        <PlaylistList playlists={this.props.playlists} />
      </div>
    );
  }
}

const mapDispatchToProps = { fetchPlaylists };
const mapStateToProps = ({ playlists }) => {
  return { playlists };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
