import React from 'react'
import { connect } from 'react-redux'

import List from './List'

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

export default connect(mapStateToProps)(ListContainer)
