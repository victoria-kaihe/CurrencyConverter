import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { StatusBar, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button'
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies'

const TEMP_CONVERSION_RATE = 0.7974
const TEMP_LAST_CONVERTED = new Date()

class Home extends Component {
	static propTypes = {
		navigation: PropTypes.object,
		dispatch: PropTypes.func,
		baseCurrency: PropTypes.string,
		quoteCurrency: PropTypes.string,
		amount: PropTypes.number,
		conversionRate: PropTypes.number
	}
	handlePressBaseCurrency = () => {
		this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' })
	}

	handlePressQuoteCurrency = () => {
		this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' })
	}

	handleTextChange = (amount) => {
		this.props.dispatch(changeCurrencyAmount(amount))
	}

	handleSwapCurrency = () => {
		this.props.dispatch(swapCurrency())
	}

	handleOptionsPress = () => {
		this.props.navigation.navigate('Options')
	}

	render() {
		let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2)

		return (
			<Container>
				<StatusBar translucent={false} barStyle="light-content" />
				<Header
					onPress={this.handleOptionsPress}
				/>
				<KeyboardAvoidingView behavior='padding'>
					<Logo />
					<InputWithButton
						buttonText={this.props.baseCurrency}
						onPress={this.handlePressBaseCurrency}
						defaultValue={this.props.amount.toString()}
						keyboardType='numeric'
						onChangeText={this.handleTextChange}
					/>
					<InputWithButton
						buttonText={this.props.quoteCurrency}
						editable={false}
						onPress={this.handlePressQuoteCurrency}
						value={quotePrice}
					/>
					<LastConverted
						base={this.props.baseCurrency}
						quote={this.props.quoteCurrency}
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

const mapStateToProps = (state) => {
	const baseCurrency = state.currencies.baseCurrency
	const quoteCurrency = state.currencies.quoteCurrency
	const amount = state.currencies.amount
	const conversionSelector = state.currencies.conversions[baseCurrency] || {}
	const rates = conversionSelector.rates || {}

	return {
		baseCurrency,
		quoteCurrency,
		amount,
		conversionRate: rates[quoteCurrency] || 0
	}
}

export default connect(mapStateToProps)(Home)
