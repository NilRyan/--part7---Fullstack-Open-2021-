import { combineReducers } from 'redux'
import notificationReducer from './reducers/notificationReducer' 
import blogsReducer from './reducers/blogsReducer'
const rootReducer = combineReducers({
  blogs: blogsReducer,
  notifications: notificationReducer
})
export default rootReducer;