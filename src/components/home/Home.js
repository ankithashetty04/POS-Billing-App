import React from 'react'
import { Container, Grid, makeStyles, Typography, Box } from '@material-ui/core'
import DashBoardContainer from '../dashboard/DashBoardContainer'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '65%',
		marginLeft: '40%',
		marginRight: '40%',
		width: '100vh',
	},
}))

const Home = (props) => {
	const classes = useStyles()
	const { userLoggedIn } = props
	return (
		<div>
			{userLoggedIn ? (
				<div>
					<DashBoardContainer />
				</div>
			) : (
				<>
					<Box>
						<Container>
							<Grid align='center' className={classes.root}>
								<Typography variant='Heading' component='h1'>
									Welcome to POS - Billing App
								</Typography>
							</Grid>
						</Container>
					</Box>
				</>
			)}
		</div>
	)
}

export default Home
