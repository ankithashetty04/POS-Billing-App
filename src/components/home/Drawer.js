import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../actions/userAuthAction'
import Login from './Login'
import Register from './Register'
import DashBoardContainer from '../dashboard/DashBoardContainer'
import Products from '../products/Products'
import Customer from '../customers/Customers'
import Billing from '../billing/Billing'
import Profile from './Profile'

import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import NavBar from './NavBar'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}))

const DrawerComp = (props) => {
	const { handleLogout } = props
	const classes = useStyles()
	const theme = useTheme()
	const [open, setOpen] = React.useState(false)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position='fixed'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, open && classes.hide)}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						POS - Billing App
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List onClick={handleDrawerClose}>
					<ListItem button key='Dashboard'>
						<ListItemIcon>
							{/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
						</ListItemIcon>
						{/* <ListItemText primary={text} /> */}
					</ListItem>
					<List>
						<Link to='/dashboard'>
							<ListItem button>
								<ListItemText className={classes.link} primary='Dashboard' />
							</ListItem>
						</Link>
						<Link to='/products'>
							<ListItem button>
								<ListItemText className={classes.link} primary='Products' />
							</ListItem>
						</Link>
						<Link to='/customers'>
							<ListItem button>
								<ListItemText className={classes.link} primary='Customer' />
							</ListItem>
						</Link>
						<Link to='/billing'>
							<ListItem button>
								<ListItemText className={classes.link} primary='Billing' />
							</ListItem>
						</Link>
						<Link to='/profile'>
							<ListItem button>
								<ListItemText className={classes.link} primary='Profile' />
							</ListItem>
						</Link>
						<Link to='/home' onClick={handleLogout}>
							<ListItem button>
								<ListItemText className={classes.link} primary='Logout' />
							</ListItem>
						</Link>
					</List>
				</List>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}>
				<div className={classes.drawerHeader} />
			</main>
		</div>
	)
}

export default DrawerComp