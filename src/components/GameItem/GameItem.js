import React from 'react'
import { GameBuy } from '../GameBuy'
import { GameCover } from '../GameCover'
import { GameGenres } from '../GameGenres/GameGenres'
import './GameItem.css'

const GameItem = ({ game }) => {
	return (
		<div className='game-item'>
			<GameCover image={game.image} />
			<div className="game-item__details">
				<span className="game-item__itle">{game.title}</span>
				<div className="game-item__genre">
					{
						game.genres.map(gen => <GameGenres key={gen} genres={gen} />)
					}
				</div>
				<div className="game-item__buy">
					<GameBuy game={game} />
				</div>
			</div>
		</div>
	)
}

export { GameItem }
