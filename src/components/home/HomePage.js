import React from 'react'
import { makeStyles, Card, Typography } from '@material-ui/core'
import './home.css'

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 375,
		marginBottom: '10px',
		width: 200,
	},
	title: {
		fontSize: 28,
	},
}))

const HomePage = () => {
	const classes = useStyles()
	return (
		<>
			<Card className={classes.root} variant='outlined' align='center'>
				<Typography variant='h5' className='typing' component='h2'>
					To see the demo
				</Typography>
				<Typography variant='h5' className='typing' component='h2'>
					use the credentials
					<br />
					<strong>
						email : ankitha@gmail.com
						<br /> password : secret123
					</strong>
				</Typography>
			</Card>
		</>
	)
}

export default HomePage
