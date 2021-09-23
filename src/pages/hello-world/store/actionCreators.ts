import * as actionTypes from './constants'

export const changeTipTextAction = (tip: string): StoreGlobal.ActionType<string> => ({
  type: actionTypes.CHANG_TIP_TEXT,
  value: tip
})
