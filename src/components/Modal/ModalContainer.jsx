import React from 'react'
import { connect } from 'react-redux'

import Modal from './Modal'
import {
  saveTodo,
  hideModal,
  deleteTodo
} from '../../actions'

class ModalContainer extends React.Component {
  render() {
    return (
      <Modal {...this.props} />
    )
  }
}

const mapStateToProps = ({ modal, todo }) => ({
  isOpen: modal.isOpen,
  current: todo.current
})

const mapDispatchToProps = (dispatch) => ({
  saveTodo: todo => dispatch(saveTodo(todo)),
  hideModal: () => dispatch(hideModal()),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
