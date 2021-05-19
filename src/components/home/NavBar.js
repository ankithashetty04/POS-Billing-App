import React, { useEffect } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../actions/userAuthAction'
import {
	makeStyles,
	Grid,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Button,
	MenuItem,
} from '@material-ui/core'

import Login from './Login'
import Register from './Register'
import Dashboard from '../dashboard/Dashboard'
import Products from '../products/Products'
import Customer from '../customers/Customers'
import Billing from '../billing/Billing'
import Profile from './Profile'

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	display: 'flex',
	// 	flexWrap: 'wrap',
	// },
	root: {
		flexGrow: 1,
	},
	appBar: {
		color: 'b6c9f0',
	},
	title: {
		flexGrow: 1,
	},
}))

const NavBar = (props) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { userLoggedIn, handleAuth } = props

	const handleLogout = () => {
		const confirm = window.confirm('Do you want to logout')
		if (confirm) {
			localStorage.removeItem('token')
			handleAuth()
			dispatch(logoutUser())
			props.history.push('/')
			alert('succesfully logged out')
		}
	}

	return (
		<div>
			{userLoggedIn ? (
				<div className={classes.root}>
					{/* <AppBar position='static'>
						<Toolbar edge='start' className={classes.appBar} aria-label='menu'> */}
					<Grid container spacing={8} className={classes.root}>
						<Grid item xs={2}>
							<Link to='/dashboard'>Dashboard</Link>
						</Grid>

						<Grid item xs={2}>
							<Link to='/products'>Products</Link>
						</Grid>
						<Grid item xs={2}>
							<Link to='/customers'>Customer</Link>
						</Grid>
						<Grid item xs={2}>
							<Link to='/billing'>Billing</Link>
						</Grid>
						<Grid item xs={2}>
							<Link to='/profile'>Profile</Link>
						</Grid>

						<Grid item xs={2}>
							<Link to='/' onClick={handleLogout}>
								Logout
							</Link>
						</Grid>
					</Grid>
					{/* </Toolbar>
					</AppBar> */}
				</div>
			) : (
				<div>
					<Grid container spacing={10}>
						<Grid item xs={5}>
							<Link to='/register'>Register</Link>
						</Grid>
						<Grid item xs={5}>
							<Link to='/login'>Login</Link>
						</Grid>
					</Grid>
				</div>
			)}

			<Route path='/register' component={Register} />
			<Route
				path='/login'
				render={(props) => {
					return <Login {...props} handleAuth={handleAuth} />
				}}
			/>
			<Route path='/dashboard' component={Dashboard} />
			<Route path='/products' component={Products} />
			<Route path='/customers' component={Customer} />
			<Route path='/billing' component={Billing} />
			<Route path='/profile' component={Profile} />
		</div>
	)
}

export default withRouter(NavBar)
