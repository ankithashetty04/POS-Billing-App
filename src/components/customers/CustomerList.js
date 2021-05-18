import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FilterResults from 'react-filter-search'
import {
	startGetCustomers,
	startDeleteCustomer,
} from '../../actions/customerAction'

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
		const confirm = window.confirm('Do you want to delete this customer')
		if (confirm) {
			dispatch(startDeleteCustomer(id))
		}
	}

	return (
		<div>
			<h1>Customers </h1>

			<div>
				{customers.length > 0 ? (
					<>
						<TextField
							className={classes.textField}
							type='text'
							value={search}
							onChange={handleSearch}
							placeholder='Search Customer'
						/>
						<Table className={classes.table} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Sl.No</TableCell>
									<TableCell>Name</TableCell>
									<TableCell>Email</TableCell>
									<TableCell>Mobile</TableCell>

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
														<TableCell>{i + 1}</TableCell>
														<TableCell>{data.name}</TableCell>
														<TableCell>{data.email}</TableCell>
														<TableCell>{data.mobile}</TableCell>

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

export default CustomerList
