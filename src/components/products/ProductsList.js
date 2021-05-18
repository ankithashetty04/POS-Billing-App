import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FilterResults from 'react-filter-search'
import {
	startGetProducts,
	startDeleteProduct,
} from '../../actions/productAction'

import {
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Button,
	TextField,
} from '@material-ui/core'

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	textField: {
		width: '250px',
	},
})

const ProductsList = (props) => {
	const { handleEdit } = props
	const [search, setSearch] = useState('')
	const dispatch = useDispatch()
	const products = useSelector((state) => state.bill.products)
	const classes = useStyles()

	useEffect(() => {
		dispatch(startGetProducts())
	}, [])

	const handleSearch = (e) => {
		setSearch(e.target.value)
	}

	const handleDelete = (id) => {
		const confirm = window.confirm('Do you want to delete this product')
		if (confirm) {
			dispatch(startDeleteProduct(id))
		}
	}

	return (
		<div>
			<h1>Products</h1>

			<div>
				{products.length > 0 ? (
					<>
						<TextField
							className={classes.textField}
							variant='standard'
							type='text'
							value={search}
							onChange={handleSearch}
							placeholder='Search Product'
						/>

						<Table className={classes.table} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Sl.No</TableCell>
									<TableCell>Name</TableCell>
									<TableCell>Price</TableCell>

									<TableCell></TableCell>
								</TableRow>
							</TableHead>

							<TableBody>
								<FilterResults
									value={search}
									data={products}
									renderResults={(results) => (
										<>
											{results.map((data, i) => (
												<React.Fragment key={data._id}>
													<TableRow>
														<TableCell>{i + 1}</TableCell>
														<TableCell>
															{data.name[0].toUpperCase() + data.name.slice(1)}
														</TableCell>
														<TableCell>Rs.{data.price}</TableCell>
														<TableCell>
															<Button
																color='default'
																variant='outlined'
																onClick={() => {
																	handleEdit(data._id)
																}}>
																Edit
															</Button>
														</TableCell>
														<TableCell>
															<Button
																color='secondary'
																variant='outlined'
																onClick={() => {
																	handleDelete(data._id)
																}}>
																Delete
															</Button>
														</TableCell>
													</TableRow>
												</React.Fragment>
											))}
										</>
									)}
								/>
							</TableBody>
						</Table>
					</>
				) : (
					<div>
						<h2>No Customers Added</h2>
					</div>
				)}
			</div>
		</div>
	)
}

export default ProductsList
