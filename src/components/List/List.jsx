import React from 'react'
import { ListGroup } from 'reactstrap'

import './List.css'
import ListItem from './ListItem'

class List extends React.Component {
  render() {
    const { todos, incompleted, ...props }  = this.props

    return (
      <div>
        {(incompleted > 0 &&
          <p className="text-right pending">
            {`${incompleted} ${incompleted === 1 ? 'Item ' : 'Items '} left`}
          </p>) ||
          <p className="text-right no-pending">You're free for the rest of the day \o/</p>
        }
        <ListGroup>
          {todos && todos.map(todo => (
            <ListItem
              key={Math.random()}
              todo={todo}
              {...props}
              />
          ))}
        </ListGroup>
      </div>
    )
  }
}

export default List
