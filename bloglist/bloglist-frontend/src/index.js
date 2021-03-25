import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import App from './App'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(<Provider store={store}>
  <Router>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Router>
  </Provider>, document.getElementById('root'))