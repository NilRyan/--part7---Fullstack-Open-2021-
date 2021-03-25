import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, Link, useRouteMatch} from 'react-router-dom'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import BlogsDisplay from './components/BlogsDisplay'
import Notifications from './components/Notications'
import Error from './components/Error'
import { setBlogs, create } from './reducers/blogsReducer'
import { addNotif, removeNotif, addErrorNotif } from './reducers/notificationReducer'
import { setUser, logoutUser } from './reducers/userReducer'
import { Container } from "@chakra-ui/react"
import Users, { UserBlog } from './components/Users'
import Header from './components/Header'
import { DetailedBlog } from './components/Blog'

const App = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const user = useSelector((state) => state.user)
  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: ''
  })

  useEffect(() => {
    blogService.getAll().then(blogs =>
      dispatch(setBlogs(blogs))
    )  
  }, [])

  useEffect(() => {
    const localUser = JSON.parse(window.localStorage.getItem('User'));

    if(localUser){
      dispatch(setUser(localUser))
      blogService.setToken(localUser.token)

    }
    
  }, [])



  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const currentUser = await loginService.login({
        username, password,
      })
      console.log('current',currentUser)
      window.localStorage.setItem('User', JSON.stringify(currentUser))
      dispatch(setUser(currentUser))
      blogService.setToken(currentUser.token)
      setUsername('')
      setPassword('')
      dispatch(addNotif('login success'))
      setTimeout(() => {
        dispatch(removeNotif())
      }, 3000)
    } catch (exception) {
      dispatch(addErrorNotif(`failed to login ${exception.message}`))
      setTimeout(() => {
        dispatch(removeNotif())
      }, 3000)
      console.log(exception)
    }
  }

  const handleLogout = (e) => {
    e.preventDefault()
    console.log('logout')
    dispatch(logoutUser());
    window.localStorage.removeItem('User');
  }

  const handleUser = (e) => {
    setUsername(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleInput = (e) => {
    const key = e.target.name
    setNewBlog({...newBlog, [key]: e.target.value})
  }

  const handleSubmittedBlog = (submittedBlog) => {
    if(submittedBlog) {
      setNewBlog({
        title: '',
        author: '',
        url: ''
      })
      dispatch(create(submittedBlog))
      dispatch(addNotif(`success added ${submittedBlog.title} by ${submittedBlog.author}`))
      setTimeout(() => {
        dispatch(removeNotif())
      }, 3000)
    }
  }
  const handleError = (exception) => {
    dispatch(addErrorNotif(`failed to create new blog ${exception.message}`))
      setTimeout(() => {
        dispatch(removeNotif())
      }, 3000)
  }
 
  const userMatch = useRouteMatch("/users/:id");
  const userBlogs = userMatch ? blogs.filter((blog) => blog.user.id === userMatch.params.id)
    : null
  
  const blogMatch = useRouteMatch("/blogs/:id")
  const blog = blogMatch ? blogs.find((blog) => blog.id === blogMatch.params.id) : null

  return (
    <Container >
      <Error />
      <Notifications />
    
        <Header user={user} handleLogout={handleLogout} />
      <Switch>
        <Route path="/blogs/:id">
          {blog && <DetailedBlog blog={blog} user={user} />}
        </Route>
        <Route path="/users/:id">
          <UserBlog blogs={userBlogs} />
        </Route>
        <Route path="/users">
        <Users />
        </Route>

        <Route path="/">
          <BlogsDisplay
            user={user}
            newBlog={newBlog}
            blogs={blogs}
            handleInput={handleInput}
            handleSubmittedBlog={handleSubmittedBlog}
            handleError={handleError}
            />
        </Route>

      </Switch>

      <LoginForm
      user={user}
      username={username} 
      password={password}
      handlePassword={handlePassword}
      handleUser={handleUser}
      handleLogin={handleLogin}
      blogService={blogService} /> 
      
    </Container>
  )
}

export default App