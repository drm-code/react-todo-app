import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap'

class ModalComponent extends React.Component {
  constructor() {
    super()
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      isOpen: newProps.isOpen
    })
  }

  toggle() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <Modal
        isOpen={this.state.isOpen}
        toggle={this.toggle}
      >
        <ModalHeader toggle={this.toggle}>
          {`${this.props.current.hasOwnProperty('id') ? 'Editing ' : 'Deleting '} TODO`}
        </ModalHeader>
        <ModalBody>{this.props.current.text}</ModalBody>
        <ModalFooter>
          {(this.props.current.hasOwnProperty('text') && (
            <Button>Save</Button>
          )) ||
            <div>
              <Button>Delete</Button>
              <Button>Cancel</Button>
            </div>
          }
        </ModalFooter>
      </Modal>
    )
  }
}

export default ModalComponent
