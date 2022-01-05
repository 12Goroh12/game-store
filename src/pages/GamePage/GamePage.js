import React from 'react'
import { useSelector } from 'react-redux'
import { GameBuy } from '../../components/GameBuy'
import { GameCover } from '../../components/GameCover'
import './GamePage.css'

const GamePage = () => {
	const game = useSelector(({ games }) => games.currentGame)

	if (!game) return null

	return (
		<div className='game-page'>
			<h1 className='game-page__title'>{game.title}</h1>
			<div className='game-page__content'>
				<div className='game-page__left'>
					<iframe
						width='90%'
						height='400'
						src={`${game.video}`}
						frameBorder={0}
						title='Youtube Video'
						allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					></iframe>
				</div>
				<div className='game-page__right'>
					<GameCover image={game.image} />
					<p>{game.description}</p>
					<div className='secondary-text'>popular tags: {game.genres.map((genre, index) => {
						return (
							<div key={index} className='game-page__genre'>{genre}</div>
						)
					})}</div>

					<div className='game-page__buy-game'>
						<GameBuy game={game} />
					</div>
				</div>
			</div>
		</div>
	)
}

export { GamePage }
