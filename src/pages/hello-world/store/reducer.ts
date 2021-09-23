import * as actionTypes from './constants'

import { Map } from 'immutable'

type stateType = Map<string, any>

const defaultState: stateType = Map({
  tipText: 'hello cli' as string,
})

const reducer = <T>(state: stateType = defaultState, { type, value }: StoreGlobal.ActionType<T>): stateType => {
  switch (type) {
    case actionTypes.CHANG_TIP_TEXT: 
      return state.set('tipText', value)
    default:
      return state
  }
}

export default reducer