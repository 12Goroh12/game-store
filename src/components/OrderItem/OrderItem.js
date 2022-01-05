import React from 'react'
import { useDispatch } from 'react-redux'
import { GameCover } from '../GameCover'
import { AiOutlineDelete } from 'react-icons/ai'
import { deleteItemFromCart } from '../../redux/cart/reducer'

import './OrderItem.css'

const OrderItem = ({ game }) => {
	const dispatch = useDispatch()

	const removeItem = () => {
		dispatch(deleteItemFromCart(game.id))
	}

	return (
		<div className='order-item'>
			<div className="order-item__cover">
				<GameCover image={game.image} />
			</div>
			<div className="order-item__title">
				<span>{game.title}</span>
			</div>
			<div className="order-item__price">
				<span>{game.price} $</span>
				<AiOutlineDelete className='cart-item__remove' onClick={removeItem} />
			</div>
		</div>
	)
}

export { OrderItem }
