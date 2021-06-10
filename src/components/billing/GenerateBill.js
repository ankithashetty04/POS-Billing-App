import React from 'react'

import { makeStyles, Button, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import {
	startCreateBills,
	clearCart,
	clearBillData,
	getCartItems,
} from '../../actions/billingAction'

import Cart from './Cart'
import _ from 'lodash'
import swal from 'sweetalert'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(10),
		marginRight: theme.spacing(10),
	},
	select: {
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
	},
	button: {
		marginLeft: theme.spacing(5),
		marginRight: theme.spacing(5),
		marginTop: theme.spacing(2),
	},
}))

const GenerateBill = () => {
	const dispatch = useDispatch()
	const classes = useStyles()

	const bill = useSelector((state) => state.bill)

	const cart = bill.cart
	const customersData = bill.addBillData.customer

	const handleIncrease = (id) => {
		return cart.map((ele) => {
			if (ele.products._id === id) {
				dispatch(getCartItems())
				return (ele.quantity = ele.quantity + 1)
			}
		})
	}

	const handleDecrease = (id) => {
		return cart.map((ele) => {
			if (ele.products._id === id) {
				if (ele.quantity > 1) {
					dispatch(getCartItems())
					return (ele.quantity = ele.quantity - 1)
				}
			}
		})
	}

	const handleClick = (data = customersData, items = cart) => {
		if (data) {
			const formData = {
				date: new Date(),
				customer: data._id,
				lineItems: items.map((ele) => {
					return {
						product: ele.products,
						quantity: ele.quantity,
					}
				}),
			}

			dispatch(startCreateBills(formData))
			dispatch(clearCart())
			dispatch(clearBillData())
		} else {
			swal('Enter Customer Data', '', 'warning')
			// alert('fill customer data')
		}
	}

	return (
		<div>
			{cart.length > 0 ? (
				<div>
					<Cart handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
					<Button
						variant='contained'
						className={classes.button}
						color='primary'
						type='submit'
						onClick={() => {
							handleClick(customersData, cart)
						}}>
						<Typography variant='h6'>Generate Bill</Typography>
					</Button>
					<Button
						variant='contained'
						className={classes.button}
						color='secondary'
						onClick={() => {
							swal({
								title: 'Are you sure?',
								text: 'Do you want to Cancel this order?',
								icon: 'warning',
								buttons: [true, 'Yes'],
								dangerMode: true,
							}).then((willDelete) => {
								if (willDelete) {
									dispatch(clearCart())
									dispatch(clearBillData())
									swal('Order Cancelled!', '', {
										icon: 'success',
									})
								}
							})
						}}>
						<Typography variant='h6'>Cancel</Typography>
					</Button>
				</div>
			) : (
				<Typography>No Items added</Typography>
			)}
		</div>
	)
}

export default GenerateBill
