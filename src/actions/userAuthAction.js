import axios from 'axios'
import swal from 'sweetalert'

//User Registration
export const startRegisterUser = (formData) => {
	return (dispatch) => {
		axios
			.post(' https://dct-billing-app.herokuapp.com/api/users/register', formData)
			.then((response) => {
				const registerData = response.data

				if (Object.keys(registerData).includes('errmsg')) {
					registerData.keyValue.username
						? alert(`username '${registerData.keyValue.username}' already exists`)
						: alert(`email '${registerData.keyValue.email}' already exists`)
				} else {
					swal({
						title: 'Registered Succesfully!',
						icon: 'success',
						button: 'ok',
					})
					dispatch(registerUser(registerData))
				}
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

export const registerUser = (userData) => {
	return {
		type: 'USER_REGISTER',
		payload: userData,
	}
}

//User Login
export const startLoginUser = (formData) => {
	return (dispatch) => {
		axios
			.post('https://dct-billing-app.herokuapp.com/api/users/login', formData)
			.then((response) => {
				const loginData = response.data
				if (Object.keys(loginData).includes('errors')) {
					swal({
						title: `${loginData.errors}`,
						icon: 'error',
						button: 'ok',
					})
				} else {
					swal({
						title: 'Succesfully logged in',
						icon: 'success',
						button: 'ok',
					})

					localStorage.setItem('token', `Bearer ${loginData.token}`)
					dispatch(loginUser(loginData))
				}
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

export const loginUser = (loginData) => {
	return {
		type: 'USER_LOGIN',
		payload: loginData,
	}
}

//fetching logged in user account info
export const startGetUserInfo = () => {
	return (dispatch) => {
		axios
			.get('https://dct-billing-app.herokuapp.com/api/users/account', {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((response) => {
				const data = response.data
				dispatch(userInfo(data))
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

//logged in user info
export const userInfo = (info) => {
	return {
		type: 'USER_INFO',
		payload: info,
	}
}

//logout user
export const logoutUser = () => {
	return {
		type: 'USER_LOGOUT',
	}
}
