import React from 'react'
import { Button } from '@chakra-ui/react'


const Header = ({user, handleLogout}) => {
  if(user) {
    return (
      <div>
         <h1>BLOGS</h1>
          <p> {user.name} is logged in</p>
          <Button type="button" onClick={handleLogout} colorScheme="teal" size="sm">logout</Button>
      </div>
    )
  } else {
    return null
  }
  
}

export default Header
