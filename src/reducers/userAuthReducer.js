const initialState = {
	register: {},
	login: {},
	profile: {},
}

const userAuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'USER_REGISTER': {
			return { ...state, register: { ...action.payload } }
		}
		case 'USER_LOGIN': {
			return { ...state, login: { ...action.payload } }
		}

		case 'USER_INFO': {
			return { ...state, profile: { ...action.payload } }
		}

		case 'USER_LOGOUT': {
			return initialState
		}

		default: {
			return { ...state }
		}
	}
}

export default userAuthReducer
