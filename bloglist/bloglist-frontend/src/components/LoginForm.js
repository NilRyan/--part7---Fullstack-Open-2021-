import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container } from '@chakra-ui/layout'

const LoginForm = ({ user, username, password, handleLogin, handleUser, handlePassword}) => {
  if (user === null) {
    return (
    <Container centerContent>
      <Box padding="4" bg="gray.100" maxW="3xl"> 
      <form onSubmit={handleLogin}>
      <div>
        username
          <input
          data-test="username"
          key="username"
          autoComplete="username"
          type="text"
          value={username}
          name="Username"
          onChange={handleUser}
          />
      </div>

      <div>
        password
          <input
          data-test="password"
          key="password"
          autoComplete="current-password"
          type="password"
          value={password}
          name="Password"
          onChange={handlePassword}
          />
      </div>
      
      <button type="submit">login</button>
    </form>

      </Box>

    </Container>
  )
  } else {
    return null
  }
  }

LoginForm.propTypes = {
  user: PropTypes.object,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleUser: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
}
export default LoginForm
