import axios from 'axios'

//To get all customers data
export const startGetCustomers = () => {
	return (dispatch) => {
		axios
			.get('https://dct-billing-app.herokuapp.com/api/customers', {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const customersData = response.data
				dispatch(getCustomers(customersData))
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}

export const getCustomers = (data) => {
	return {
		type: 'GET_CUSTOMERS',
		payload: data,
	}
}

//To add new customer
export const startAddCustomers = (formData) => {
	return (dispatch) => {
		axios
			.post('https://dct-billing-app.herokuapp.com/api/customers', formData, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data

				dispatch(addCustomer(data))
				alert('Customers added succesfully')
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}

export const addCustomer = (data) => {
	return {
		type: 'ADD_CUSTOMER',
		payload: data,
	}
}

//To get the selected customer data
export const startGetCustomerData = (id) => {
	return (dispatch) => {
		axios
			.get(`https://dct-billing-app.herokuapp.com/api/customers/${id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(getCustomerData(data))
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}

export const getCustomerData = (data) => {
	return {
		type: 'GET_CUSTOMER_DATA',
		payload: data,
	}
}

//To Edit the customer data
export const startEditCustomerData = (id, formData) => {
	return (dispatch) => {
		console.log('formdata', formData)
		axios
			.put(`https://dct-billing-app.herokuapp.com/api/customers/${id}`, formData, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(editCustomerData(data))
				alert('Data updated Succesfully')
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}

export const editCustomerData = (data) => {
	return {
		type: 'EDIT_CUSTOMER',
		payload: data,
	}
}

//to clear the customer data upon edit
export const clearCustData = () => {
	return {
		type: 'CLEAR_CUST_DATA',
	}
}

//To delete the customer data
export const startDeleteCustomer = (id) => {
	return (dispatch) => {
		axios
			.delete(`https://dct-billing-app.herokuapp.com/api/customers/${id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				alert('customer deleted succesfully')
				dispatch(deleteCustomer(data))
			})
			.catch((error) => {
				alert(error.message)
			})
	}
}

export const deleteCustomer = (data) => {
	return {
		type: 'DELETE_CUSTOMER',
		payload: data,
	}
}
