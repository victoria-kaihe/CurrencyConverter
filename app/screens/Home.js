import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button'
import { LastConverted } from '../components/Text'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '79.74'
const TEMP_CONVERSION_RATE = 0.7974
const TEMP_LAST_CONVERTED = new Date()

class Home extends Component {
	handlePressBaseCurrency = () => {
		console.log('press base')
	}

	handlePressQuoteCurrency = () => {
		console.log('press quote')
	}

	handleTextChange = (text) => {
		console.log('change text', text)
	}

	handleSwapCurrency = () => {
		console.log('press swap currency')
	}

	render() {
		return (
			<Container>
				<StatusBar translucent={false} barStyle="light-content" />
				<Logo />
				<InputWithButton
					buttonText={TEMP_BASE_CURRENCY}
					onPress={this.handlePressBaseCurrency}
					defaultValue={TEMP_BASE_PRICE}
					keyboardType='numeric'
					onChangeText={this.handleTextChange}
				/>
				<InputWithButton
					buttonText={TEMP_QUOTE_CURRENCY}
					editable={false}
					onPress={this.handlePressQuoteCurrency}
					value={TEMP_QUOTE_PRICE}
				/>
				<LastConverted
					base={TEMP_BASE_CURRENCY}
					quote={TEMP_QUOTE_CURRENCY}
					date={TEMP_LAST_CONVERTED}
					conversionRate={TEMP_CONVERSION_RATE}
				/>
				<ClearButton
					text="Reverse Currencies"
					onPress={this.handleSwapCurrency}
				/>
			</Container>
		)
	}
}

export default Home
