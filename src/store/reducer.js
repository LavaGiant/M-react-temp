import { combineReducers } from 'redux-immutable'

const reducers = {}
const files = require.context('@/pages', true, /store\/index\.js$/)
files.keys().forEach((key) => {
  const reducerPath = key.replace('./', '')
  const reducerName = reducerPath.split('/store/')[0]
  reducers[reducerName] = require(`@/pages/${reducerPath}`).reducer
})
const mainReducer = combineReducers(reducers)

export default mainReducer
