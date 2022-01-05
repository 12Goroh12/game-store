import React from 'react'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../../components/Header/utils'
import { OrderItem } from '../../components/OrderItem/OrderItem'
import './OrderPage.css'

const OrderPage = () => {
	const items = useSelector(({ cart }) => cart.itemsInCart)
	if (items.length < 1) {
		return <h1>Your basket is empty</h1>
	}

	return (
		<div className='order-page'>
			<div className="order-page__left">
				{
					items.map(game => <OrderItem game={game} />)
				}
			</div>
			<div className="order-page__right">
				<div className="order-page__total-price">
					<span>{items.length} items worth {calcTotalPrice(items)} $</span>
				</div>
			</div>
		</div>
	)
}

export { OrderPage }
