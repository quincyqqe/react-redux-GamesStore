import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './redux'
import Header from './components/Header/Header'
import HomePage from './pages/home-page/HomePage'
import GamePage from './pages/game-page/GamePage'
import OrderPage from './pages/order-page/OrderPage'

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/app/:title' element={<GamePage />} />
						<Route path='/order' element={<OrderPage />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	)
}

export default App
