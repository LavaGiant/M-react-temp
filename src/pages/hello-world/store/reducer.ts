import * as actionTypes from './constants'

import { Map } from 'immutable'


const defaultState = Map({
  tipText: 'hello cli' as string,
})

const reducer = (state = defaultState, { type, payload }: StoreGlobal.ActionType) => {
  switch (type) {
    case actionTypes.CHANG_TIP_TEXT: 
      return state.set('tipText', payload as string)
    default:
      return state
  }
}

export default reducer