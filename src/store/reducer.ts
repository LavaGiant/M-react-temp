import { AnyAction, Reducer } from 'redux'
import { combineReducers } from 'redux-immutable'

interface ReducersType {
  [key: string]: any
}

const reducers: ReducersType = {}
// @ts-ignore
const files = require.context('@/pages', true, /store\/index\.ts$/)
files.keys().forEach((key: string) => {
  const reducerPath = key.replace('./', '')
  const reducerName = reducerPath.split('/store/')[0]
  reducers[reducerName] = require(`@/pages/${reducerPath}`).reducer
})
const mainReducer: Reducer<any, AnyAction> = combineReducers(reducers)

export default mainReducer
