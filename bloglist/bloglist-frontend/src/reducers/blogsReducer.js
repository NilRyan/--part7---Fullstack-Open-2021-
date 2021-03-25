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

const blogsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BLOGS':
      return [...state, ...action.payload]
    case 'CREATE_BLOG':
      return [...state, action.payload]
    default:
      return state
  }
}

export default blogsReducer