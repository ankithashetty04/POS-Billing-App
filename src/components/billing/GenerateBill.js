import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { makeStyles, Grid, TextField, Button } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {
	startGetCustomers,
	startGetProducts,
} from '../../actions/billingAction'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(6),
		marginRight: theme.spacing(6),
		maxWidth: 300,
	},

	button: {
		marginLeft: theme.spacing(15),
		marginRight: theme.spacing(15),
		width: '40ch',
	},
}))

const GenerateBill = () => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const data = useSelector((state) => {
		return state.bill
	})

	useEffect(() => {
		dispatch(startGetProducts())
		dispatch(startGetCustomers())
	}, [])

	const customer = data.customers
	const products = data.products

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [customerData, setData] = useState('')

	const handleChange = (e, value) => {
		if (value) {
			setName(value.name)
			setEmail(value.email)
			setData(value)
		} else {
			setName('')
			setEmail('')
			setData('')
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
		console.log(formData)
	}

	return (
		<div>
			<h1>GenerateBill</h1>

			<div>
				<form onSubmit={handleSubmit}>
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
								value={customerData}
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
						variant='outlined'
					/>

					<Button type='submit' variant='outlined'>
						Confirm
					</Button>
				</form>

				<br />
				<Grid container className={classes.root}>
					<Grid item xs={3}>
						<Autocomplete
							className={classes.textField}
							value={products._id}
							onChange={(event, newValue) => {
								console.log(newValue)
							}}
							inputValue={products._id}
							onInputChange={(event, newInputValue) => {
								console.log(newInputValue)
							}}
							id='products'
							name='products'
							options={products}
							getOptionLabel={(option) => option.name}
							style={{ width: 300 }}
							renderInput={(params) => (
								<TextField {...params} label='Select Products' variant='outlined' />
							)}
						/>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default GenerateBill
