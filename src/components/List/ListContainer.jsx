import React from 'react'
import { connect } from 'react-redux'

import List from './List'
import { editTodo } from '../../actions'

class ListContainer extends React.Component {
  render() {
    return (
      <List {...this.props} />
    )
  }
}

const mapStateToProps = ({ todo }) => ({
  todos: todo.todos
})

const mapDispatchToProps = (dispatch) => ({
  editTodo: (id) => dispatch(editTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
