import React from 'react'
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap'

class List extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.todos && this.props.todos.map(todo => (
          <ListGroupItem key={Math.random()}>{todo.text}</ListGroupItem>
        ))}
      </ListGroup>
    )
  }
}

export default List
