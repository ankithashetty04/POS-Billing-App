import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../actions/userAuthAction'
import { makeStyles } from '@material-ui/core'
import Login from '../home/Login'
import Register from '../home/Register'
import DashBoardContainer from '../dashboard/DashBoardContainer'
import Products from '../products/Products'
import Customer from '../customers/Customers'
import Billing from '../billing/Billing'
import Profile from '../profile/Profile'
import Home from '../home/Home'
import DrawerComp from './Drawer'
import AppBarComp from './AppBar'
import swal from 'sweetalert'

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
		swal({
			title: 'Do you want to logout?',
			icon: 'warning',
			buttons: [true, 'Yes'],
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				localStorage.removeItem('token')
				dispatch(logoutUser())
				handleAuth()
				props.history.push('/')
				swal('Logged out Successfully!', '', {
					icon: 'success',
				})
			}
		})
	}

	return (
		<div>
			{userLoggedIn ? (
				<div>
					<DrawerComp handleLogout={handleLogout} />
				</div>
			) : (
				<div>
					<AppBarComp />
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

			<Route path='/dashboard' component={DashBoardContainer} />
			<Route path='/products' component={Products} />
			<Route path='/customers' component={Customer} />
			<Route path='/billing' component={Billing} />
			<Route path='/profile' component={Profile} />
		</div>
	)
}

export default withRouter(NavBar)
