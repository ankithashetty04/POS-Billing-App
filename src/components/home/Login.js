import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { makeStyles, Button, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { startLoginUser } from '../../actions/userAuthAction'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
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
		<div>
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
		</div>
	)
}

export default Login
