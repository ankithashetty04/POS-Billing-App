import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	startGetBills,
	getbillCustData,
	startGetBillData,
} from '../../actions/billingAction'
import { startGetUserInfo } from '../../actions/userAuthAction'
import GenerateBill from './GenerateBill'
import BillData from './BillData'
import BillList from './BillList'
import AddToCart from './AddToCart'
import Invoice from './Invoice'
import { makeStyles, Modal, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	button: {
		marginLeft: theme.spacing(5),
		marginRight: theme.spacing(5),
		marginTop: theme.spacing(2),
	},
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}))

const Billing = () => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const bills = useSelector((state) => state.bill.bills)

	const customer = useSelector((state) => state.bill.addBillData)
	const billData = useSelector((state) => state.bill.billData)
	const [toggleInvoice, setToggle] = useState(false)
	useEffect(() => {
		dispatch(startGetBills())
		dispatch(getbillCustData(customer))
		dispatch(startGetUserInfo())
	}, [])

	const handleToggle = (value) => {
		setToggle(value)
	}

	const handleInvoice = (id) => {
		handleToggle(true)
		dispatch(startGetBillData(id))
	}

	return (
		<div>
			<Typography variant='h3'>Billing</Typography>
			<br />
			<BillData />
			<br />
			<AddToCart />
			<hr />
			{Object.keys(customer).length > 0 ? (
				<div>
					{!Object.values(customer).includes('') && (
						<Typography variant='h4'>
							Customer -{' '}
							{customer.customer.name[0].toUpperCase() +
								customer.customer.name.slice(1)}
						</Typography>
					)}
				</div>
			) : (
				<Typography>No Customers Added</Typography>
			)}

			<div>
				<GenerateBill />
			</div>

			<hr />
			<br />
			<Typography variant='h4'>Listing Bills - {bills.length}</Typography>
			<BillList handleInvoice={handleInvoice} />
			{toggleInvoice && Object.keys(billData).length > 0 && (
				<Modal
					open={toggleInvoice}
					aria-labelledby='simple-modal-title'
					aria-describedby='simple-modal-description'>
					<Invoice handleToggle={handleToggle} />
				</Modal>
			)}
		</div>
	)
}

export default Billing
