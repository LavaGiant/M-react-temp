import * as actionTypes from './constants'

import { Map } from 'immutable'


const defaultState = Map({
  count: 0,
})

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANG_COUNT: 
      return state.set('count', payload)
    default:
      return state
  }
}

export default reducer