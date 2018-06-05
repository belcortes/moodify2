import React from 'react'

const Header = (props) => {
	return (
		<div className='header'>
      <h3>MOODIFY <span className='header-subtitle'>how positive is your music</span></h3>
			{!props.user ? <p>Loading...</p> : <p>{props.user.display_name}</p>}
		</div>
	)
}
export default Header
