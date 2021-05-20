import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetBills } from '../../actions/billingAction'
import { startGetCustomers } from '../../actions/customerAction'
import { startGetProducts } from '../../actions/productAction'
import {
	makeStyles,
	Card,
	CardContent,
	CardHeader,
	Paper,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		alignItems: 'center',
	},
	paper: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(16),
			height: theme.spacing(16),
		},
	},
	title: {
		fontSize: 14,
	},
}))

const Dashboard = () => {
	const classes = useStyles()
	const bill = useSelector((state) => state.bill)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startGetProducts())
		dispatch(startGetCustomers())
		dispatch(startGetBills())
	}, [])

	const totalAmount = () => {
		let total = 0
		bill.bills.forEach((ele) => (total += ele.total))
		return total
	}

	return (
		<div>
			<Paper className={classes.paper} elevation={0} />
			<Paper />
			<Paper elevation={3} />

			<Card className={classes.root}>
				<CardHeader title='Total Products'></CardHeader>
				<CardContent className={classes.title}>{bill.products.length}</CardContent>
			</Card>
			<Card className={classes.root}>
				<CardHeader title='Total Customers'></CardHeader>
				<CardContent className={classes.title}>{bill.customers.length}</CardContent>
			</Card>

			<Card className={classes.root}>
				<CardHeader title='Total Orders '></CardHeader>
				<CardContent className={classes.title}>{bill.bills.length}</CardContent>
			</Card>

			<Card className={classes.root}>
				<CardHeader title='Total Amount'></CardHeader>
				<CardContent className={classes.title}>{totalAmount()}</CardContent>
			</Card>

			<h2>Total Products - {bill.products.length}</h2>
			<h2>Total Customers - {bill.customers.length}</h2>
			<h2>Total Orders - {bill.bills.length}</h2>
			<h2>Total Amount - {totalAmount()}</h2>
		</div>
	)
}

export default Dashboard
