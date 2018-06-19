import { takeEvery } from 'redux-saga/effects'

// 1. swap currency
// 2. change base currency happens
// 3. upon initial app load

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION } from '../actions/currencies'

const fetchLatestConversionRates = function* (action) {
  console.log('TODO:UPDATE THINGS', action)
  yield
}

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates)
}

export default rootSaga
