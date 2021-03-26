import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, FormControl,
  FormLabel,
  Textarea,
  FormHelperText} from '@chakra-ui/react'
import blogService from '../services/blogs'
import { addComment } from '../reducers/blogsReducer'

const Comment = ( {blog}) => {
  const [comment, setComment] = useState({})
  const dispatch = useDispatch()

  const  handleInputChange = (e) => {
    const inputValue = e.target.value
    setComment({
      comment: inputValue
    })
    
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('meow meow')
    const response = await blogService.addComment(blog.id, comment)
    dispatch(addComment(blog.id, response))
    setComment({
      comment: ''
    })
  }
  return (
    <form onSubmit={handleSubmit}>

    <FormControl id="comment" >
      <FormLabel>Comment</FormLabel>
        <Textarea 
          value={comment.comment}
          onChange={handleInputChange}
          placeholder="Here is a sample placeholder"
          size="sm"/>
    <FormHelperText>Please be as objective as possible.</FormHelperText>
      <Button
              mt={4}
              colorScheme="teal"
              type="submit"
            >
              Submit
      </Button>
    </FormControl>


  </form>
  )
}

export default Comment
