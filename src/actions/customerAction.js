import axios from 'axios'
import swal from 'sweetalert'

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
				swal({
					title: `${error.message}`,
					icon: 'error',
					button: 'ok',
				})
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
				swal('Customer added succesfully', '', 'success')
			})
			.catch((error) => {
				swal({
					title: `${error.message}`,
					icon: 'error',
					button: 'ok',
				})
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
				swal({
					title: `${error.message}`,
					icon: 'error',
					button: 'ok',
				})
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
				swal('Data Updated Succesfully', '', 'success')
			})
			.catch((error) => {
				swal({
					title: `${error.message}`,
					icon: 'error',
					button: 'ok',
				})
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
				dispatch(deleteCustomer(data))
				swal({
					title: 'Customer Deleted Succesfully',
					icon: 'success',
					button: 'ok',
				})
			})
			.catch((error) => {
				swal({
					title: `${error.message}`,
					icon: 'error',
					button: 'ok',
				})
			})
	}
}

export const deleteCustomer = (data) => {
	return {
		type: 'DELETE_CUSTOMER',
		payload: data,
	}
}
