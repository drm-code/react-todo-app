import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Main from './Main'
import reducers from '../reducers'

const store = createStore(reducers)

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
