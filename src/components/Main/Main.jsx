import React from 'react'
import { connect } from 'react-redux'

class Main extends React.Component {
  render() {
    return (
      <div>Hello from Redux</div>
    )
  }
}

export default connect(null)(Main)
