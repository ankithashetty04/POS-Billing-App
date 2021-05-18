const initialState = {
	products: [],
	customers: [],
	bills: [],
	customerData: {},
	productsData: {},
	billData: {},
	cart: [],
	addBillData: {},
}

const billingReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CUSTOMERS': {
			return { ...state, customers: [...action.payload] }
		}

		case 'GET_PRODUCTS': {
			return { ...state, products: [...action.payload] }
		}
		case 'ADD_CUSTOMER': {
			return { ...state, customers: [action.payload, ...state.customers] }
		}
		case 'ADD_PRODUCT': {
			return {
				...state,
				products: [action.payload, ...state.products],
			}
		}
		case 'GET_CUSTOMER_DATA': {
			return { ...state, customerData: action.payload }
		}

		case 'CLEAR_CUST_DATA': {
			return { ...state, customerData: {} }
		}

		case 'CLEAR_PROD_DATA': {
			return { ...state, productsData: {} }
		}

		case 'EDIT_CUSTOMER': {
			return {
				...state,
				customers: state.customers.map((cust) => {
					if (cust._id === action.payload._id) {
						return { ...cust, ...action.payload }
					} else {
						return { ...cust }
					}
				}),
			}
		}

		case 'DELETE_CUSTOMER': {
			return {
				...state,
				customers: state.customers.filter((cust) => {
					return cust._id !== action.payload._id
				}),
			}
		}
		case 'GET_PRODUCT_DATA': {
			return { ...state, productsData: action.payload }
		}

		case 'EDIT_PRODUCT': {
			return {
				...state,
				products: state.products.map((prod) => {
					if (prod._id === action.payload._id) {
						return { ...prod, ...action.payload }
					} else {
						return { ...prod }
					}
				}),
			}
		}

		case 'DELETE_PRODUCT': {
			return {
				...state,
				products: state.products.filter((prod) => {
					return prod._id !== action.payload._id
				}),
			}
		}

		case 'ADD_TO_CART': {
			return { ...state, cart: [...state.cart, action.payload] }
		}

		case 'DISPLAY_CART': {
			return { ...state, cart: state.cart }
		}

		case 'REMOVE_FROM_CART': {
			return {
				...state,
				cart: state.cart.filter((ele) => {
					return ele.products._id !== action.payload
				}),
			}
		}
		case 'CLEAR_CART': {
			return { ...state, cart: [] }
		}

		case 'ADD_BILL_DATA': {
			return { ...state, addBillData: { ...action.payload } }
		}

		case 'GET_BILLS_DATA': {
			return {
				...state,
				addBillData: { ...action.payload },
			}
		}

		case 'CLEAR_BILL_DATA': {
			return {
				...state,
				addBillData: {},
			}
		}
		case 'GET_BILLS': {
			//console.log('getbill', action.payload)
			return {
				...state,
				bills: [...action.payload],
			}
		}
		case 'CREATE_BILL': {
			return {
				...state,
				bills: [action.payload, ...state.bills],
			}
		}
		case 'GET_BILL_DATA': {
			return {
				...state,
				billData: action.payload,
			}
		}
		case 'DELETE_BILL': {
			return {
				...state,
				bills: state.bills.filter((bill) => {
					return bill._id !== action.payload._id
				}),
			}
		}
		default: {
			return state
		}
	}
}

export default billingReducer
