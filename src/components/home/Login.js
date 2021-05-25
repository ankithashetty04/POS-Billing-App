import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { makeStyles, Button, TextField, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLoginUser } from '../../actions/userAuthAction'

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: '40%',
		paddingLeft: '50%',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		direction: 'column',
		minWidth: '100vh',
	},
	title: {
		marginRight: '60%',
		marginLeft: '35%',
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
	},
	link: {
		textDecoration: 'none',
		color: 'blue',
	},
}))

const initialValues = {
	email: '',
	password: '',
}

const validationSchema = yup.object({
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
})

const Login = (props) => {
	const userAuth = useSelector((state) => state.userAuth.login)
	const dispatch = useDispatch()

	const [isSubmitted, setIsSubmitted] = useState(false)
	const { handleAuth } = props

	useEffect(() => {
		if (isSubmitted) {
			handleAuth()
			props.history.push('/dashboard')
		}
	}, [userAuth])

	const classes = useStyles()

	const onSubmit = (values, onSubmitProps) => {
		onSubmitProps.resetForm()
		setIsSubmitted(true)
		dispatch(startLoginUser(values))
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
				Login
			</Typography>
			<form onSubmit={formik.handleSubmit}>
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
				<Button
					className={classes.button}
					color='primary'
					variant='contained'
					type='submit'>
					Login
				</Button>
			</form>
			<Typography>
				Not Registered ?
				<Link to='/register' className={classes.link}>
					Register here
				</Link>
			</Typography>
		</div>
	)
}

export default Login
