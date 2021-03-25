export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
  }
}

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload
    case 'LOGOUT_USER':
      return {}
    default:
      return state
  }
}

export default userReducer