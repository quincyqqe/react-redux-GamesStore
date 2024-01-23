import './OrderItem.scss'
import GameCover from '../GameCover/GameCover'

const OrderItem = ({ game }) => {
	return (
		<div className='order-item'>
			<div className='order-item__cover'>
				<GameCover image={game.image} />
			</div>
			<div className='order-item__title'>
				<span>{game.title}</span>
			</div>
			<div className='order-item__price'>
				<span>{game.price} грн.</span>
			</div>
		</div>
	)
}

export default OrderItem
