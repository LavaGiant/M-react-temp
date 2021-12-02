import * as actionTypes from './constants'
import { NumberPrecision } from '@/utils'

export const handleCountAction = (addCount, way) => (dispatch, getState) => {
  const {add, sub, mul, div, surp, strip} = new NumberPrecision()
  const count = getState().getIn(['counter', 'count'])
  let total = 0
  switch (way){
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

export const changCountAction = count => ({
  type: actionTypes.CHANG_COUNT,
  payload: count
})
