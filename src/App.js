import React from 'react'
import { HomePage } from './pages/HomePages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { GamePage } from './pages/GamePage'
import { OrderPage } from './pages/OrderPage/OrderPage'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/app/:title' element={<GamePage />} />
					<Route path='/order' element={<OrderPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
