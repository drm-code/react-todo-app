import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import Main from './Main'
import reducers from '../reducers'

const store = createStore(reducers, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
