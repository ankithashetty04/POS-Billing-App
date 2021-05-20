import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { makeStyles, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		// justifyContent: 'center',
		// alignItems: 'center',
		// direction: 'column',
		// width: '40%',
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
					<Container fixed>
						<Grid container>
							<Grid item xs={6}>
								<NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth} />
							</Grid>
						</Grid>
					</Container>
				</div>
			)}
		</div>
	)
}

export default Index