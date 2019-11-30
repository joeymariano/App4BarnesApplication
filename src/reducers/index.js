import { combineReducers } from 'redux'
import herosReducer from './herosReducer'

const rootReducer = combineReducers({ herosReducer: herosReducer })

export default rootReducer