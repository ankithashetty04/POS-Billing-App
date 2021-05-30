import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetBills } from '../../actions/billingAction'
import { startGetCustomers } from '../../actions/customerAction'
import { startGetProducts } from '../../actions/productAction'
import { makeStyles, Card, CardContent, CardHeader } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		marginBottom: '10px',
		width: 200,
	},
	title: {
		fontSize: 28,
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
			<Card className={classes.root} align='center'>
				<CardHeader title='Total Products'></CardHeader>
				<CardContent className={classes.title}>{bill.products.length}</CardContent>
			</Card>

			<Card className={classes.root} align='center'>
				<CardHeader title='Total Customers'></CardHeader>
				<CardContent className={classes.title}>{bill.customers.length}</CardContent>
			</Card>

			<Card className={classes.root} align='center'>
				<CardHeader title='Total Orders'></CardHeader>
				<CardContent className={classes.title}>{bill.bills.length}</CardContent>
			</Card>

			<Card className={classes.root} align='center'>
				<CardHeader title='Total Amount'></CardHeader>
				<CardContent className={classes.title}>{totalAmount()}</CardContent>
			</Card>
		</div>
	)
}

export default Dashboard
