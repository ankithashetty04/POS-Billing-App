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
	Typography,
} from '@material-ui/core'
import _ from 'lodash'
import swal from 'sweetalert'

const Cart = (props) => {
	const { handleIncrease, handleDecrease } = props
	const cart = useSelector((state) => state.bill.cart)
	const dispatch = useDispatch()

	const handleRemove = (id) => {
		swal({
			title: 'Are you sure?',
			text: 'Remove this Item from Cart?',
			icon: 'warning',
			buttons: [true, 'Yes'],
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				dispatch(updateCart(id))
				swal('Item Removed Successfully!', '', {
					icon: 'success',
				})
			}
		})
	}

	const totalAmount = () => {
		let total = 0
		cart.forEach((ele) => (total += ele.products.price * ele.quantity))
		return total
	}

	return (
		<div>
			<div>
				<Typography variant='h4'>
					Cart - {cart.length} | Total - {totalAmount()}
				</Typography>
				<Typography variant='h4'></Typography>
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
														handleDecrease(ele.products._id)
													}}>
													-
												</Button>
												{ele.quantity}
												<Button
													onClick={() => {
														handleIncrease(ele.products._id)
													}}>
													+
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
