import React from 'react'
import { Button } from '../Button'
import { CartItem } from '../CartItem'
import { calcTotalPrice } from '../Header/utils'
import './CartMenu.css'

const CartMenu = ({ items, onClick }) => {
	return (
		<div className='cart-menu'>
			<div className='cart-menu__games-list'>
				{items.length > 0
					? items.map((game) => (
						<CartItem key={game.id} price={game.price} title={game.title} id={game.id} />
					))
					: 'Basket is empty'}
			</div>
			{items.length > 0 ? (
				<div className='cart-menu__arrage'>
					<div className='cart-menu__total-price'>
						<span>total: {items.length}</span>
						<span>{calcTotalPrice(items)} $</span>
					</div>
					<Button type='primary' size='m' onClick={onClick}>
						checkout
					</Button>
				</div>
			) : null}
		</div>
	)
}

export { CartMenu }
