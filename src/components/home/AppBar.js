import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Grid, Container } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

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
			<AppBar>
				<Toolbar className={classes.root}>
					<Container>
						<Grid direction='row' alignItems='baseline' container spacing={5}>
							<Grid item>
								<Link to='/' className={classes.link}>
									<Typography>POS</Typography>
								</Link>
							</Grid>
						</Grid>
					</Container>
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
			</AppBar>
		</div>
	)
}

export default AppBarComp
