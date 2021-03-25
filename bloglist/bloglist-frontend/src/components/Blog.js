import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { likeBlog, deleteBlog } from '../reducers/blogsReducer'
import { Button } from '@chakra-ui/react'
import Togglable from './Togglable'
import blogService from '../services/blogs'

const Blog = ({ blog, user}) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
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
  <div style={blogStyle} className="blogs">
    <div>
    {blog.title} {blog.author}
    </div>
  
    <Togglable 
      buttonLabel="view" 
      hideLabel="hide">
    <div className="url">
     {blog.url}
    </div>
    <div >
      {like} <Button colorScheme="green" variant="solid" size="xs" className="likes" onClick={handleLike}>like</Button>
    </div>
    {blog?.user?.name}
    { blog.user.name === user.name ?
      <Button colorScheme="orange" variant="ghost" size="xs" onClick={handleRemove} className="remove">remove</Button>
      : null
    }
    
    </Togglable>
  </div>
)
}
  


export default Blog
