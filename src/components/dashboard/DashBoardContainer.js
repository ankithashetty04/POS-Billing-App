import React from 'react'
import Chart from './Chart'
import Dashboard from './Dashboard'
import { Grid, Box, Typography } from '@material-ui/core'

const DashBoardContainer = () => {
	return (
		<div>
			<Typography variant='h3'>Dashboard</Typography>
			<br />

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
