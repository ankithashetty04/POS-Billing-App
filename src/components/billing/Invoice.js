import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import moment from 'moment'

import {
	makeStyles,
	CssBaseline,
	Paper,
	Button,
	Link,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Grid,
} from '@material-ui/core'
import html2pdf from 'html2pdf.js'

const useStyles = makeStyles((theme) => ({
	layout: {
		height: '100vh',
		overflowX: 'auto',
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	listItem: {
		padding: theme.spacing(1, 0),
	},
	total: {
		fontWeight: 700,
	},
	title: {
		marginTop: theme.spacing(2),
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}))

const Invoice = (props) => {
	const classes = useStyles()
	const { handleToggle } = props

	const stateValue = useSelector((state) => state.bill)
	const billData = useSelector((state) => state.bill.billData)
	const userData = useSelector((state) => state.userAuth.profile)

	const products = stateValue.products
	const customer = stateValue.customers

	const customerName = _.find(customer, { _id: billData.customer })

	const handleInvoiceDownload = () => {
		var opt = {
			margin: 0,
			html2canvas: { scale: 3 },
			jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
		}
		let invoice = document.getElementById('invoice')
		html2pdf()
			.from(invoice)
			.set(opt)
			.save(`Bill-${customerName.name}-${moment(billData.createdAt).format('l')}`)
	}

	return (
		<div>
			<React.Fragment>
				<CssBaseline />
				<Grid container spacing={10} style={{ marginTop: '20px' }}>
					<Grid item xs={5}>
						<Button
							style={{ marginLeft: '20%' }}
							variant='contained'
							color='secondary'
							align='right'
							onClick={() => {
								handleToggle(false)
							}}>
							&times;
						</Button>
					</Grid>
					<Grid item xs={5}>
						<Button
							onClick={handleInvoiceDownload}
							variant='contained'
							style={{
								backgroundColor: 'green',
								color: 'white',
								marginBottom: '1em',
							}}>
							Download
						</Button>
					</Grid>
				</Grid>
				<main className={classes.layout}>
					<Paper className={classes.paper} id='invoice'>
						<Typography
							gutterBottom
							component='h1'
							variant='h4'
							align='center'
							className={classes.title}>
							{userData.businessName.toUpperCase()}
						</Typography>
						<Typography>
							Date : {moment(billData.createdAt).format('MMMM Do YYYY')}
						</Typography>

						<Typography gutterBottom component='h1' variant='h4' align='center'>
							Invoice
						</Typography>

						<Grid item container direction='column' xs={12}>
							<Grid container spacing={10}>
								<Grid align='justify' item xs={12} sm={6}>
									<Typography variant='h6' className={classes.title}>
										Employee Details
									</Typography>
									<Typography className={classes.title}>
										Name:
										{userData.username[0].toUpperCase() + userData.username.slice(1)}
									</Typography>
									<Typography className={classes.title}>
										Email:
										{userData.email}
									</Typography>
								</Grid>

								<Grid item container direction='column' align='justify' xs={12} sm={5}>
									<Typography variant='h6' className={classes.title}>
										Customer Details
									</Typography>
									<Typography className={classes.title}>
										Name:{customerName.name[0].toUpperCase() + customerName.name.slice(1)}
									</Typography>
									<Typography className={classes.title}>
										Mobile:
										{customerName.mobile}
									</Typography>
								</Grid>
							</Grid>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<Typography gutterBottom></Typography>
								</Grid>
							</Grid>
						</Grid>

						<Typography variant='h6' gutterBottom align='center'>
							Order summary
						</Typography>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>SL.No</TableCell>
									<TableCell>Product</TableCell>
									<TableCell>Price</TableCell>
									<TableCell>Quantity</TableCell>
									<TableCell>SubTotal</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{billData.lineItems.map((item, i) => {
									return (
										<TableRow key={item._id}>
											<TableCell>{i + 1}</TableCell>
											{products.map((ele) => {
												if (ele._id === item.product) {
													return (
														<TableCell>
															{ele.name[0].toUpperCase() + ele.name.slice(1)}
														</TableCell>
													)
												}
											})}

											<TableCell>{item.price}</TableCell>
											<TableCell>{item.quantity}</TableCell>
											<TableCell>{item.subTotal}</TableCell>
										</TableRow>
									)
								})}
							</TableBody>
						</Table>
						<Typography
							gutterBottom
							align='right'
							variant='subtitle1'
							className={classes.total}>
							Total : Rs.{billData.total}
						</Typography>

						<Typography variant='body2' color='textSecondary' align='center'>
							{'Copyright © '}
							<Link color='inherit' href='#'>
								{userData.businessName}
							</Link>{' '}
							{new Date().getFullYear()}
							{'.'}
						</Typography>
					</Paper>
				</main>
			</React.Fragment>
		</div>
	)
}

export default Invoice
