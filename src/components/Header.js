import React from 'react'

const Header = (props) => {
	if(!props.user) {
		return <div>Loading...</div>
	}

	return (
		<div className='header'>
      <h3>MOODIFY <span className='header-subtitle'>how positive is your music</span></h3>
			<p>{props.user.display_name}</p>
		</div>
	)
}
export default Header
