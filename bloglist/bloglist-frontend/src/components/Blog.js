import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { likeBlog, deleteBlog } from '../reducers/blogsReducer'
import { Link as ReactLink} from 'react-router-dom'
import { Button, Link} from '@chakra-ui/react'
import Togglable from './Togglable'
import blogService from '../services/blogs'

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: 'solid',
  borderWidth: 1,
  marginBottom: 5
}
const Blog = ({ blog}) => {
  
 

return (
  <div style={blogStyle} className="blogs">
    <Link as={ReactLink} to={`/blogs/${blog.id}`}>"{blog.title}" </Link> by <b>{blog.author}</b>
  </div>
)
}

export const DetailedBlog = ({blog, user}) => {
  const dispatch = useDispatch()
 
  const like = blog.likes
  useEffect(() => {
    blogService.like( blog.id,
      {
        user: blog.user.id,
        likes: like,
        author: blog.author,
        title: blog.title,
        url: blog.url
      }
    ) 
  }, [like])

  const handleLike = () => {
    dispatch(likeBlog(blog.id));
  }
  
  const handleRemove = async () => {
    if(window.confirm(`Would you really like to delete ${blog.title} by ${blog.author}?`)){
      await blogService.deleteBlog(blog.id);
      dispatch(deleteBlog(blog.id))

    }
  }

  return (
    <div style={blogStyle}>
      <div><h1>"{blog.title}" by {blog.author} </h1></div>
      <div className="url">
       {blog.url}
      </div>

      <div >
        {like} <Button colorScheme="green" variant="solid" size="xs" className="likes" onClick={handleLike}>like</Button>
      </div>

      <div>
       added by {blog?.user?.name}
      </div>
     
      { blog.user.name === user.name ?
        <Button colorScheme="orange" variant="ghost" size="xs" onClick={handleRemove} className="remove">remove</Button>
        : null
      }
  </div>

  )
}
  


export default Blog
