import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { makeStyles, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		// backgroundColor: 'blue',
		paddingTop: '50%',
		marginLeft: '60%',
		marginRight: '40%',
		width: '100vh',
		alignItems: 'center',
	},
}))

const Home = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<h1>Welcome to POS - Billing App</h1>
		</div>
	)
}

export default Home
