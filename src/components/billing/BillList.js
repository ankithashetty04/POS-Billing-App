import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Button,
	Typography,
} from '@material-ui/core'
import _ from 'lodash'
import {
	startDeleteBill,
	startGetBillData,
	startGetBills,
} from '../../actions/billingAction'
import swal from 'sweetalert'

const useStyles = makeStyles({
	table: {
		minWidth: 550,
	},
})

const BillList = (props) => {
	const { handleInvoice } = props
	const dispatch = useDispatch()
	const classes = useStyles()

	useEffect(() => {
		dispatch(startGetBills())
	}, [])

	const billsData = useSelector((state) => state.bill)
	const bills = billsData.bills
	const sortedBills = _.orderBy(bills, ['createdAt'], ['desc'])

	const customerData = billsData.customers

	const handleDelete = (id) => {
		swal({
			title: 'Are you sure?',
			text: 'Do you want to Delete this Bill?',
			icon: 'warning',
			buttons: [true, 'Yes'],
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				dispatch(startDeleteBill(id))
				swal('Bill Deleted!', '', {
					icon: 'success',
				})
			} else {
				swal('Bill not deleted!', '', 'info')
			}
		})
	}
	return (
		<div>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell align='center'>
							<Typography variant='h5'>Sl.NO</Typography>
						</TableCell>
						<TableCell align='center'>
							<Typography variant='h5'>Customer</Typography>{' '}
						</TableCell>
						<TableCell align='center'>
							<Typography variant='h5'>Total</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{sortedBills.map((data, i) => (
						<TableRow key={data._id}>
							<TableCell align='center'>
								<Typography variant='h6'>{i + 1}</Typography>
							</TableCell>
							{customerData.map((ele) => {
								return (
									ele._id === data.customer && (
										<TableCell key={data._id} align='center'>
											<Typography variant='h6'>
												{ele.name[0].toUpperCase() + ele.name.slice(1)}
											</Typography>
										</TableCell>
									)
								)
							})}

							<TableCell align='center'>
								<Typography variant='h6'>{data.total}</Typography>
							</TableCell>

							<TableCell align='center'>
								<Button
									color='primary'
									variant='outlined'
									onClick={() => {
										handleInvoice(data._id)
										dispatch(startGetBillData(data._id))
									}}>
									<Typography variant='h6'>View</Typography>
								</Button>
							</TableCell>
							<TableCell align='center'>
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
					))}
				</TableBody>
			</Table>
		</div>
	)
}

export default BillList
