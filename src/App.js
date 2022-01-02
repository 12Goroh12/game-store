import React from 'react'
import { HomePage } from './pages/HomePages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Switch>
					<Route path='/' exact>
						<HomePage />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
