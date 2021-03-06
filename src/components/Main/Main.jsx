import React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

import Input from '../Input'
import Modal from '../Modal'
import List from '../List'
import { getTodos } from '../../actions'
import './Main.css'

class Main extends React.Component {
  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return (
      <Container>
        <Row>
          <Col
            xs="12"
            className="text-center"
          >
            <h1>TO-DO App</h1>
          </Col>
          <Col
            xs="12"
            sm={{
              size: 8,
              offset: 2
            }}
          >
            <Modal />
            <Input />
            <List />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(getTodos())
})

export default connect(null, mapDispatchToProps)(Main)
