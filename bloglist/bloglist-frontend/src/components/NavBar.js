import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  ChevronRightIcon,
  Container
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    // import { Link } from "@reach/router"

<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink as={Link} to="/">
      Blogs
    </BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink as={Link} to="/users">
      Users
    </BreadcrumbLink>
  </BreadcrumbItem>
 
</Breadcrumb>
  )
}

export default NavBar
