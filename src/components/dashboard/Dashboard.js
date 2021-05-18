import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetBills } from '../../actions/billingAction'
import { startGetCustomers } from '../../actions/customerAction'
import { startGetProducts } from '../../actions/productAction'
//import { Grid, Container, Typography } from '@material-ui/core'

const Dashboard = () => {
	const bill = useSelector((state) => state.bill)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startGetProducts())
		dispatch(startGetCustomers())
		dispatch(startGetBills())
	}, [])

	return (
		<div>
			<h1>Dashboard</h1>
			<h2>Total Products - {bill.products.length}</h2>
			<h2>Total Customers - {bill.customers.length}</h2>
			<h2>Total Orders - {bill.bills.length}</h2>
		</div>
	)
}

export default Dashboard
