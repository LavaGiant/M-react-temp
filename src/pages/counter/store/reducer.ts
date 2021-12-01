import * as actionTypes from './constants'

import { Map } from 'immutable'


const defaultState = Map({
  count: 0 as number,
})

const reducer = (state = defaultState, { type, payload }: StoreGlobal.ActionType) => {
  switch (type) {
    case actionTypes.CHANG_COUNT: 
      return state.set('count', payload as number)
    default:
      return state
  }
}

export default reducer