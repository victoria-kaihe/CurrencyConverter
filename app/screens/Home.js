import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { StatusBar, KeyboardAvoidingView } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button'
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '79.74'
const TEMP_CONVERSION_RATE = 0.7974
const TEMP_LAST_CONVERTED = new Date()

class Home extends Component {
	static propTypes = {
		navigation: PropTypes.object
	}
	handlePressBaseCurrency = () => {
		this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' })
	}

	handlePressQuoteCurrency = () => {
		this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' })
	}

	handleTextChange = (amount) => {
		//TODO MAKE THIS WORK
		console.log(changeCurrencyAmount(amount))
	}

	handleSwapCurrency = () => {
		//MAKE THIS ACTUALLY WORK
		console.log(swapCurrency())
	}

	handleOptionsPress = () => {
		this.props.navigation.navigate('Options')
	}

	render() {
		return (
			<Container>
				<StatusBar translucent={false} barStyle="light-content" />
				<Header
					onPress={this.handleOptionsPress}
				/>
				<KeyboardAvoidingView behavior='padding'>
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
				</KeyboardAvoidingView>
			</Container>
		)
	}
}

export default Home
