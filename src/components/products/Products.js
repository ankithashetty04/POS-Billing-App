import { Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetProductData } from '../../actions/productAction'
import AddProducts from './AddProducts'
import EditProducts from './editProducts'
import ProductsList from './ProductsList'

const Products = () => {
	const [toggle, setToggle] = useState(false)

	const dispatch = useDispatch()

	const handleToggle = (value) => {
		setToggle(value)
	}

	const handleEdit = (id) => {
		handleToggle(true)
		dispatch(startGetProductData(id))
	}

	const productsData = useSelector((state) => state.bill.productsData)
	return (
		<div>
			{toggle && Object.keys(productsData).length > 0 ? (
				<div>
					<Typography variant='h3'>Edit Product</Typography>
					<EditProducts
						toggle={toggle}
						handleToggle={handleToggle}
						{...productsData}
					/>
				</div>
			) : (
				<div>
					<Typography variant='h3'>Add Products</Typography>
					<AddProducts />
				</div>
			)}

			<hr />
			<ProductsList handleEdit={handleEdit} />
		</div>
	)
}

export default Products
