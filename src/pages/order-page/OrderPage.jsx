import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../../components/utils'
import OrderItem from '../../components/OrderItem/OrderItem'
import './OrderPage.scss'

const OrderPage = () => {
	const items = useSelector(state => state.cart.itemsInCart)
	return (
		<div className='order-page'>
			<div className='order-page__left'>
				{items.map(game => (
					<OrderItem game={game} />
				))}
			</div>
			<div className='order-page__right'>
				<div className='order-page__total'>
					<span>
						{items.length} товаров на сумму {calcTotalPrice(items)} грн.
					</span>
				</div>
			</div>
		</div>
	)
}

export default OrderPage
