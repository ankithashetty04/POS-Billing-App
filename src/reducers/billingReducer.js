const initialState = {
	products: [],
	customers: [],
	bills: [],
	customerData: {},
	productsData: {},
	billData: {},
	addBillData: {},
	cart: [],
}

const billingReducer = (state = initialState, action) => {
	switch (action.type) {
		/* ---------for customers actions--------- */

		//to add new customer data
		case 'ADD_CUSTOMER': {
			return { ...state, customers: [action.payload, ...state.customers] }
		}

		//to get all the existing customers data
		case 'GET_CUSTOMERS': {
			return { ...state, customers: [...action.payload] }
		}

		//to get data of selected customer
		case 'GET_CUSTOMER_DATA': {
			return { ...state, customerData: action.payload }
		}

		//to edit the selected customer
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

		//to delete the selected customer
		case 'DELETE_CUSTOMER': {
			return {
				...state,
				customers: state.customers.filter((cust) => {
					return cust._id !== action.payload._id
				}),
			}
		}

		//to clear the customer data from store object used for edit functionality
		case 'CLEAR_CUST_DATA': {
			return { ...state, customerData: {} }
		}

		/*----------------------for products actions----------------------*/

		//to add new product data
		case 'ADD_PRODUCT': {
			return {
				...state,
				products: [action.payload, ...state.products],
			}
		}

		//to get all the products data
		case 'GET_PRODUCTS': {
			return { ...state, products: [...action.payload] }
		}

		//to get selected product data
		case 'GET_PRODUCT_DATA': {
			return { ...state, productsData: action.payload }
		}

		//to edit the selected product data
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

		//to delete the selected product data
		case 'DELETE_PRODUCT': {
			return {
				...state,
				products: state.products.filter((prod) => {
					return prod._id !== action.payload._id
				}),
			}
		}

		//to clear the product data from store object used for edit functionality
		case 'CLEAR_PROD_DATA': {
			return { ...state, productsData: {} }
		}

		/*---------------Billing functionality---------------*/

		//to add products into the lineItems

		//to add items into cart
		case 'ADD_TO_CART': {
			return { ...state, cart: [...state.cart, action.payload] }
		}

		//to display the items in the cart
		case 'DISPLAY_CART': {
			return { ...state, cart: state.cart }
		}

		//to remove the data from the cart
		case 'REMOVE_FROM_CART': {
			return {
				...state,
				cart: state.cart.filter((ele) => {
					return ele.products._id !== action.payload
				}),
			}
		}

		//to clear all the items from the cart
		case 'CLEAR_CART': {
			return { ...state, cart: [] }
		}

		//to add customer data into the invoice
		case 'ADD_BILL_DATA': {
			return { ...state, addBillData: { ...action.payload } }
		}

		//to get all the bills data
		case 'GET_BILLS_DATA': {
			return {
				...state,
				addBillData: { ...action.payload },
			}
		}

		//to clear the bill data
		case 'CLEAR_BILL_DATA': {
			return {
				...state,
				addBillData: {},
			}
		}

		//to get the data of all bills from the server
		case 'GET_BILLS': {
			return {
				...state,
				bills: [...action.payload],
			}
		}

		//to generate the bill upon order confirmation
		case 'CREATE_BILL': {
			return {
				...state,
				bills: [action.payload, ...state.bills],
			}
		}

		//to get the data of the selected bill
		case 'GET_BILL_DATA': {
			return {
				...state,
				billData: action.payload,
			}
		}

		//to delete the data of the selected bill
		case 'DELETE_BILL': {
			return {
				...state,
				bills: state.bills.filter((bill) => {
					return bill._id !== action.payload._id
				}),
			}
		}

		//returns the initialstate
		default: {
			return { ...state }
		}
	}
}

export default billingReducer
