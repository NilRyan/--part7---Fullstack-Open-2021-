import React from 'react'
import { useSelector } from 'react-redux'

const Error = () => {
  const errorMessage = useSelector(state => state.notifications)

  if(errorMessage.error){
    return (
      <div style={{border: "3px solid red"}}>
        {errorMessage.error}
      </div>
    )
  }
  return null
  
}

export default Error
