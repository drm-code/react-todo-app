import React from 'react'
import FontAwesome from 'react-fontawesome'
import {
  ListGroupItem
} from 'reactstrap'

import './List.css'

const DONE = '#28a745'
const INCOMPLETED = '#eee'
const PENDING = '#686868'

class ListItem extends React.Component {
  constructor() {
    super()
    this.toggle = this.toggle.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.state = {
      styles: {
        toggle: {
          color: INCOMPLETED,
          cursor: 'pointer',
        },
        text: {
          textDecoration: 'none',
          color: PENDING
        },
      },
      showDelete: false,
      hoverLink: false
    }
  }

  componentDidMount() {
    this.toggle()
  }

  componentWillReceiveProps(newProps) {
    this.toggle()
  }

  toggle() {
    const { done } = this.props.todo

    this.setState(prevState => ({
      styles: {
        toggle: {
          ...prevState.styles.toggle,
          color: done ? DONE : INCOMPLETED
        },
        text: {
          textDecoration: done ? 'line-through' : 'none',
          color: done ? DONE : PENDING
        }
      },
    }))
  }

  onMouseOver() {
    this.setState({
      showDelete: true
    })
  }

  onMouseOut() {
    this.setState({
      showDelete: false
    })
  }

  render() {
    return (
      <ListGroupItem>
        <FontAwesome
          name="check-circle"
          size="2x"
          onClick={() => this.props.setDone(this.props.todo.id)}
          style={this.state.styles.toggle}
        />
        <a
          onClick={() => this.props.editTodo(this.props.todo.id)}
          style={{ cursor: 'pointer' }}
        >
          <span style={this.state.styles.text}>
            {this.props.todo.text}
          </span>
        </a>
        <span>
          <FontAwesome
            name="trash"
            size="2x"
            className="delete"
            onClick={() => this.props.confirmDelete(this.props.todo.id)}
          />
        </span>
      </ListGroupItem>
    )
  }
}

export default ListItem
