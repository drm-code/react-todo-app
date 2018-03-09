import React from 'react'
import {
  Form,
  FormGroup,
  Input
} from 'reactstrap'

import './Input.css'

class InputComponent extends React.Component {
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
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
      if (this.state.text.length > 0) {
        e.preventDefault()
        this.props.addTodo(this.state.text)
        this.setState({ text: '' })
      } else {
        e.preventDefault()
      }
    }
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Input
            autoFocus
            type="text"
            maxLength="40"
            placeholder="Type something you need TO-DO"
            className="main-input"
            value={this.state.text}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
        </FormGroup>
      </Form>
    )
  }
}

export default InputComponent
