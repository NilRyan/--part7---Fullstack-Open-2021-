import React, { useState, useEffect } from 'react'
import usersService from '../services/users'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"

const Users = () => {

  const [users, setUsers] = useState([])
  useEffect(() => {
    usersService.getAll().then(response => setUsers(response))
  },[])

  console.log(users)
  if(users){
    return (
      <Table variant="striped" colorScheme="teal">
      <TableCaption>USERS INFO</TableCaption>
      <Thead>
        <Tr>
          <Th>User</Th>
          <Th isNumeric>Blogs</Th>
        </Tr>
      </Thead>
      
  
      <Tbody>
      {
        users.map((user) => (
          <Tr key={user.id}>
            <Td>{user.name}</Td>
            <Td isNumeric>{user.blogs.length}</Td>
          </Tr>
        ))
        
      }
       
      </Tbody>
    
    </Table>
    )
  }
  else {
    return null
  }
  
}

export default Users
