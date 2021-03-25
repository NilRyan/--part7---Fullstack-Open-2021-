import React from 'react'
import { useSelector } from 'react-redux'

const Notications = () => {
  const notification = useSelector( state => state.notifications )

  if(notification.success){
    return (
      <div style={{border: "3px solid green"}}>
        {notification.success}
      </div>
    )
  }
  return null
  
}

export default Notications
