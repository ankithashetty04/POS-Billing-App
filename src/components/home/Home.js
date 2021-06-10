import React from 'react'
import DashBoardContainer from '../dashboard/DashBoardContainer'

import './homePage/home.css'

import HomePage from './homePage/HomePage'

const Home = (props) => {
	const { userLoggedIn } = props
	return (
		<div>
			{userLoggedIn ? (
				<>
					<DashBoardContainer />
				</>
			) : (
				<>
					<HomePage />
				</>
			)}
		</div>
	)
}

export default Home
