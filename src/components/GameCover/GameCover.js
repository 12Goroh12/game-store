import React from 'react'
import './GameCover.css'

const GameCover = ({ image, handleClick }) => {
	return <div className='game-cover' style={{ backgroundImage: `url(${image})` }} onClick={handleClick}></div>
}

export { GameCover }
