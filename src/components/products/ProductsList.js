import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FilterResults from 'react-filter-search'
import {
	startGetProducts,
	startDeleteProduct,
} from '../../actions/productAction'

import {
	makeStyles,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Button,
	TextField,
} from '@material-ui/core'
import swal from 'sweetalert'

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
		swal({
			title: 'Do you want to delete this product?',
			icon: 'warning',
			buttons: [true, 'Yes'],
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				dispatch(startDeleteProduct(id))
				swal('Product Deleted Successfully!', '', {
					icon: 'success',
				})
			} else {
				swal('Product data is safe!', '', 'info')
			}
		})
	}

	return (
		<div>
			<Typography variant='h4'>List of Products - {products.length}</Typography>
			<br />
			<div>
				{products.length > 0 ? (
					<>
						<TextField
							className={classes.textField}
							variant='outlined'
							type='text'
							value={search}
							onChange={handleSearch}
							placeholder='Search Product'
						/>

						<Table className={classes.table} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>
										<Typography variant='h5'>Sl.No</Typography>
									</TableCell>
									<TableCell>
										<Typography variant='h5'>Name</Typography>
									</TableCell>
									<TableCell>
										<Typography variant='h5'>Price</Typography>
									</TableCell>
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
														<TableCell>
															<Typography variant='h6'>{i + 1}</Typography>
														</TableCell>
														<TableCell>
															<Typography variant='h6'>
																{data.name[0].toUpperCase() + data.name.slice(1)}
															</Typography>
														</TableCell>

														<TableCell>
															<Typography variant='h6'>Rs.{data.price}</Typography>
														</TableCell>
														<TableCell>
															<Button
																color='default'
																variant='outlined'
																onClick={() => {
																	handleEdit(data._id)
																}}>
																<Typography variant='h6'>Edit</Typography>
															</Button>
														</TableCell>
														<TableCell>
															<Button
																color='secondary'
																variant='outlined'
																onClick={() => {
																	handleDelete(data._id)
																}}>
																<Typography variant='h6'> Delete</Typography>
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
