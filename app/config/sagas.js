import { takeEvery, select, call } from 'redux-saga/effects'

import {
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY
} from '../actions/currencies'

const getLatestRate = currency => fetch(`https://fixer.handlebarlabs.com/latest?base=${currency}`)

const fetchLatestConversionRates = function* (action) {
  try {
    let currency = action.currency
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency)
    }
    const response = yield call(getLatestRate, currency)
    const result = yield response.json()
  } catch (e) {
    console.log('Saga error', e)
  }
}

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates)
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates)
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates)
}

export default rootSaga;
