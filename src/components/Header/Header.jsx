import { Link } from 'react-router-dom'
import CartBlock from '../CartBlock/CartBlock'
import './Header.scss'

const Header = () => {
	return (
		<div className='header'>
			<div className='wrapper'>
				<Link to='/' className='header__store-title'>
					React / Redux Store
				</Link>
			</div>
			<div className='wrapper header_cart-btn-wrapper'>
				<CartBlock />
			</div>
		</div>
	)
}

export default Header
