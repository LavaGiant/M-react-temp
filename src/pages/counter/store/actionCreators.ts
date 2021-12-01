import * as actionTypes from './constants'

export const handleCountAction = (addCount:number, way:string) => (dispatch:any, getState:any) => {
  const count = getState().getIn(['counter', 'count'])
  const total = way === 'add' ? count + addCount : count - addCount
  dispatch(changCountAction(total))
}

export const changCountAction = (count: number): StoreGlobal.ActionType => ({
  type: actionTypes.CHANG_COUNT,
  payload: count
})
