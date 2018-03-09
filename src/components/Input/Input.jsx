import React from 'react'
import {
  Form,
  FormGroup,
  Input
} from 'reactstrap'

class InputComponent extends React.Component {
  constructor() {
    super()
    this.onKeyPress = this.onKeyPress.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {
      text: ''
    }
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  onKeyPress(e) {
    if (e.charCode === 13) {
      e.preventDefault()
      this.props.addTodo(this.state.text)
    }
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Input
            type="text"
            value={this.state.text}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
        </FormGroup>
        {this.props.todos && this.props.todos.map(i => (
          <div key={Math.random()}>
            {i.text}
          </div>
        ))}
      </Form>
    )
  }
}

export default InputComponent