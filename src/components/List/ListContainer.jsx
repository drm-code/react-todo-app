import React from 'react'
import { connect } from 'react-redux'

import List from './List'
import {
  editTodo,
  setDone,
  confirmDelete
} from '../../actions'

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
  editTodo: (id) => dispatch(editTodo(id)),
  setDone: (id) => dispatch(setDone(id)),
  confirmDelete: (id) => dispatch(confirmDelete(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
