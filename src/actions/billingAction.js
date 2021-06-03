import axios from 'axios'
import swal from 'sweetalert'

//to get all bills data
export const startGetBills = () => {
	return (dispatch) => {
		axios
			.get('https://dct-billing-app.herokuapp.com/api/bills', {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(getBills(data))
			})
			.catch((error) => {
				swal(`${error.message}`, '', 'error')
			})
	}
}

export const getBills = (data) => {
	return {
		type: 'GET_BILLS',
		payload: data,
	}
}

//To generate new bill
export const startCreateBills = (formData) => {
	return (dispatch) => {
		axios
			.post('https://dct-billing-app.herokuapp.com/api/bills', formData, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(createBill(data))
				swal('Bill Generated Sucessfully', '', 'success')
			})
			.catch((error) => {
				swal(`${error.message}`, '', 'error')
			})
	}
}

export const createBill = (data) => {
	return {
		type: 'CREATE_BILL',
		payload: data,
	}
}

//to get selected bill data
export const startGetBillData = (id) => {
	return (dispatch) => {
		axios
			.get(`https://dct-billing-app.herokuapp.com/api/bills/${id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(getBillData(data))
			})
			.catch((error) => {
				swal(`${error.message}`, '', 'error')
			})
	}
}

export const getBillData = (data) => {
	return {
		type: 'GET_BILL_DATA',
		payload: data,
	}
}

//to delete the selected bill
export const startDeleteBill = (id) => {
	return (dispatch) => {
		axios
			.delete(`https://dct-billing-app.herokuapp.com/api/bills/${id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(deleteBill(data))
			})
			.catch((error) => {
				swal(`${error.message}`, '', 'error')
			})
	}
}

export const deleteBill = (data) => {
	return {
		type: 'DELETE_BILL',
		payload: data,
	}
}

//to add the customer data who made an order
export const billCustomerData = (data) => {
	return {
		type: 'ADD_BILL_DATA',
		payload: data,
	}
}

//to view the customer data for the choosen bill
export const getbillCustData = (data) => {
	return {
		type: 'GET_BILLS_DATA',
		payload: data,
	}
}

//to clear the bill data
export const clearBillData = () => {
	return {
		type: 'CLEAR_BILL_DATA',
	}
}

//to add lineItems into bill
export const addToCart = (data) => {
	return {
		type: 'ADD_TO_CART',
		payload: data,
	}
}

//to get the added lineItems
export const getCartItems = () => {
	return {
		type: 'DISPLAY_CART',
	}
}

//to clear the cart upon order confirmation
export const clearCart = () => {
	return {
		type: 'CLEAR_CART',
	}
}

//to update the cart
export const updateCart = (data) => {
	return {
		type: 'REMOVE_FROM_CART',
		payload: data,
	}
}
