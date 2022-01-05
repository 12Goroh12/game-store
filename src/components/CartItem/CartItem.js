import React from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineDelete } from 'react-icons/ai'
import './CartItem.css'
import { deleteItemFromCart } from '../../redux/cart/reducer'

const CartItem = ({ title, id, price }) => {
	const dispatch = useDispatch()

	const removeItem = () => {
		dispatch(deleteItemFromCart(id))
	}

	return (
		<div className='cart-item'>
			<span>{title}</span>
			<div className='cart-item__price'>
				<span>{price} $</span>
				<AiOutlineDelete className='cart-item__remove' onClick={removeItem} />
			</div>
		</div>
	)
}

export { CartItem }
