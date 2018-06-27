import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'

import './App.css';
import { fetchPlaylists, fetchUser } from './actions/index'
import PlaylistList from './containers/PlaylistList'
import ActivePlaylist from './containers/ActivePlaylist'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  componentDidMount() {
    this.props.fetchPlaylists()
    this.props.fetchUser()
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="app"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="App">
          <Header user={this.props.user} />
          <div className='app-container'>
            <PlaylistList playlists={this.props.playlists} />
            <ActivePlaylist />
          </div>
          <Footer />
        </div>
      </CSSTransitionGroup>


    );
  }
}

const mapDispatchToProps = { fetchPlaylists, fetchUser };
const mapStateToProps = (state) => {
  return { playlists: state.playlists, user: state.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
