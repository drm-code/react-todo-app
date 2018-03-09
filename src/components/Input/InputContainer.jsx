import React from 'react'
import { connect } from 'react-redux'

import Input from './Input'
import { addTodo } from '../../actions'

function InputContainer(props) {
  return (
    <Input {...props} />
  )
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: text => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(InputContainer)
