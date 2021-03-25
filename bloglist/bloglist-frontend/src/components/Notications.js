import React from 'react'
import { useSelector } from 'react-redux'

const Notications = () => {
  const notification = useSelector( state => state.notifications )
  
  if(notification){
    return (
      <div style={{border: "3px solid green"}}>
        {notification}
      </div>
    )
  }
  return null
  
}

export default Notications
