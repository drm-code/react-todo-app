import React from 'react'
import { connect } from 'react-redux'

import Input from './Input'
import { addTodo } from '../../actions'

class InputContainer extends React.Component {
  render() {
    return (
      <Input {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    incompleted: state.todo.incompleted,
    todos: state.todo.todos
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer)
