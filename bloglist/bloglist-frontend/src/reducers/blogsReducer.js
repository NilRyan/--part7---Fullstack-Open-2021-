export const setBlogs = (blogs) => {
  return {
    type: 'SET_BLOGS',
    payload: blogs
  }
}

export const create = (blog) => {
  return {
    type: 'CREATE_BLOG',
    payload: blog
  }
}

export const likeBlog = (id) => {
  return {
    type: 'LIKE_BLOG',
    payload: id
  }
}

export const deleteBlog = (id) => {
  return {
    type: 'DELETE_BLOG',
    payload: id
  }
}
export const addComment = (id, comment) => {
  return {
    type: 'COMMENT',
    payload: {
      id,
      comment
    }
  }
}

const blogsReducer = (state = [], action) => {
  switch (action.type) {

    case 'SET_BLOGS':
      return [...state, ...action.payload]

    case 'CREATE_BLOG':
      return [...state, action.payload]

    case 'DELETE_BLOG':
      return state.filter((blog) => blog.id !== action.payload)

    case 'LIKE_BLOG':
      const blogs = state.filter((blog) => blog.id !== action.payload)
      const likedBlog = state.find((blog) => blog.id === action.payload)
      likedBlog.likes += 1
      return [...blogs, likedBlog]
    
    case 'COMMENT':
      const blags = state.filter((blog) => blog.id !== action.payload.id )
      const commentedBlog = state.find( (blog) => blog.id === action.payload.id)
      commentedBlog.comments = [...commentedBlog.comments, action.payload.comment]
      return [...blags, commentedBlog]

    default:
      return state
  }
}

export default blogsReducer