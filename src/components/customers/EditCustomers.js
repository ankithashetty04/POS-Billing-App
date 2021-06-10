import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { makeStyles, Button, TextField, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {
	clearCustData,
	startEditCustomerData,
} from '../../actions/customerAction'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginRight: theme.spacing(8),
		width: '30ch',
	},
	button: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		marginTop: theme.spacing(3),
		height: '40px',
	},
}))

const EditCustomers = (props) => {
	const classes = useStyles()

	const { handleToggle, _id, name, mobile, email } = props

	const dispatch = useDispatch()

	const initialValues = {
		name: name,
		mobile: mobile,
		email: email,
	}

	const validationSchema = yup.object({
		name: yup.string('Enter Customer Name').required('Customer name is required'),
		mobile: yup
			.number('Enter only Number')
			.min(10, 'Please enter 10 digits')
			.required('Mobile number is required'),
		email: yup
			.string('Enter your email')
			.email('Enter a valid email')
			.required('Email is required'),
	})

	const onSubmit = (values, onSubmitProps) => {
		dispatch(startEditCustomerData(_id, values))
		onSubmitProps.resetForm()
		handleToggle(false)
	}

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: onSubmit,
	})

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					className={classes.textField}
					margin='normal'
					id='name'
					name='name'
					label='Customer name*'
					variant='outlined'
					value={formik.values.name}
					onChange={formik.handleChange}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
				/>

				<TextField
					className={classes.textField}
					margin='normal'
					id='mobile'
					name='mobile'
					label='Mobile*'
					variant='outlined'
					value={formik.values.mobile}
					onChange={formik.handleChange}
					error={formik.touched.mobile && Boolean(formik.errors.mobile)}
					helperText={formik.touched.mobile && formik.errors.mobile}
				/>

				<TextField
					className={classes.textField}
					margin='normal'
					id='email'
					name='email'
					label='Email'
					variant='outlined'
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>

				<Button
					className={classes.button}
					color='primary'
					variant='contained'
					type='submit'>
					<Typography variant='h6'> Update</Typography>
				</Button>
				<Button
					className={classes.button}
					color='secondary'
					variant='contained'
					type='submit'
					onClick={() => {
						handleToggle(false)
						dispatch(clearCustData())
					}}>
					<Typography variant='h6'>Cancel</Typography>
				</Button>
			</form>
		</div>
	)
}

export default EditCustomers
