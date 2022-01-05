import React, { useState } from 'react'
import { CartMenu } from '../CartMenu'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './CartBlock.css'
import { calcTotalPrice } from '../Header/utils'

const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
	const items = useSelector(state => state.cart.itemsInCart)
	const totalPrice = calcTotalPrice(items)

	return (
		<div className='cart-block'>
			<span className='cart-block__items'>{items.length}</span>
			<AiOutlineShoppingCart onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} size={25} className='cart-block__icon' />
			{totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice} $</span> : null}
			{isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
		</div>
	)
}

export { CartBlock }
