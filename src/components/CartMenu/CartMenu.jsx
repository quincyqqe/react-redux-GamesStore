import { calcTotalPrice } from '../utils'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import './CartMenu.scss'

const CartMenu = ({ items, onClick }) => {
	return (
		<div className='cart-menu'>
			<div className='cart-menu__games-list'>
				{items.length > 0
					? items.map(game => (
							<CartItem
								key={game.title}
								price={game.price}
								title={game.title}
								id={game.id}
							/>
					  ))
					: 'Корзина пуста '}
			</div>
			{items.length > 0 ? (
				<div className='cart-menu__arrange'>
					<div className='cart-menu__total-price'>
						<span>Итого:</span>
						<span>{calcTotalPrice(items)} грн.</span>
					</div>
					<Button type='primary' size='m' onClick={onClick}>
						Купить
					</Button>
				</div>
			) : null}
		</div>
	)
}

export default CartMenu
