import * as actionTypes from './constants'

export const changeTipTextAction = (tip: string): StoreGlobal.ActionType => ({
  type: actionTypes.CHANG_TIP_TEXT,
  payload: tip
})
