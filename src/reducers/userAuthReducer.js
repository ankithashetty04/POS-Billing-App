const initialState = {
	register: {},
	login: {},
	profile: {},
}

const userAuthReducer = (state = initialState, action) => {
	switch (action.type) {
		/*-------------user registration functionality----------- */
		//to store the user registration response
		case 'USER_REGISTER': {
			return { ...state, register: { ...action.payload } }
		}

		//to store the login token in the store
		case 'USER_LOGIN': {
			return { ...state, login: { ...action.payload } }
		}

		//to store the logged in user info
		case 'USER_INFO': {
			return { ...state, profile: { ...action.payload } }
		}

		//to clear the user info from the store
		case 'USER_LOGOUT': {
			return initialState
		}

		//returns initialState
		default: {
			return { ...state }
		}
	}
}

export default userAuthReducer
