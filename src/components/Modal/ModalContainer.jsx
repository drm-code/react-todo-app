import React from 'react'
import { connect } from 'react-redux'

import Modal from './Modal'

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

})

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
