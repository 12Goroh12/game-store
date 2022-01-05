import React from 'react'
import { HomePage } from './pages/HomePages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { GamePage } from './pages/GamePage'
import { OrderPage } from './pages/OrderPage/OrderPage'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Switch>
					<Route path='/' exact>
						<HomePage />
					</Route>
					<Route path='/app/:title' exact>
						<GamePage />
					</Route>
					<Route path='/order' exact>
						<OrderPage />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
