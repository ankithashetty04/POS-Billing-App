import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Grid, Container } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	link: {
		textDecoration: 'none',
		color: 'white',
	},
	title: {
		flexGrow: 1,
	},
}))

const AppBarComp = () => {
	const classes = useStyles()

	return (
		<div>
			<AppBar
				position='fixed'
				top='0'
				style={{
					background: 'linear-gradient(25deg, #000C66 20%, #7EC8E3 90%)',

					// boxShadow: 'none',
				}}>
				<Container className={classes.root}>
					<Toolbar>
						<Grid direction='row' alignItems='baseline' container spacing={5}>
							<Grid item>
								<Link to='/' className={classes.link}>
									<Typography component='h1' variant='h4'>
										POS
									</Typography>
								</Link>
							</Grid>
						</Grid>

						<Container>
							<Grid
								direction='row'
								justify='flex-end'
								alignItems='center'
								container
								spacing={5}>
								<Grid item>
									<Link to='/' className={classes.link}>
										<Typography> Home</Typography>
									</Link>
								</Grid>

								<Grid item>
									<Link to='/register' className={classes.link}>
										<Typography>Register</Typography>
									</Link>
								</Grid>
								<Grid item>
									<Link to='/login' className={classes.link}>
										<Typography>Login</Typography>
									</Link>
								</Grid>
							</Grid>
						</Container>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	)
}

export default AppBarComp
