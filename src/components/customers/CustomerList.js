import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FilterResults from 'react-filter-search'
import {
	startGetCustomers,
	startDeleteCustomer,
} from '../../actions/customerAction'

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

const CustomerList = (props) => {
	const { handleEdit } = props
	const [search, setSearch] = useState('')
	const dispatch = useDispatch()
	const customers = useSelector((state) => state.bill.customers)
	const classes = useStyles()
	useEffect(() => {
		dispatch(startGetCustomers())
	}, [])

	const handleSearch = (e) => {
		setSearch(e.target.value)
	}

	const handleDelete = (id) => {
		swal({
			title: 'Are you sure?',
			text: 'Do you want to Delete this Customer Data?',
			icon: 'warning',
			buttons: [true, 'Yes'],
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				dispatch(startDeleteCustomer(id))
				swal('Custromer Deleted Successfully!', '', {
					icon: 'success',
				})
			} else {
				swal('Customer data is safe!', '', 'info')
			}
		})
	}

	return (
		<div>
			<Typography variant='h4'>List of Customers - {customers.length}</Typography>
			<br />
			<div>
				{customers.length > 0 ? (
					<>
						<TextField
							className={classes.textField}
							type='text'
							variant='outlined'
							value={search}
							onChange={handleSearch}
							placeholder='Search Customer'
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
										<Typography variant='h5'>Email</Typography>
									</TableCell>
									<TableCell>
										<Typography variant='h5'>Mobile</Typography>
									</TableCell>
									<TableCell></TableCell>
								</TableRow>
							</TableHead>

							<TableBody>
								<FilterResults
									value={search}
									data={customers}
									renderResults={(results) => (
										<>
											{results.map((data, i) => (
												<React.Fragment key={data._id}>
													<TableRow>
														<TableCell>
															<Typography variant='h6'></Typography>
															{i + 1}
														</TableCell>
														<TableCell>
															<Typography variant='h6'>
																{data.name[0].toUpperCase() + data.name.slice(1)}
															</Typography>
														</TableCell>
														<TableCell>
															<Typography variant='h6'>{data.email}</Typography>
														</TableCell>
														<TableCell>
															<Typography variant='h6'>{data.mobile}</Typography>
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
																<Typography variant='h6'>Delete</Typography>
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

export default CustomerList
