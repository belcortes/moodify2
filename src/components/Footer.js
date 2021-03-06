import React, { Component } from 'react';
import Modal from 'react-modal';

import Icon from '../info_icon.svg';

Modal.setAppElement('#root')

const customStyles = {
  content : {
    top                   : '20%',
    left                  : '20%',
    right                 : '20%',
    bottom                : '20%',
    border                : 'none',
    background            : '#2e94bb',
    boxShadow             : '0 20px 40px 0 rgba(0,0,0,.33)',
    color                 : 'white',
    padding: '4em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
};

class Footer extends Component {
  state = {
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
  		<div className='footer'>
        <button onClick={this.openModal} className='footer_button'><img src={Icon} /></button>
        <Modal isOpen={this.state.modalIsOpen} closeTimeoutMS={500} style={customStyles}>
          <button className='footer_button footer_button-close' onClick={this.closeModal}>Close</button>
          <h2>Does your music affect your mood?</h2>
          <p className='footer_about-body'>Or is it the other way around? In this app, music positiveness is found by calculating the valence of selected songs. From Spotify: <i>A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).</i></p>
        </Modal>
  		</div>
  	)
  }
}

export default Footer
