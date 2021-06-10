import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Index from './components/home/Index'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './App.css'

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Avenir',
	},
})

const App = () => {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Index />
				</BrowserRouter>
			</ThemeProvider>
		</div>
	)
}

export default App
