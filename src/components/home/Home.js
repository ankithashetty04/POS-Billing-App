import React from 'react'
import { Container, Grid, makeStyles, Typography, Box } from '@material-ui/core'
import DashBoardContainer from '../dashboard/DashBoardContainer'
import './home.css'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '60%',
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
								<Typography
									variant='Heading'
									color='primary'
									className='typing'
									component='h1'>
									Welcome to POS - Billing App
								</Typography>
								<div>
									<Typography className='typing'>To see the demo</Typography>
									<Typography className='typing' component='h2' variant='body1'>
										use the credentials
										<br />
										<strong>
											ankitha@gmail.com
											<br /> secret123
										</strong>
									</Typography>
									<Typography></Typography>
								</div>
							</Grid>
						</Container>
					</Box>
				</>
			)}
		</div>
	)
}

export default Home
