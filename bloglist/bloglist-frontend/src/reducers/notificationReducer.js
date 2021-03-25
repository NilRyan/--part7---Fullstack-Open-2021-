export const addNotif = (notif) => {
  return {
    type: 'ADD_NOTIF',
    payload: notif
  }
}

export const removeNotif = (notif) => {
  return {
    type: 'REMOVE_NOTIF'
  }
}

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADD_NOTIF':
      return action.payload
    case 'REMOVE_NOTIF':
      return '';
    default:
      return state
  }
}

export default notificationReducer