import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { makeStyles, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
}))

const Index = () => {
	const [userLoggedIn, setUserLogin] = useState(false)

	const classes = useStyles()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			handleAuth()
		}
	}, [])

	const handleAuth = () => {
		setUserLogin(!userLoggedIn)
	}

	return (
		<div>
			{userLoggedIn ? (
				<div>
					<Container fixed>
						<Grid>
							<NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth} />
						</Grid>
					</Container>
				</div>
			) : (
				<div>
					<NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth} />
				</div>
			)}
		</div>
	)
}

export default Index
