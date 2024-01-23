import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { calcTotalPrice } from '../utils'
import CartMenu from '../CartMenu/CartMenu'
import ItemsInCart from '../ItemsInCart/ItemsInCart'
import './CartBlock.scss'

const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
	const items = useSelector(state => state.cart.itemsInCart)
	const totalPrice = calcTotalPrice(items)
	const navigate = useNavigate()

	const handleClick = useCallback(() => {
		setIsCartMenuVisible(false)
		navigate('/order')
	}, [navigate])
	return (
		<div className='cart-block'>
			<ItemsInCart quantity={items.length} />
			<CiShoppingCart
				size={30}
				className='cart-block__icon'
				onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
			/>
			{totalPrice > 0 ? (
				<span className='cart-block__total-price'>{totalPrice} грн.</span>
			) : null}
			{isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
		</div>
	)
}

export default CartBlock
