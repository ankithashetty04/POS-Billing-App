import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
	makeStyles,
	Button,
	TextField,
	Select,
	MenuItem,
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import {
	startCreateBills,
	clearCart,
	clearBillData,
	getCartItems,
} from '../../actions/billingAction'

import Cart from './Cart'
import _ from 'lodash'

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
		console.log('serverData', formData)
		if (Object.keys(data).length > 0 && items.length > 0) {
			dispatch(startCreateBills(formData))
			dispatch(clearCart())
			dispatch(clearBillData())
		} else {
			alert('fill all the Required fields')
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
						Generate Bill
					</Button>
					<Button
						variant='contained'
						className={classes.button}
						color='secondary'
						onClick={() => {
							const confirm = window.confirm('do you want to cancel')
							if (confirm) {
								dispatch(clearCart())
								dispatch(clearBillData())
							}
						}}>
						Cancel
					</Button>
				</div>
			) : (
				<div>No Items added</div>
			)}
		</div>
	)
}

export default GenerateBill
