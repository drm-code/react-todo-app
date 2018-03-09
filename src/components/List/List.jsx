import React from 'react'
import {
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'

class List extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.todos && this.props.todos.map(todo => (
          <ListGroupItem key={Math.random()}>
            <FontAwesome
              name="check-circle"
              size="2x"
              onClick={() => this.props.setDone(todo.id)}
            />
            <a onClick={() => this.props.editTodo(todo.id)}>{todo.text}</a>
            <Button onClick={() => this.props.confirmDelete(todo.id)}>Delete</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    )
  }
}

export default List
