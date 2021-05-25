import React from 'react'
import { Container, Grid, makeStyles, Typography, Box } from '@material-ui/core'
import DashBoardContainer from '../dashboard/DashBoardContainer'
import './home.css'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '50%',
		marginLeft: '30%',
		marginRight: '10%',
		width: '100vh',
	},
	subtitle: {
		marginLeft: '30%',
		marginRight: '20%',
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
									variant='h2'
									color='primary'
									className='typing'
									component='h1'>
									Welcome to POS - Billing App
								</Typography>
								<div className={classes.subtitle}>
									<Typography variant='h5' className='typing' component='h2'>
										To see the demo
									</Typography>
									<Typography variant='h5' className='typing' component='h2'>
										use the credentials
										<br />
										<strong>
											email : ankitha@gmail.com
											<br /> password : secret123
										</strong>
									</Typography>
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
