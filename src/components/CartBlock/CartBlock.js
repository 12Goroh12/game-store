import React, { useCallback, useState } from 'react'
import { CartMenu } from '../CartMenu'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { calcTotalPrice } from '../Header/utils'
import { useNavigate } from 'react-router-dom'
import './CartBlock.css'

const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
	const items = useSelector((state) => state.cart.itemsInCart)
	const totalPrice = calcTotalPrice(items)
	const navigate = useNavigate()

	const handleClick = useCallback(() => {
		setIsCartMenuVisible(false)
		navigate('/order')
	}, [navigate])

	return (
		<div className='cart-block'>
			<span className='cart-block__items'>{items.length}</span>
			<AiOutlineShoppingCart
				onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
				size={25}
				className='cart-block__icon'
			/>
			{totalPrice > 0 ? (
				<span className='cart-block__total-price'>{totalPrice} $</span>
			) : null}
			{isCartMenuVisible && (
				<CartMenu items={items} onClick={handleClick} />
			)}
		</div>
	)
}

export { CartBlock }
