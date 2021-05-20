import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetBills } from '../../actions/billingAction'
import { startGetCustomers } from '../../actions/customerAction'
import { startGetProducts } from '../../actions/productAction'
import _ from 'lodash'
import {
	ComposedChart,
	Line,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts'

const Chart = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(startGetProducts())
		dispatch(startGetCustomers())
		dispatch(startGetBills())
	}, [])

	const bill = useSelector((state) => state.bill)
	const products = bill.products
	const customers = bill.customers
	const bills = bill.bills

	// const lineItems = bills.map((ele) => {
	// 	return { length: ele.lineItems.length }
	// })
	const data = [
		...bills,
		{ customer: customers.length, products: products.length },
	]

	return (
		<div>
			{bills.length > 0 ? (
				<div>
					<ComposedChart
						width={700}
						height={500}
						data={data}
						margin={{
							top: 20,
							right: 20,
							bottom: 20,
							left: 20,
						}}>
						<CartesianGrid stroke='#f5f5f5' />
						<XAxis dataKey='' scale='band' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey='total' barSize={20} fill='#413ea0' />
						<Line type='monotone' dataKey='total' stroke='#ff7300' />
					</ComposedChart>
				</div>
			) : (
				<div>No Orders Made</div>
			)}
		</div>
	)
}

export default Chart
