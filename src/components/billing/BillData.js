import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { makeStyles, Button, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { billCustomerData } from '../../actions/billingAction'
import { startGetCustomers } from '../../actions/customerAction'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(1),
		width: 250,
	},

	button: {
		marginLeft: theme.spacing(4),
		marginRight: theme.spacing(4),
		marginTop: theme.spacing(2),
	},
}))

const BillData = () => {
	const dispatch = useDispatch()
	const classes = useStyles()

	const data = useSelector((state) => {
		return state.bill
	})

	const customer = data.customers

	useEffect(() => {
		dispatch(startGetCustomers())
	}, [])

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [mobile, setMobile] = useState('')
	const [customerData, setData] = useState('')

	const handleChange = (e, value) => {
		setMobile(e.target.value)
		if (value) {
			setName(value.name)
			setEmail(value.email)
			setMobile(mobile)
			setData(value)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = {
			customer: customerData,
		}
		setData('')
		setName('')
		setEmail('')
		if (Object.values(customerData).includes('') !== true) {
			dispatch(billCustomerData(formData))
		} else {
			alert('Enter All required Fields')
		}

		console.log(formData)
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className={classes.root}>
				<Autocomplete
					margin='normal'
					value={customer._id}
					onChange={handleChange}
					inputValue={customer.mobile}
					id='customer'
					name='mobile'
					options={customer}
					getOptionLabel={(option) => option.mobile}
					renderInput={(params) => (
						<TextField
							{...params}
							value={customerData.mobile}
							label='Enter Mobile Number'
							className={classes.textField}
							variant='outlined'
						/>
					)}
				/>

				<br />
				<TextField
					id='name'
					name='name'
					value={name}
					onChange={handleChange}
					className={classes.textField}
					label=' Customer Name'
					variant='outlined'
				/>

				<TextField
					id='email'
					name='email'
					value={email}
					className={classes.textField}
					label='Email'
					onChange={handleChange}
					variant='outlined'
				/>

				<Button
					type='submit'
					className={classes.button}
					color='primary'
					variant='contained'>
					Confirm
				</Button>
			</form>
		</div>
	)
}

export default BillData
