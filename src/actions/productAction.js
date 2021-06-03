import axios from 'axios'
import swal from 'sweetalert'
//To get all products data
export const startGetProducts = () => {
	return (dispatch) => {
		axios
			.get('https://dct-billing-app.herokuapp.com/api/products', {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const productsData = response.data
				dispatch(getProducts(productsData))
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

export const getProducts = (data) => {
	return {
		type: 'GET_PRODUCTS',
		payload: data,
	}
}

//To add new product
export const startAddProduct = (formData) => {
	return (dispatch) => {
		axios
			.post('https://dct-billing-app.herokuapp.com/api/products', formData, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data

				dispatch(addProduct(data))
				swal({
					title: 'Product added succesfully',
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

export const addProduct = (data) => {
	return {
		type: 'ADD_PRODUCT',
		payload: data,
	}
}

//to get selected product data
export const startGetProductData = (id) => {
	return (dispatch) => {
		axios
			.get(`https://dct-billing-app.herokuapp.com/api/products/${id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(getProductData(data))
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

export const getProductData = (data) => {
	return {
		type: 'GET_PRODUCT_DATA',
		payload: data,
	}
}

//to edit the selected product data
export const startEditProductsData = (id, formData) => {
	return (dispatch) => {
		console.log('formdata', formData)
		axios
			.put(`https://dct-billing-app.herokuapp.com/api/products/${id}`, formData, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(editProductData(data))
				swal({
					title: 'Data updated Succesfully',
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

export const editProductData = (data) => {
	return {
		type: 'EDIT_PRODUCT',
		payload: data,
	}
}

//to clear the product data upon edited
export const clearProdData = () => {
	return {
		type: 'CLEAR_PROD_DATA',
	}
}

//to delete a product data
export const startDeleteProduct = (id) => {
	return (dispatch) => {
		axios
			.delete(`https://dct-billing-app.herokuapp.com/api/products/${id}`, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(deleteProduct(data))
				swal({
					title: 'Product deleted succesfully',
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

export const deleteProduct = (data) => {
	return {
		type: 'DELETE_PRODUCT',
		payload: data,
	}
}
