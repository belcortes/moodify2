import React from 'react'

const Header = (props) => {
	return (
		<div className='header'>
      <h3>MOODIFY <span className='header-subtitle'>HOW HAPPY IS YOUR MUSIC</span></h3>
			{!props.user ? <p>Loading...</p> : <div className='header-options'>{props.user.display_name}<span className='header-subtitle'><a href='https://accounts.spotify.com/en/logout'>logout</a></span></div>}
		</div>
	)
}
export default Header
