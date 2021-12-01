import * as actionTypes from './constants'
import { NumberPrecision } from '@/utils'

export const handleCountAction = (addCount: number, way: string) => (dispatch: any, getState: any) => {
  const { add, sub, mul, div, surp, strip } = new NumberPrecision()
  const count = getState().getIn(['counter', 'count'])
  let total: number = 0
  switch (way) {
    case 'add':
      total = add(count, addCount)
      break
    case 'sub':
      total = sub(count, addCount)
      break
    case 'mul':
      total = mul(count, addCount)
      break
    case 'div':
      total = div(count, addCount)
      break
    case 'surp':
      total = surp(count, addCount)
      break
    default:
      total = strip(count)
  }
  dispatch(changCountAction(total))
}

export const changCountAction = (count: number): StoreGlobal.ActionType => ({
  type: actionTypes.CHANG_COUNT,
  payload: count
})
