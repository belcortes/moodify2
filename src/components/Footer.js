import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

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
        <button onClick={this.openModal} className='footer_button'>About</button>
        <Modal isOpen={this.state.modalIsOpen}>
          <button onClick={this.closeModal}>close</button>
          <p>Does your music affect your mood?</p>
          <p>In this app, music positiveness is found by calculating the <a href='#'>valence</a> of selected songs. Valence describes the musical positiveness conveyed by a track</p>
        </Modal>
  		</div>
  	)
  }
}

export default Footer
