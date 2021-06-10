import React, { useEffect, useState } from 'react'
import NavBar from '../navBar/NavBar'
import { makeStyles, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles(() => ({
	root: {
		minHeight: '97vh',
		minWidth: '100vh',
		background: 'linear-gradient(30deg, white 10%, #ffb64d 90%)',
		display: 'flex',
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
				<div className={classes.root}>
					<NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth} />
				</div>
			)}
		</div>
	)
}

export default Index
