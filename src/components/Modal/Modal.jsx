import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap'

class ModalComponent extends React.Component {
  constructor() {
    super()
    this.toggle = this.toggle.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.save = this.save.bind(this)
    this.state = {
      isOpen: false,
      text: '',
      payload: {}
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      isOpen: newProps.isOpen,
      text: newProps.current.text || ''
    })
  }

  toggle() {
    this.setState({
      isOpen: false
    })
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  onKeyPress(e) {
    if (e.charCode === 13) {
      e.preventDefault()
      this.save()
    }
  }

  save() {
    if (this.state.text.length > 0) {
      const payload = {
        ...this.props.current,
        text: this.state.text
      }
      this.props.saveTodo(payload)
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.state.isOpen}
        toggle={this.props.hideModal}
        autoFocus={false}
      >
        <ModalHeader toggle={() => this.props.hideModal()}>
          {`${this.props.current.hasOwnProperty('text') ? 'Editing ' : 'Deleting '} TO-DO`}
        </ModalHeader>
        <ModalBody>
          {(this.props.current.text &&
            <Form>
              <FormGroup>
                <Input
                  autoFocus
                  type="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  onKeyPress={this.onKeyPress}
                />
              </FormGroup>
            </Form>) ||
            'Are you sure to delete the TO-DO?'
          }
        </ModalBody>
        <ModalFooter>
          {(this.props.current.hasOwnProperty('text') && (
            <Button
              onClick={this.save}
              color="primary"
            >
              Save
            </Button>
          )) ||
            <div>
              <Button
                onClick={() => this.props.deleteTodo(this.props.current.id)}
                color="danger"
              >
                Yes
              </Button>{' '}
              <Button
                onClick={this.props.hideModal}
                color="link"
              >
                No
              </Button>
            </div>
          }
        </ModalFooter>
      </Modal>
    )
  }
}

export default ModalComponent
