import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetUserInfo } from '../../actions/userAuthAction'
import {
	makeStyles,
	Grid,
	Card,
	CardContent,
	Typography,
} from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		minHeight: '80vh',
	},
	card: {
		//minWidth: '500v',
		minWidth: 285,
		width: 700,
	},
	title: {
		fontSize: 30,
	},
})

const Profile = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startGetUserInfo())
	}, [])

	const userAuth = useSelector((state) => state.userAuth.profile)

	return (
		<div>
			<Grid
				container
				spacing={0}
				direction='column'
				alignItems='center'
				justify='center'
				className={classes.root}>
				<Grid item xs={12} alignItems='center'>
					<Card variant='outlined' className={classes.card}>
						<CardContent align='center'>
							<Typography variant='h3' component='h1' color='primary' gutterBottom>
								PROFILE
							</Typography>

							<Typography variant='h4' component='h1'>
								Username - {userAuth.username}
							</Typography>
							<Typography variant='h4' component='h1'>
								Email-id - {userAuth.email}
							</Typography>
							<Typography variant='h4' component='h1'>
								Business Name - {userAuth.businessName}
							</Typography>
							<Typography variant='h4' component='h1'>
								Address - {userAuth.address}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	)
}

export default Profile
