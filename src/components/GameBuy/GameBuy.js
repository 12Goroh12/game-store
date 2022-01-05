import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import { Button } from '../Button'
import './GameBuy.css'

const GameBuy = ({ game }) => {
	const dispatch = useDispatch()
	const items = useSelector((state) => state.cart.itemsInCart)
	const isItemsInCart = items.some((item) => item.id === game.id)


	const handleClick = () => {
		if (isItemsInCart) {
			dispatch(deleteItemFromCart(game.id))
		} else {
			dispatch(setItemInCart(game))
		}
	}

	return (
		<div className='game-buy'>
			<span className='game-buy__price'>{game.price} $</span>
			<Button
				onClick={handleClick}
				type={isItemsInCart ? 'secondary' : 'primary'}
			>
				{isItemsInCart ? 'Remove from basket' : 'Add to  Cart'}
			</Button>
		</div>
	)
}

export { GameBuy }
