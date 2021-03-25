import { combineReducers } from 'redux'
import notificationReducer from './reducers/notificationReducer' 
import blogsReducer from './reducers/blogsReducer'
import userReducer from './reducers/userReducer';
const rootReducer = combineReducers({
  blogs: blogsReducer,
  notifications: notificationReducer,
  user: userReducer
})
export default rootReducer;