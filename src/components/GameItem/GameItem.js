import React from 'react'
import { GameBuy } from '../GameBuy'
import { GameCover } from '../GameCover'
import { GameGenres } from '../GameGenres/GameGenres'

import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCurrentGame } from '../../redux/games/reducer'
import './GameItem.css'

const GameItem = ({ game }) => {
	const history = useHistory()
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(setCurrentGame(game))
		history.push(`/app/${game.title}`)
	}

	return (
		<div className='game-item'>
			<GameCover image={game.image} handleClick={handleClick} />
			<div className='game-item__details'>
				<span className='game-item__itle'>{game.title}</span>
				<div className='game-item__genre'>
					{game.genres.map((gen) => (
						<GameGenres key={gen} genres={gen} />
					))}
				</div>
				<div className='game-item__buy'>
					<GameBuy game={game} />
				</div>
			</div>
		</div>
	)
}

export { GameItem }
