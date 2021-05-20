import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import Index from './components/home/Index'

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Index />
			</BrowserRouter>
		</div>
	)
}

export default App
