import React from 'react'
import { Button } from '../Button'
import './GameBuy.css'

const GameBuy = ({ game }) => {
	return (
		<div className='game-buy'>
			<span className='game-buy__price'>{game.price} $</span>
			<Button onClick={() => console.log('NAJAL NA KNOPKU')} type='primary'>
				Add to  Cart
			</Button>
		</div>
	)
}

export { GameBuy }
