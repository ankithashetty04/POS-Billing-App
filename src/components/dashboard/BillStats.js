import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetBills } from '../../actions/billingAction'
import { startGetCustomers } from '../../actions/customerAction'
import { startGetProducts } from '../../actions/productAction'
import _ from 'lodash'
import moment from 'moment'
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
import { Typography } from '@material-ui/core'

const BillStats = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startGetBills())
	}, [])

	const bill = useSelector((state) => state.bill)

	const bills = bill.bills

	const sortedActivities = bills.sort((a, b) => b.date - a.date).slice(-5)

	sortedActivities.map((ele) => {
		return moment(ele.date).format('l')
	})

	const data = [...sortedActivities]

	return (
		<div>
			{bills.length > 0 ? (
				<div>
					<Typography component='h1' variant='h3'>
						Last Five Order Stats
					</Typography>
					<ComposedChart
						width={800}
						height={500}
						data={data}
						margin={{
							top: 20,
							right: 20,
							bottom: 20,
							left: 20,
						}}>
						<CartesianGrid stroke='#f5f5f5' />
						<XAxis
							dataKey='date'
							type='category'
							domain={['dataMin', 'dataMax']}
							tickFormatter={(tick) => moment(tick).format('ll')}
							scale='band'
						/>
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey='total' barSize={20} fill='#413ea0' />
						<Line type='monotone' dataKey='total' stroke='#ff7300' />
					</ComposedChart>
				</div>
			) : (
				<div
					margin={{
						top: 20,
						right: 20,
						bottom: 20,
						left: 20,
					}}>
					No Orders Made
				</div>
			)}
		</div>
	)
}

export default BillStats
