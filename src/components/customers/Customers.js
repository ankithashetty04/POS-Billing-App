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
					<h1>Edit Customer Data</h1>
					<EditCustomers
						toggle={toggle}
						handleToggle={handleToggle}
						{...customerData}
					/>
				</div>
			) : (
				<div>
					<h1>Add Customers</h1>
					<AddCustomers toggle={toggle} />
				</div>
			)}

			<hr />

			<CustomerList handleEdit={handleEdit} />
		</div>
	)
}

export default Customers
