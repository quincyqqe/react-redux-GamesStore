import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'
import Button from '../Button/Button'
import './GameBuy.scss'

const GameBuy = ({ game }) => {
	const dispatch = useDispatch()

	const items = useSelector(state => state.cart.itemsInCart)
	const isItemInCart = items.some(item => item.id === game.id)

	const handleClick = e => {
		e.stopPropagation()
		if (isItemInCart) {
			dispatch(deleteItemFromCart(game.id))
		} else {
			dispatch(setItemInCart(game))
		}
	}
	return (
		<div className='game-buy'>
			<span className='game-buy__price'>{game.price} грн.</span>
			<Button
				type={isItemInCart ? 'secondary' : 'primary'}
				onClick={handleClick}
			>
				{isItemInCart ? 'Убрать из корзины' : 'В корзину'}
			</Button>
		</div>
	)
}

export default GameBuy
