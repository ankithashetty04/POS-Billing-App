import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { makeStyles, Button, TextField, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { startRegisterUser } from '../../actions/userAuthAction'

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: '30%',
		paddingLeft: '50%',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		direction: 'column',
		minWidth: '100vh',
	},
	title: {
		marginRight: '60%',
		marginLeft: '32%',
	},
	textField: {
		marginLeft: theme.spacing(10),
		marginRight: theme.spacing(10),
		width: '50ch',
	},
	button: {
		marginLeft: theme.spacing(15),
		marginRight: theme.spacing(15),
		width: '40ch',
		marginBottom: '2em',
	},
}))

const initialValues = {
	username: '',
	email: '',
	password: '',
	businessName: '',
	address: '',
}
const validationSchema = yup.object({
	username: yup
		.string('Enter your user name')
		.required('user name is required')
		.min(4, 'username must be minimum 4 characters long'),
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
	businessName: yup
		.string('Enter Business Name')
		.required('Business name is required'),
	address: yup.string('Enter your address').required('Address is required'),
})

const Register = (props) => {
	const dispatch = useDispatch()

	const userAuth = useSelector((state) => {
		return state.userAuth.register
	})

	const [isSubmitted, setIsSubmitted] = useState(false)

	useEffect(() => {
		if (isSubmitted) {
			props.history.push('/login')
		}
	}, [userAuth])

	const classes = useStyles()

	const onSubmit = (values, onSubmitProps) => {
		console.log('values', values)
		onSubmitProps.resetForm()
		setIsSubmitted(true)
		dispatch(startRegisterUser(values))
	}

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: onSubmit,
	})

	return (
		<div className={classes.root}>
			<Typography
				className={classes.title}
				variant='h4'
				component='header'
				color='primary'>
				Register
			</Typography>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					className={classes.textField}
					margin='normal'
					id='username'
					name='username'
					label='Username'
					variant='outlined'
					value={formik.values.username}
					onChange={formik.handleChange}
					error={formik.touched.username && Boolean(formik.errors.username)}
					helperText={formik.touched.username && formik.errors.username}
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

				<TextField
					className={classes.textField}
					margin='normal'
					id='password'
					name='password'
					label='Password'
					type='password'
					variant='outlined'
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>

				<TextField
					className={classes.textField}
					margin='normal'
					id='businessName'
					name='businessName'
					label='Business Name'
					variant='outlined'
					value={formik.values.businessName}
					onChange={formik.handleChange}
					error={formik.touched.businessName && Boolean(formik.errors.businessName)}
					helperText={formik.touched.businessName && formik.errors.businessName}
				/>

				<TextField
					className={classes.textField}
					margin='normal'
					id='address'
					name='address'
					label='Address'
					variant='outlined'
					value={formik.values.address}
					onChange={formik.handleChange}
					error={formik.touched.address && Boolean(formik.errors.address)}
					helperText={formik.touched.address && formik.errors.address}
					multiline
				/>

				<Button
					className={classes.button}
					color='primary'
					variant='contained'
					type='submit'>
					Register
				</Button>
			</form>
		</div>
	)
}

export default Register
