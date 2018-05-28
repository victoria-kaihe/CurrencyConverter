import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'

import { Container } from '../components/Container'

export default class Home extends Component {
	render() {
		return (
			<Container>
				<StatusBar translucent={false} barStyle="default" />
				<View />
			</Container>
		)
	}
}
