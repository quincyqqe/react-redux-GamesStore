import './CartItem.scss'

const CartItem = ({ title, price, id }) => {
	return (
		<div className='cart-item'>
			<span>{title}</span>
			<div className='cart-item__price'>
				<span>{price} грн.</span>
			</div>
		</div>
	)
}

export default CartItem
