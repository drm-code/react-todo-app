import React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import Input from '../Input'
import { getTodos } from '../../actions'

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
            sm={{
              size: 8,
              offset: 2
            }}
            >
            <Input />
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
