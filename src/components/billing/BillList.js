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
} from '@material-ui/core'
import _ from 'lodash'
import {
	startDeleteBill,
	startGetBillData,
	startGetBills,
} from '../../actions/billingAction'

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
		const confirm = window.confirm('Do you want to delete this customer')
		if (confirm) {
			dispatch(startDeleteBill(id))
		}
	}
	return (
		<div>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell align='center'>Sl.NO</TableCell>
						<TableCell align='center'>Customer</TableCell>
						<TableCell align='center'>Total</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{sortedBills.map((data, i) => (
						<TableRow key={data._id}>
							<TableCell align='center'>{i + 1}</TableCell>
							{customerData.map((ele) => {
								return (
									ele._id === data.customer && (
										<TableCell key={data._id} align='center'>
											{ele.name}
										</TableCell>
									)
								)
							})}

							<TableCell align='center'>{data.total}</TableCell>

							<TableCell align='center'>
								<Button
									color='primary'
									variant='outlined'
									onClick={() => {
										handleInvoice(data._id)
										dispatch(startGetBillData(data._id))
									}}>
									View
								</Button>
							</TableCell>
							<TableCell align='center'>
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
					))}
				</TableBody>
			</Table>
		</div>
	)
}

export default BillList
