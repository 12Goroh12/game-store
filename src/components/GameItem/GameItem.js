import React from 'react'
import { GameCover } from '../GameCover'
import './GameItem.css'

const GameItem = ({ image, title, genres, description }) => {
	return (
		<div className='game-item'>
			<GameCover image={image} />
			<div className="game-item__details">
				<span className="game-item__itle">{title}</span>
				<div className="game-item__genre">
					{
						genres.map(gen => gen)
					}
				</div>
				{/* <div className="game-item__description">{description}</div> */}
				<div className="game-item__buy">Buy</div>
			</div>
		</div>
	)
}

export { GameItem }
