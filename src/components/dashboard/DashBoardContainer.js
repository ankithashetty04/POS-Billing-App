import React from 'react'
import Chart from './Chart'
import Dashboard from './Dashboard'
import { makeStyles, Grid, Box, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '10px',
	},
}))

const DashBoardContainer = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<h1>Dashboard</h1>
			<Box component='span' m={1}>
				<Grid container spacing>
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