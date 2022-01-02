import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './CartBlock.css'

const CartBlock = () => {
	return (
		<div className='cart-block'>
			<AiOutlineShoppingCart size={25} className='cart-block__icon' />
			<span className='cart-block__total-price'>130 $</span>
		</div>
	)
}

export { CartBlock }
