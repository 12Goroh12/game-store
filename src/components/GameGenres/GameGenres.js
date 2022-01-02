import React from 'react'
import './GameGenres.css'

const GameGenres = ({ genres }) => {
	return (
		<div className='game-genres'>
			{genres}
		</div>
	)
}

export { GameGenres }
