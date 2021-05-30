import React from 'react'
import DashBoardContainer from '../dashboard/DashBoardContainer'
import HomePage from './HomePage'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import './home.css'
import image from './homeImg.png'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '5%',
	},
	data: {
		marginTop: '4%',
	},
	content: {
		marginTop: '2%',
		marginLeft: '5%',
	},
}))

const Home = (props) => {
	const classes = useStyles()
	const { userLoggedIn } = props
	return (
		<div>
			{userLoggedIn ? (
				<>
					<DashBoardContainer />
				</>
			) : (
				<div className={classes.root}>
					<Typography component='h2' variant='h2' align='center'>
						Welcome to POS
					</Typography>
					<Typography component='h4' variant='h4' align='center'>
						Billing made easy
					</Typography>

					<Grid container spacing={10} className={classes.content} align='center'>
						<img src={image} width='60%' height='40%' />
						<Grid item xs={2} className={classes.data}>
							<HomePage />
						</Grid>
					</Grid>
				</div>
			)}
		</div>
	)
}

export default Home
