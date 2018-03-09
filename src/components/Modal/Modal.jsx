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

  save() {
    const payload = {
      ...this.props.current,
      text: this.state.text
    }
    this.props.saveTodo(payload)
  }

  render() {
    return (
      <Modal
        isOpen={this.state.isOpen}
        toggle={this.props.hideModal}
        autoFocus={false}
      >
        <ModalHeader toggle={() => this.props.hideModal()}>
          {`${this.props.current.hasOwnProperty('text') ? 'Editing ' : 'Deleting '} TODO`}
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
                />
              </FormGroup>
            </Form>) ||
            'Are you sure to delete the TODO?'
          }
        </ModalBody>
        <ModalFooter>
          {(this.props.current.hasOwnProperty('text') && (
            <Button onClick={this.save}>Save</Button>
          )) ||
            <div>
              <Button onClick={() => this.props.deleteTodo(this.props.current.id)}>Yes</Button>{' '}
              <Button onClick={this.props.hideModal}>No</Button>
            </div>
          }
        </ModalFooter>
      </Modal>
    )
  }
}

export default ModalComponent
