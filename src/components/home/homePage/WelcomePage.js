import React from 'react'
import { makeStyles, Card, Typography, Grid } from '@material-ui/core'
import './home.css'
import image from './homeImg.png'

const useStyles = makeStyles((theme) => ({
	root: {
		alignContent: 'center',
		marginTop: '15%',
		marginLeft: '5%',
		marginRight: '10%',
		marginBottom: '20px',
	},
	content: {
		border: '2px solid black',
		minWidth: 375,
		width: 200,
		borderRadius: '5px',
	},
	title: {
		padding: '20px',
	},
}))

const WelcomePage = () => {
	const classes = useStyles()
	return (
		<Grid
			className={classes.root}
			container
			spacing={10}
			align='center'
			justify='center'>
			<Grid item xs={6}>
				<img src={image} width='130%' height='100%' />
			</Grid>

			<Grid item xs={6}>
				<Typography className={classes.title} component='h1' variant='h2'>
					Welcome to POS
				</Typography>

				<Card
					className={classes.content}
					style={{ backgroundColor: 'transparent' }}
					variant='outlined'>
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
			</Grid>
		</Grid>
	)
}

export default WelcomePage
