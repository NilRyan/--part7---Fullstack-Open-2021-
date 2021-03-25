export const addNotif = (notif) => {
  return {
    type: 'ADD_NOTIF',
    payload: notif
  }
}
export const addErrorNotif = (notif) => {
  return {
    type: 'ADD_ERROR_NOTIF',
    payload: notif
  }
}


export const removeNotif = (notif) => {
  return {
    type: 'REMOVE_NOTIF'
  }
}

const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NOTIF':
      return {...{...state, success: action.payload}}
    case 'REMOVE_NOTIF':
      return {};
    case 'ADD_ERROR_NOTIF':
      return {...{...state, error: action.payload}}
    default:
      return state
  }
}

export default notificationReducer