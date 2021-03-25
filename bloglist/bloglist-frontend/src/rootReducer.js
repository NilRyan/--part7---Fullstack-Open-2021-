import { combineReducers } from 'redux'
import notificationReducer from './reducers/notificationReducer' 

const rootReducer = combineReducers({
  notifications: notificationReducer
})
export default rootReducer;