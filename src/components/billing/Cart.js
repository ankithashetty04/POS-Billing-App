import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCart } from '../../actions/billingAction'
import {
	Button,
	Table,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from '@material-ui/core'
import _ from 'lodash'

const Cart = (props) => {
	const { handleIncrease, handleDecrease } = props
	const cart = useSelector((state) => state.bill.cart)

	const dispatch = useDispatch()

	const handleRemove = (id) => {
		const confirm = window.confirm('are you sure')
		if (confirm) {
			dispatch(updateCart(id))
		}
	}

	return (
		<div>
			<div>
				<h1>cart - {cart.length}</h1>
				{cart.length > 0 ? (
					<div>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell align='center'>Sl.NO</TableCell>
									<TableCell align='center'>Product</TableCell>
									<TableCell align='center'>Price</TableCell>
									<TableCell align='center'>Quantity</TableCell>
									<TableCell align='center'></TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{cart.map((ele, i) => {
									return (
										<TableRow key={ele.products._id}>
											<TableCell align='center'>{i + 1}</TableCell>
											<TableCell align='center'>{ele.products.name} </TableCell>
											<TableCell align='center'>
												{ele.products.price * ele.quantity}
											</TableCell>
											<TableCell align='center'>
												<Button
													onClick={() => {
														handleIncrease(ele.products._id)
													}}>
													+
												</Button>
												{ele.quantity}
												<Button
													onClick={() => {
														handleDecrease(ele.products._id)
													}}>
													-
												</Button>
											</TableCell>
											<TableCell align='center'>
												<Button
													variant='contained'
													color='primary'
													onClick={() => {
														handleRemove(ele.products._id)
													}}>
													Remove
												</Button>
											</TableCell>
										</TableRow>
									)
								})}
							</TableBody>
						</Table>
					</div>
				) : (
					<div>No items added</div>
				)}
			</div>
		</div>
	)
}

export default Cart
