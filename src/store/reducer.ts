import { AnyAction, Reducer } from 'redux'
import { combineReducers } from 'redux-immutable'

import {reducer as helloReducer} from '@/pages/hello-world/store'

const mainReducer:Reducer<any, AnyAction> = combineReducers({
  hello: helloReducer
})

export default mainReducer
