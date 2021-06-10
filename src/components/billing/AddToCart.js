import React, { useState, useEffect } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles, Button, TextField, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../actions/billingAction'
import { startGetProducts } from '../../actions/productAction'
import swal from 'sweetalert'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(1),
		width: 350,
	},

	button: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		marginTop: theme.spacing(1),
		height: '40px',
	},
}))

const AddToCart = () => {
	const dispatch = useDispatch()
	const classes = useStyles()
	useEffect(() => {
		dispatch(startGetProducts())
	}, [])

	const products = useSelector((state) => state.bill.products)

	const [productData, setProduct] = useState('')

	const handleChange = (e, value) => {
		if (value) {
			setProduct(value)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = {
			products: productData,
			quantity: 1,
		}

		if (Object.values(formData).includes('') !== true) {
			dispatch(addToCart(formData))
		} else {
			swal('Enter product name', '', 'warning')
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit} className={classes.root}>
				<Autocomplete
					margin='normal'
					value={products._id}
					onChange={handleChange}
					inputValue={products.name}
					options={products}
					getOptionLabel={(option) => option.name}
					renderInput={(params) => (
						<TextField
							{...params}
							className={classes.textField}
							value={productData}
							label='Select Products'
							variant='outlined'
							helperText='required'
						/>
					)}
				/>

				<Button
					variant='contained'
					className={classes.button}
					color='primary'
					type='submit'>
					<Typography>Add to cart </Typography>
				</Button>
			</form>
		</div>
	)
}

export default AddToCart
