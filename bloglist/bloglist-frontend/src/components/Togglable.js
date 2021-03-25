import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Button, Container } from '@chakra-ui/react'
import PropTypes from 'prop-types';

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : ''}
  const showWhenVisible = { display: visible ? '' : 'none'}

  const toggleVisibility = () => {
    setVisible(!visible)
  }
  
  useImperativeHandle(ref, () => {
    return {toggleVisibility}
  })

  return (
    <Container>
      <div style={hideWhenVisible}>
        <Button colorScheme="teal" size="sm" variant="outline" onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button colorScheme="red" size="sm" variant="ghost" onClick={toggleVisibility}>{props.hideLabel || "cancel"}</Button>
      </div>
    </Container>
  )
}
)

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

Togglable.displayName = "Togglable";

export default Togglable