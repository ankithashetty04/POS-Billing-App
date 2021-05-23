import React, { useEffect } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../actions/userAuthAction'
import { makeStyles, Grid } from '@material-ui/core'

import Login from './Login'
import Register from './Register'
import DashBoardContainer from '../dashboard/DashBoardContainer'
import Products from '../products/Products'
import Customer from '../customers/Customers'
import Billing from '../billing/Billing'
import Profile from './Profile'
import Home from './Home'
import DrawerComp from './Drawer'
import AppBarComp from './AppBar'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawerPaper: {
		width: 'inherit',
	},
	link: {
		textDecoration: 'none',
		color: theme.palette.text.primary,
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
			alert('succesfully logged out')
			props.history.push('/')
			dispatch(logoutUser())
		}
	}

	return (
		<div>
			{userLoggedIn ? (
				<div className={classes.root}>
					<DrawerComp handleLogout={handleLogout} />
				</div>
			) : (
				<div>
					<AppBarComp />

					{/* <Link to='/home'>Home</Link>
					<Link to='/register'>Register</Link>
					<Link to='/login'>Login</Link> */}
				</div>
			)}

			<Route path='/register' component={Register} />
			<Route
				path='/login'
				render={(props) => {
					return <Login {...props} handleAuth={handleAuth} />
				}}
			/>
			<Route
				path='/'
				exact={true}
				render={(props) => {
					return <Home {...props} userLoggedIn={userLoggedIn} />
				}}
			/>
			{/* <Route path='/' component={Home} exact={true} /> */}
			<Route path='/dashboard' component={DashBoardContainer} />
			<Route path='/products' component={Products} />
			<Route path='/customers' component={Customer} />
			<Route path='/billing' component={Billing} />
			<Route path='/profile' component={Profile} />
		</div>
	)
}

export default withRouter(NavBar)
