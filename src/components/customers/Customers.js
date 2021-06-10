import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetCustomerData } from '../../actions/customerAction'
import AddCustomers from './AddCustomers'
import CustomerList from './CustomerList'
import EditCustomers from './EditCustomers'

const Customers = () => {
	const [toggle, setToggle] = useState(false)

	const dispatch = useDispatch()

	const handleToggle = (value) => {
		setToggle(value)
	}

	const handleEdit = (id) => {
		handleToggle(true)
		dispatch(startGetCustomerData(id))
	}

	const customerData = useSelector((state) => state.bill.customerData)

	return (
		<div>
			{toggle && Object.keys(customerData).length > 0 ? (
				<div>
					<Typography variant='h3'>Edit Customer Data</Typography>
					<EditCustomers
						toggle={toggle}
						handleToggle={handleToggle}
						{...customerData}
					/>
				</div>
			) : (
				<div>
					<Typography variant='h3'>Add Customers</Typography>
					<AddCustomers toggle={toggle} />
				</div>
			)}

			<hr />

			<CustomerList handleEdit={handleEdit} />
		</div>
	)
}

export default Customers
