import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startGetBills } from '../../actions/billingAction'
import { startGetCustomers } from '../../actions/customerAction'
import { startGetProducts } from '../../actions/productAction'
import _ from 'lodash'
import BillStats from './BillStats'
import { makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles((themes) => ({
	root: {
		display: 'flex',
	},
}))
const Chart = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startGetProducts())
		dispatch(startGetCustomers())
		dispatch(startGetBills())
	}, [])

	return (
		<div className={classes.root}>
			<Grid container spacing={10}>
				<Grid item xs={10}>
					<BillStats />
				</Grid>
			</Grid>
		</div>
	)
}

export default Chart
