import axios from 'axios'

// //To get all customers data
// export const startGetCustomers = () => {
// 	return (dispatch) => {
// 		axios
// 			.get('http://dct-billing-app.herokuapp.com/api/customers', {
// 				headers: {
// 					Authorization: localStorage.getItem('token'),
// 				},
// 			})
// 			.then((response) => {
// 				const customersData = response.data
// 				dispatch(getCustomers(customersData))
// 			})
// 			.catch((error) => {
// 				alert(error.message)
// 			})
// 	}
// }

// export const getCustomers = (data) => {
// 	return {
// 		type: 'GET_CUSTOMERS',
// 		payload: data,
// 	}
// }

// //To add new customer
// export const startAddCustomers = (formData) => {
// 	return (dispatch) => {
// 		axios
// 			.post('http://dct-billing-app.herokuapp.com/api/customers', formData, {
// 				headers: {
// 					Authorization: localStorage.getItem('token'),
// 				},
// 			})
// 			.then((response) => {
// 				const data = response.data

// 				dispatch(addCustomer(data))
// 				alert('Customers added succesfully')
// 			})
// 			.catch((error) => {
// 				alert(error.message)
// 			})
// 	}
// }

// export const addCustomer = (data) => {
// 	return {
// 		type: 'ADD_CUSTOMER',
// 		payload: data,
// 	}
// }

// //To get the selected customer data
// export const startGetCustomerData = (id) => {
// 	return (dispatch) => {
// 		axios
// 			.get(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, {
// 				headers: {
// 					Authorization: localStorage.getItem('token'),
// 				},
// 			})
// 			.then((response) => {
// 				const data = response.data
// 				dispatch(getCustomerData(data))
// 			})
// 			.catch((error) => {
// 				alert(error.message)
// 			})
// 	}
// }

// export const getCustomerData = (data) => {
// 	return {
// 		type: 'GET_CUSTOMER_DATA',
// 		payload: data,
// 	}
// }

// //To Edit the customer data
// export const startEditCustomerData = (id, formData) => {
// 	return (dispatch) => {
// 		console.log('formdata', formData)
// 		axios
// 			.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, formData, {
// 				headers: {
// 					Authorization: localStorage.getItem('token'),
// 				},
// 			})
// 			.then((response) => {
// 				const data = response.data
// 				dispatch(editCustomerData(data))
// 				alert('Data updated Succesfully')
// 			})
// 			.catch((error) => {
// 				alert(error.message)
// 			})
// 	}
// }

// export const editCustomerData = (data) => {
// 	return {
// 		type: 'EDIT_CUSTOMER',
// 		payload: data,
// 	}
// }

// //to clear the customer data upon edit
// export const clearCustData = () => {
// 	return {
// 		type: 'CLEAR_CUST_DATA',
// 	}
// }

// //To delete the customer data
// export const startDeleteCustomer = (id) => {
// 	return (dispatch) => {
// 		axios
// 			.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, {
// 				headers: {
// 					Authorization: localStorage.getItem('token'),
// 				},
// 			})
// 			.then((response) => {
// 				const data = response.data
// 				alert('customer deleted succesfully')
// 				dispatch(deleteCustomer(data))
// 			})
// 			.catch((error) => {
// 				alert(error.message)
// 			})
// 	}
// }

// export const deleteCustomer = (data) => {
// 	return {
// 		type: 'DELETE_CUSTOMER',
// 		payload: data,
// 	}
// }

// //To get all products data
// export const startGetProducts = () => {
// 	return (dispatch) => {
// 		axios
// 			.get('http://dct-billing-app.herokuapp.com/api/products', {
// 				headers: {
// 					Authorization: localStorage.getItem('token'),
// 				},
// 			})
// 			.then((response) => {
// 				const productsData = response.data
// 				dispatch(getProducts(productsData))
// 			})
// 			.catch((error) => {
// 				alert(error.message)
// 			})
// 	}
// }

// export const getProducts = (data) => {
// 	return {
// 		type: 'GET_PRODUCTS',
// 		payload: data,
// 	}
// }

// //To add new product
// export const startAddProduct = (formData) => {
// 	return (dispatch) => {
// 		axios
// 			.post('http://dct-billing-app.herokuapp.com/api/products', formData, {
// 				headers: {
// 					Authorization: localStorage.getItem('token'),
// 				},
// 			})
// 			.then((response) => {
// 				const data = response.data

// 				dispatch(addProduct(data))
// 				alert('Product added succesfully')
// 			})
// 			.catch((error) => {
// 				alert(error.message)
// 			})
// 	}
// }

// export const addProduct = (data) => {
// 	return {
// 		type: 'ADD_PRODUCT',
// 		payload: data,
// 	}
// }

// //to get selected product data
// export const startGetProductData = (id) => {
// 	return (dispatch) => {
// 		axios
// 			.get(`http://dct-billing-app.herokuapp.com/api/products/${id}`, {
// 				headers: {
// 					Authorization: localStorage.getItem('token'),
// 				},
// 			})
// 			.then((response) => {
// 				const data = response.data
// 				dispatch(getProductData(data))
// 			})
// 			.catch((error) => {
// 				alert(error.message)
// 			})
// 	}
// }

// export const getProductData = (data) => {
// 	return {
// 		type: 'GET_PRODUCT_DATA',
// 		payload: data,
// 	}
// }

// //to edit the selected product data
// export const startEditProductsData = (id, formData) => {
// 	return (dispatch) => {
// 		console.log('formdata', formData)
// 		axios
// 			.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`, formData, {
// 				headers: {
// 					Authorization: localStorage.getItem('token'),
// 				},
// 			})
// 			.then((response) => {
// 				const data = response.data
// 				dispatch(editProductData(data))
// 				alert('Data updated Succesfully')
// 			})
// 			.catch((error) => {
// 				alert(error.message)
// 			})
// 	}
// }

// export const editProductData = (data) => {
// 	return {
// 		type: 'EDIT_PRODUCT',
// 		payload: data,
// 	}
// }

// //to clear the product data upon edited
// export const clearProdData = () => {
// 	return {
// 		type: 'CLEAR_PROD_DATA',
// 	}
// }

// //to delete a product data
// export const startDeleteProduct = (id) => {
// 	return (dispatch) => {
// 		axios
// 			.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`, {
// 				headers: {
// 					Authorization: localStorage.getItem('token'),
// 				},
// 			})
// 			.then((response) => {
// 				const data = response.data
// 				alert('Product deleted succesfully')
// 				dispatch(deleteProduct(data))
// 			})
// 			.catch((error) => {
// 				alert(error.message)
// 			})
// 	}
// }

// export const deleteProduct = (data) => {
// 	return {
// 		type: 'DELETE_PRODUCT',
// 		payload: data,
// 	}
// }

//to get all bills data
export const startGetBills = () => {
	return (dispatch) => {
		axios
			.get('http://dct-billing-app.herokuapp.com/api/bills', {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(getBills(data))
			})
			.catch((error) => {
				alert(error.message)
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
			.post('http://dct-billing-app.herokuapp.com/api/bills', formData, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(createBill(data))
				alert('Bill Generated Sucessfully')
			})
			.catch((error) => {
				alert(error.message)
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
			.get(`http://dct-billing-app.herokuapp.com/api/bills/${id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(getBillData(data))
			})
			.catch((error) => {
				alert(error.message)
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
			.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(deleteBill(data))
			})
			.catch((error) => {
				alert(error.message)
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
