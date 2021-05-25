import React from 'react'
import Chart from './Chart'
import Dashboard from './Dashboard'
import { makeStyles, Grid, Box } from '@material-ui/core'

const useStyles = makeStyles(() => ({
	root: {
		padding: '10px',
	},
}))

const DashBoardContainer = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<h1>Dashboard</h1>
			<Box component='span'>
				<Grid container spacing={10}>
					<Grid item xs={4}>
						<Dashboard />
					</Grid>

					<Grid item xs={6}>
						<Chart />
					</Grid>
				</Grid>
			</Box>
		</div>
	)
}

export default DashBoardContainer
