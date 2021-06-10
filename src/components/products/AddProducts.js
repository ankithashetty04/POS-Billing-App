import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { makeStyles, Button, TextField, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { startAddProduct } from '../../actions/productAction'

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

const AddProducts = (props) => {
	const dispatch = useDispatch()
	const classes = useStyles()

	const initialValues = {
		name: '',
		price: '',
	}

	const validationSchema = yup.object({
		name: yup.string('Enter Product Name').required('Product name is required'),
		price: yup
			.number('Enter the price of the product')
			.required('Price is required'),
	})

	const onSubmit = (values, onSubmitProps) => {
		console.log(values)
		dispatch(startAddProduct(values))
		onSubmitProps.resetForm()
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
					label='Product name*'
					variant='outlined'
					value={formik.values.name}
					onChange={formik.handleChange}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helpertext={formik.touched.name && formik.errors.name}
				/>

				<TextField
					className={classes.textField}
					margin='normal'
					id='price'
					name='price'
					label='Price*'
					variant='outlined'
					value={formik.values.price}
					onChange={formik.handleChange}
					error={formik.touched.price && Boolean(formik.errors.price)}
					helperText={formik.touched.price && formik.errors.price}
				/>

				<Button
					className={classes.button}
					color='primary'
					variant='contained'
					type='submit'>
					<Typography variant='h6'>Add</Typography>
				</Button>
			</form>
		</div>
	)
}

export default AddProducts
