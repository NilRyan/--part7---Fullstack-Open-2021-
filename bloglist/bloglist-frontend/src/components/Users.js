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
import { Link } from 'react-router-dom'

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
            <Td><Link to={`/users/${user.id}`}>{user.name}</Link></Td>
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

export const UserBlog = ({blogs}) => {
  
  if(blogs.length > 0){
    console.log('blogs',blogs)
    return (
      <div>
        <h1> <strong>{blogs[0].user.name} </strong></h1>
        <h1>ADDED BLOGS</h1>
        {
          blogs.map((blog) => {
            return <li key={blog.id}>{blog.title}</li>
          })
        }
      </div>
    )
  
  } else {
    return null
  }
    
 
  

}

export default Users
