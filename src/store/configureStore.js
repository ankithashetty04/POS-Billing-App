import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import billingReducer from '../reducers/billingReducer'
import userAuthReducer from '../reducers/userAuthReducer'

const configureStore = () => {
	const store = createStore(
		combineReducers({
			userAuth: userAuthReducer,
			bill: billingReducer,
		}),
		composeWithDevTools(applyMiddleware(thunk))
	)
	return store
}

export default configureStore
